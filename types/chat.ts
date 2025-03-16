export interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: string
}


export interface History {
  role:string,
  parts:Array<{text:string}>
}

