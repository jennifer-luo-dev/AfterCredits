"use client";
import React, { useState, useRef, useEffect } from "react";
import { Film, Send } from "lucide-react";

const initialMessages = [
  {
    id: 1,
    sender: "YOU",
    text: "Remember when we danced in the rain? That was magical. Can't wait to make more memories like that.",
    timestamp: "DEC 16, 9:20 AM",
    isUser: true,
  },
  {
    id: 2,
    sender: "JORDAN",
    text: "You make every ordinary day feel extraordinary. Thank you for being you 💖",
    timestamp: "DEC 17, 4:45 AM",
    isUser: false,
  },
  {
    id: 3,
    sender: "YOU",
    text: "Just wanted to tell you that you're the best thing that ever happened to me",
    timestamp: "DEC 18, 3:30 AM",
    isUser: true,
  },
];

export default function ScriptNotes() {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: "YOU",
        text: inputValue.trim(),
        timestamp: new Date()
          .toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })
          .toUpperCase(),
        isUser: true,
      };
      setMessages([...messages, newMessage]);
      setInputValue("");

      // Auto-resize textarea back to normal
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);

    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white flex flex-col">
      {/* Header */}
      <div className="text-center py-8 border-b border-red-900/30">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Film className="w-6 h-6 text-red-600" />
          <h1 className="text-2xl font-bold text-red-100 tracking-wider">
            SCRIPT NOTES
          </h1>
          <Film className="w-6 h-6 text-red-600" />
        </div>
        <p className="text-gray-400 text-xs tracking-widest uppercase">
          Private Messages Between Our Stars
        </p>
      </div>

      {/* Messages Container */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-4xl h-[600px] border-2 border-red-900/50 rounded-lg bg-black/40 backdrop-blur-sm shadow-2xl flex flex-col">
          {/* Film perforation top */}
          <div className="flex gap-3 px-4 py-2 border-b border-red-900/30">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-red-900/40 rounded-full shrink-0"
              ></div>
            ))}
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 scrollbar-thin">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isUser ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-md ${
                    message.isUser ? "items-end" : "items-start"
                  } flex flex-col`}
                >
                  <div
                    className={`p-4 rounded-lg border-2 ${
                      message.isUser
                        ? "bg-gradient-to-br from-red-600 to-pink-600 border-red-500 text-white"
                        : "bg-black/60 border-red-900/50 text-gray-100"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                  <div className="mt-1 px-2">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      {message.sender} · {message.timestamp}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-red-900/30 p-4">
            <div
              className={`relative flex items-end gap-3 transition-all duration-300 ${
                isFocused
                  ? "filter drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]"
                  : ""
              }`}
            >
              <div className="flex-1 relative">
                <textarea
                  ref={textareaRef}
                  value={inputValue}
                  onChange={handleInput}
                  onKeyDown={handleKeyDown}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Write your note on the script..."
                  className={`w-full bg-black/60 text-white placeholder-gray-500 px-4 py-3 rounded-lg border-2 transition-all duration-300 resize-none overflow-hidden ${
                    isFocused
                      ? "border-red-600 ring-2 ring-red-600/30"
                      : "border-red-900/50"
                  } focus:outline-none`}
                  rows={1}
                  style={{ minHeight: "48px", maxHeight: "120px" }}
                />
              </div>
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className={`p-3 rounded-lg transition-all duration-300 ${
                  inputValue.trim()
                    ? "bg-gradient-to-br from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white shadow-lg shadow-red-600/50 scale-100"
                    : "bg-gray-800 text-gray-600 scale-95 opacity-50"
                }`}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 uppercase tracking-wide">
              Press Enter to Send
            </p>
          </div>

          {/* Film perforation bottom */}
          <div className="flex gap-3 px-4 py-2 border-t border-red-900/30">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-red-900/40 rounded-full shrink-0"
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Help Button */}
      <button className="fixed bottom-8 right-8 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-700 transition">
        ?
      </button>

      {/* moved scrollbar-thin rules to globals.css */}
    </div>
  );
}
