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
  {
    id: 4,
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
    <div className="min-h-screen bg-gradient-to-b from-#251a1d via-#1a1315 to-#251a1d text-white flex flex-col">
      {/* Header */}
      <div
        className="text-center py-8"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <Film className="w-6 h-6" style={{ color: "var(--primary)" }} />
          <h1
            className="text-xl font-bold tracking-wider"
            style={{ color: "var(--primary)" }}
          >
            SCRIPT NOTES
          </h1>
          <Film className="w-6 h-6" style={{ color: "var(--primary)" }} />
        </div>
        <p className="text-gray-400 text-xs tracking-widest uppercase">
          Private Messages Between Our Stars
        </p>
      </div>

      {/* Messages Container */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div
          className="w-full max-w-4xl h-[600px] border-2 rounded-lg bg-black/40 backdrop-blur-sm shadow-2xl flex flex-col"
          style={{ borderColor: "var(--primary)" }}
        >
          {/* Film perforation top */}
          <div
            className="flex gap-2 px-4 py-2 justify-center"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 shrink-0"
                style={{ backgroundColor: "var(--primary)", opacity: "0.4" }}
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
                        ? "bg-gradient-to-br text-white"
                        : "bg-black/60 text-gray-100"
                    }`}
                    style={{
                      ...(message.isUser
                        ? {
                            background:
                              "linear-gradient(135deg, var(--primary), #d97c9c)",
                            borderColor: "var(--primary)",
                          }
                        : { borderColor: "var(--border)" }),
                    }}
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
          <div className="p-4" style={{ borderTop: "1px solid var(--border)" }}>
            <div
              className={`relative flex items-end gap-3 transition-all duration-300 ${
                isFocused ? "filter drop-shadow-lg" : ""
              }`}
              style={
                isFocused
                  ? { filter: "drop-shadow(0 0 10px var(--primary))" }
                  : {}
              }
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
                  className={`w-full bg-black/60 text-white placeholder-gray-500 px-4 py-3 rounded-lg border-2 transition-all duration-300 resize-none overflow-hidden focus:outline-none`}
                  style={{
                    borderColor: isFocused ? "var(--primary)" : "var(--border)",
                    boxShadow: isFocused ? `0 0 8px var(--primary)` : "none",
                    minHeight: "48px",
                    maxHeight: "120px",
                  }}
                  rows={1}
                />
              </div>
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className={`p-3 rounded-lg transition-all duration-300 text-white ${
                  inputValue.trim() ? "scale-100" : "scale-95 opacity-50"
                }`}
                style={{
                  background: inputValue.trim()
                    ? "linear-gradient(135deg, var(--primary), #d97c9c)"
                    : "#1f1212",
                  color: inputValue.trim() ? "white" : "#666",
                }}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 uppercase tracking-wide">
              Press Enter to Send
            </p>
          </div>

          {/* Film perforation bottom */}
          <div
            className="flex gap-2 px-4 py-2 justify-center"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 shrink-0"
                style={{ backgroundColor: "var(--primary)", opacity: "0.4" }}
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
