import type { Message } from "@/types/chat"
import { formatDistanceToNow } from "date-fns"
import ReactMarkdown from 'react-markdown'
interface MessageBubbleProps {
  message: Message
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.sender === "user"
  const formattedTime = formatDistanceToNow(new Date(message.timestamp), { addSuffix: true })

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`
        ${
          isUser
            ? "bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100"
            : "bg-emerald-100 dark:bg-emerald-900/30 text-slate-700 dark:text-slate-200"
        }
        rounded-2xl py-2 px-4 max-w-[80%] shadow-sm
      `}
      >
         <ReactMarkdown
              components={{
                p: ({ children }) => <p className="mb-2">{children}</p>,
                strong: ({ children }) => <span className="font-bold">{children}</span>,
                em: ({ children }) => <span className="italic">{children}</span>,
                ul: ({ children }) => <ul className="list-disc ml-4 space-y-2">{children}</ul>,
                li: ({ children }) => <li className="mb-1">{children}</li>,
              }}
            >
 {message.content}
            </ReactMarkdown>
       
        <p className="text-xs mt-1 opacity-60">{formattedTime}</p>
      </div>
    </div>
  )
}

