"use client";

import { useRef, useEffect } from "react";
import { Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";
import { useIntelligenceStore } from "@/stores/intelligence-store";
import { IntelligenceMessage } from "./intelligence-message";

export function JarvisChat() {
  const { messages, isTyping, sendMessage } = useIntelligenceStore();
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (inputRef.current?.value.trim()) {
      sendMessage(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col h-[40%] min-h-[300px] border-t border-slate-100 bg-white dark:border-slate-800 dark:bg-slate-950">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
             <Sparkles className="h-8 w-8 text-slate-300 mb-2" />
             <p className="text-xs text-slate-400">Jarvis está pronto.</p>
          </div>
        ) : (
          messages.map((msg, i) => (
            <IntelligenceMessage 
              key={msg.id} 
              message={msg} 
              isLastInGroup={true}
              isGrouped={false}
              isReadOnly={false}
            />
          ))
        )}
        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-slate-400 px-2">
             <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
             <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75" />
             <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150" />
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Composer Area */}
      <div className="p-4 bg-slate-50/50 border-t border-slate-100 dark:bg-slate-900/50 dark:border-slate-800">
        <div className="relative flex items-center gap-2 bg-white rounded-xl border border-slate-200 px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500 transition-all dark:bg-slate-900 dark:border-slate-700">
           <span className="text-slate-400 font-mono text-lg">/</span>
           <input
             ref={inputRef}
             type="text"
             placeholder="Digite um comando ou mensagem..."
             className="flex-1 bg-transparent border-none outline-none text-sm text-slate-800 placeholder:text-slate-400 dark:text-slate-200"
             onKeyDown={(e) => e.key === 'Enter' && handleSend()}
           />
           <button 
             onClick={handleSend}
             className="p-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
           >
             <Send className="h-3.5 w-3.5" />
           </button>
        </div>
        <div className="mt-2 flex items-center justify-between px-1">
           <span className="text-[10px] text-slate-400">Pressione <strong>Enter</strong> para enviar</span>
           <span className="text-[10px] text-slate-400">Use <strong>/</strong> para comandos</span>
        </div>
      </div>
    </div>
  );
}
