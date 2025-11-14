
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send } from 'lucide-react';
import Card from './Card';
import { Message } from '../types';
import { askCoachAI } from '../services/geminiService';

const CoachAICard: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'ai', text: 'Bonjour ! Posez-moi une question sur votre programme.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const aiResponse = await askCoachAI(input);
    const aiMessage: Message = { sender: 'ai', text: aiResponse };
    setMessages(prev => [...prev, aiMessage]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <Card title="Coach IA" icon={Bot} className="md:col-span-2 flex flex-col">
      <div className="flex-grow h-64 overflow-y-auto pr-2 space-y-4 mb-4 bg-gray-50 p-3 rounded-lg">
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.sender === 'ai' && <div className="w-8 h-8 rounded-full bg-ikonga-orange text-white flex items-center justify-center flex-shrink-0"><Bot size={18}/></div>}
            <div className={`max-w-xs md:max-w-sm px-4 py-2 rounded-2xl ${msg.sender === 'user' ? 'bg-ikonga-pink text-ikonga-dark rounded-br-none' : 'bg-gray-200 text-ikonga-dark rounded-bl-none'}`}>
              <p className="text-sm">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-end gap-2 justify-start">
             <div className="w-8 h-8 rounded-full bg-ikonga-orange text-white flex items-center justify-center flex-shrink-0"><Bot size={18}/></div>
             <div className="px-4 py-3 rounded-2xl bg-gray-200 rounded-bl-none">
                <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Votre question..."
          className="flex-grow border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-ikonga-pink"
          disabled={isLoading}
        />
        <button
          onClick={handleSend}
          disabled={isLoading}
          className="bg-ikonga-orange text-white p-2 rounded-r-lg disabled:bg-gray-400 flex items-center justify-center h-[42px] w-[50px]"
        >
          <Send size={20} />
        </button>
      </div>
    </Card>
  );
};

export default CoachAICard;
