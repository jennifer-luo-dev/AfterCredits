"use client";
import React, { useState, useRef, useEffect } from "react";
import { Film, Send } from "lucide-react";
import { createClient } from "../../utils/supabase/client";

const initialMessages = [
  {
    id: 1,
    sender: "JENNIFER",
    text: "Every date, every note is another scene of us. I hope you like this little gift, and I hope we fill it with memories for a long time.. I love you 🥰.",
    timestamp: "DEC 23, 12:55 PM",
    isUser: false,
  },
];

export default function ScriptNotes() {
  type Message = {
    id: number | string;
    sender: string;
    text: string;
    timestamp: string;
    isUser: boolean;
  };

  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [currentUser, setCurrentUser] = useState<{
    id: string;
    name: string;
  } | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Fetch current user and existing messages on mount
  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        setMessages(initialMessages);

        // Use the project's supabase helper which reads env vars; do not pass `req` here
        const supabase = createClient();
        let user = null;
        try {
          const { data: { user: sUser } = {}, error } =
            await supabase.auth.getUser();

          if (error || !sUser) {
            console.warn("No authenticated user; skipping notes load", error);
            setCurrentUser(null);
            return;
          }

          user = sUser;
        } catch (err) {
          console.warn("Supabase auth.getUser failed:", err);
          setCurrentUser(null);
          return;
        }

        if (!mounted) return;

        setCurrentUser({
          id: user.id,
          name:
            user.email ||
            (user.user_metadata && user.user_metadata.name) ||
            "Unknown",
        });

        // Fetch existing notes (include credentials so server can read session cookie)
        const notesRes = await fetch("/api/notes", {
          credentials: "same-origin",
        });
        if (!notesRes.ok) {
          // console.error("Failed to fetch notes", notesRes.status, await notesRes.text());
          return;
        }

        const notesJson = await notesRes.json();
        const notesArray = Array.isArray(notesJson)
          ? notesJson
          : notesJson.notes || [];

        const mapped = (notesArray || []).map((n: any) => ({
          id: n.id,
          sender:
            n.userId === user.id
              ? "YOU"
              : n.author?.name || n.author?.username || "UNKNOWN",
          text: n.message,
          timestamp: new Date(n.createdAt)
            .toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })
            .toUpperCase(),
          isUser: n.userId === user.id,
        }));

        if (mounted) setMessages(mapped);
      } catch (err) {
        console.error("Error loading notes:", err);
      }
    }

    load();

    return () => {
      mounted = false;
    };
  }, []);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    if (!currentUser?.id) {
      console.error("No authenticated user. Cannot post note.");
      return;
    }

    const payload = { message: inputValue.trim(), userId: currentUser.id };

    try {
      const res = await fetch("/api/notes", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const txt = await res.text();
        console.error("Failed to post note", res.status, txt);
        return;
      }

      const json = await res.json();
      // server may return { note } or the note directly
      const n = json.note ?? json;

      const newMessage = {
        id: n.id,
        sender:
          currentUser?.id === n.userId
            ? "YOU"
            : n.author?.name || n.author?.username || "UNKNOWN",
        text: n.message,
        timestamp: new Date(n.createdAt)
          .toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })
          .toUpperCase(),
        isUser: currentUser?.id === n.userId,
      };

      setMessages((prev) => [...prev, newMessage]);
      setInputValue("");
      // Auto-resize textarea back to normal
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }

      // scroll to bottom
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    } catch (err) {
      console.error("Error sending note:", err);
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
