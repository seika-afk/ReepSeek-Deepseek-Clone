'use client'
import { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/sidebar";
import PromptBox from "@/components/Promptbox";
import Message from "@/components/Message"; 

export default function MyComponent() {
  const [expand, setExpand] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar expand={expand} setExpand={setExpand} />

      {/* Main Chat Section */}
      <div className="flex-1 flex flex-col items-center justify-between px-4 pb-8 bg-[#292a2d] text-white relative">
        
        {/* Mobile Top Bar */}
        <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
          <Image
            onClick={() => setExpand(!expand)}
            className="rotate-180 cursor-pointer"
            src="/assets/menu_icon.svg"
            alt="Menu icon"
            width={40}
            height={40}
          />
          <Image
            className="opacity-70"
            src="/assets/chat_icon.svg"
            alt="Chat icon"
            width={40}
            height={40}
          />
        </div>

        {/* Chat Area */}
        <div className="flex-1 w-full max-w-3xl overflow-y-auto pt-20 pb-24">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/logo_icon.svg"
                  alt="Logo"
                  width={64}
                  height={64}
                  className="h-16 w-16"
                />
                <p className="text-2xl font-medium">Hi, I am ReepSeek</p>
              </div>
              <p className="text-sm mt-2 opacity-80">
                How can I help you today?
              </p>
            </div>
          ) : (
            messages.map((msg, i) => (
              <Message key={i} role={msg.role} content={msg.content} />
            ))
          )}
        </div>

        {/* Prompt Box */}
        <PromptBox
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setMessages={setMessages} 
        />

        {/* Footer Note */}
        <p className="text-xs absolute bottom-1 text-gray-500">
          AI-generated, for reference only.
        </p>
      </div>
    </div>
  );
}

