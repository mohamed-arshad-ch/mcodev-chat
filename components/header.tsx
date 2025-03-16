import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-white dark:bg-slate-800 shadow-sm py-3 px-4">
      <div className="container mx-auto max-w-4xl flex items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 relative mr-3">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="MCodev Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
          </div>
          <h1 className="text-xl font-semibold text-slate-800 dark:text-white">MCodev AI Assistant</h1>
        </div>
      </div>
    </header>
  )
}

