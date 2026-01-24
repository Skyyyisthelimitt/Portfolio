'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import profileImage from '@/app/profile.png';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
}

const QUICK_QUESTIONS = [
  "Tell me about yourself",
  "What projects have you built?",
  "What are your skills?",
];

// Function to render markdown-like text (bold and line breaks)
const renderMessage = (text: string) => {
  // Split by double line breaks to create paragraphs
  const paragraphs = text.split(/\n\n+/);
  
  return paragraphs.map((paragraph, pIndex) => {
    // Convert **text** to <strong>text</strong>
    const parts = paragraph.split(/(\*\*.*?\*\*)/g);
    
    return (
      <p key={pIndex} style={{ marginBottom: pIndex < paragraphs.length - 1 ? '0.75rem' : '0' }}>
        {parts.map((part, index) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            const boldText = part.slice(2, -2);
            return <strong key={index}>{boldText}</strong>;
          }
          // Preserve single line breaks within paragraphs
          return <span key={index}>{part.split('\n').map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}</span>;
        })}
      </p>
    );
  });
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I'm Gelo's Portfolio Assistant. How can I help you?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  // Generate a random session ID for this visit so the bot remembers context
  const [sessionId] = useState(() => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));

  const WEBHOOK_URL = process.env.NEXT_PUBLIC_CHATBOT_WEBHOOK_URL || '';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async (messageText: string) => {
    if (!messageText.trim() || isLoading) return;

    const userMessage = messageText.trim();
    setInput('');
    setShowQuickQuestions(false);
    setMessages((prev) => [
      ...prev,
      {
        role: 'user',
        content: userMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setIsLoading(true);

    try {
      if (!WEBHOOK_URL) {
        throw new Error('Webhook URL not configured');
      }

      console.log('Sending to:', WEBHOOK_URL);
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: userMessage, 
          sessionId: sessionId 
        }),
      });

      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Response error:', errorText);
        throw new Error(`Failed to get response: ${response.status}`);
      }

      // Check if response has content
      const responseText = await response.text();
      console.log('Response text (raw):', responseText);
      
      if (!responseText || responseText.trim() === '') {
        throw new Error('Empty response from server');
      }

      let data;
      try {
        data = JSON.parse(responseText);
        console.log('Response data (parsed):', data);
      } catch (parseError) {
        console.error('Failed to parse JSON:', parseError);
        console.error('Response was:', responseText);
        throw new Error('Invalid JSON response from server');
      }
      
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.reply || "Sorry, I couldn't process that.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "Sorry, I'm having trouble connecting right now. Please try again later!",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleQuickQuestion = (question: string) => {
    sendMessage(question);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="chatbot-toggle-wrapper">
        {!isOpen && (
          <div className="chatbot-tooltip">
            <span>Chat with Gelo</span>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="chatbot-toggle"
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="chatbot-close-icon"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <Image
              src={profileImage}
              alt="Chat with Gelo"
              width={56}
              height={56}
              className="object-contain w-full h-full"
            />
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar-header">
                <Image
                  src={profileImage}
                  alt="Gelo"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <h3>Gelo&apos;s Portfolio Assistant</h3>
                <span className="chatbot-status">
                  <span className="status-dot" />
                  Online
                </span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-message-wrapper ${msg.role}`}
              >
                {msg.role === 'assistant' && (
                  <div className="chatbot-avatar-small">
                    <Image
                      src={profileImage}
                      alt="Gelo"
                      width={32}
                      height={32}
                      className="object-contain w-full h-full"
                    />
                  </div>
                )}
                <div className="chatbot-message-content">
                  <div className={`chatbot-message ${msg.role}`}>
                    {renderMessage(msg.content)}
                  </div>
                  {msg.timestamp && (
                    <span className="chatbot-timestamp">{msg.timestamp}</span>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="chatbot-message-wrapper assistant">
                <div className="chatbot-avatar-small">
                  <Image
                    src={profileImage}
                    alt="Gelo"
                    width={32}
                    height={32}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="chatbot-message assistant">
                  <div className="typing-indicator">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            )}

            {/* Quick Questions */}
            {showQuickQuestions && !isLoading && (
              <div className="chatbot-quick-questions">
                <span className="quick-questions-label">Quick questions:</span>
                <div className="quick-questions-list">
                  {QUICK_QUESTIONS.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="quick-question-btn"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="chatbot-input-form">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me about my work and experience..."
              disabled={isLoading}
              className="chatbot-input"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="chatbot-send"
              aria-label="Send message"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22L11 13L2 9L22 2Z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
