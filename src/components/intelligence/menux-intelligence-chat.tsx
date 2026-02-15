"use client";

import { useRef, useEffect } from "react";
import { Send, Sparkles } from "lucide-react";
import { useIntelligenceStore } from "@/stores/intelligence-store";
import { IntelligenceMessage } from "./intelligence-message";

export function MenuxIntelligenceChat() {
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
    <div className="flex h-[40%] min-h-[300px] flex-col border-t border-white/10 bg-transparent">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
             <Sparkles className="h-8 w-8 text-slate-300 mb-2" />
             <p className="text-xs text-slate-400">Menux Intelligence está pronta.</p>
          </div>
        ) : (
          messages.map((msg) => (
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
      <div className="border-t border-white/10 bg-slate-950/28 p-4">
        <div className="relative flex items-center gap-2 rounded-xl border border-white/14 bg-slate-900/58 px-3 py-2 shadow-lg shadow-black/25 transition-all focus-within:border-cyan-300/35 focus-within:ring-2 focus-within:ring-cyan-300/20">
           <span className="text-slate-400 font-mono text-lg">/</span>
           <input
             ref={inputRef}
             type="text"
             placeholder="Digite um comando ou mensagem..."
             className="flex-1 border-none bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-400"
             onKeyDown={(e) => e.key === 'Enter' && handleSend()}
           />
           <button 
             onClick={handleSend}
             className="rounded-lg bg-cyan-600 p-1.5 text-white shadow-sm transition-colors hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-50"
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
