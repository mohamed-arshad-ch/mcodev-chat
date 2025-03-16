"use client"

import { Button } from "@/components/ui/button"

interface QuickReplyButtonsProps {
  onQuickReply: (message: string) => void
}

export default function QuickReplyButtons({ onQuickReply }: QuickReplyButtonsProps) {
  const quickReplies = ["Show Web Development Pricing", "EzzyCart Features", "Schedule Demo"]

  return (
    <div className="sticky bottom-0 py-3 flex flex-wrap gap-2 justify-center">
      {quickReplies.map((reply, index) => (
        <Button
          key={index}
          variant="outline"
          className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 shadow-sm"
          onClick={() => onQuickReply(reply)}
        >
          {reply}
        </Button>
      ))}
    </div>
  )
}

