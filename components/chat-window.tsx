import type { RefObject } from "react"
import type { Message } from "@/types/chat"
import MessageBubble from "./message-bubble"

interface ChatWindowProps {
  messages: Message[]
  isLoading: boolean
  messagesEndRef: RefObject<HTMLDivElement>
}

export default function ChatWindow({ messages, isLoading, messagesEndRef }: ChatWindowProps) {
  return (
    <div className="flex-1 overflow-y-auto py-4 px-2 mb-4 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm shadow-sm">
      <div className="space-y-4">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 text-slate-700 dark:text-slate-200 rounded-2xl py-2 px-4 max-w-[80%] shadow-sm">
              <div className="flex space-x-2">
                <div
                  className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  )
}

