"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PlaneIcon as PaperPlaneIcon } from "lucide-react"

interface MessageInputProps {
  onSendMessage: (message: string) => void
  isLoading: boolean
}

export default function MessageInput({ onSendMessage, isLoading }: MessageInputProps) {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim() && !isLoading) {
      onSendMessage(message)
      setMessage("")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="sticky bottom-0 py-4 bg-gradient-to-t from-slate-50 to-transparent dark:from-slate-900 dark:to-transparent"
    >
      <div className="flex items-center gap-2 bg-white dark:bg-slate-800 rounded-full shadow-md p-1 pl-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-transparent outline-none text-slate-800 dark:text-slate-100 placeholder:text-slate-400"
          disabled={isLoading}
        />
        <Button
          type="submit"
          disabled={!message.trim() || isLoading}
          size="icon"
          className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-white"
        >
          <PaperPlaneIcon className="h-5 w-5" />
          <span className="sr-only">Send message</span>
        </Button>
      </div>
    </form>
  )
}

