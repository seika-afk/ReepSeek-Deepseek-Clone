'use client'
import { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/sidebar";

export default function MyComponent() {
  const [expand, setExpand] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div className="flex h-screen">
        <Sidebar expand={expand} setExpand={setExpand}/>

        <div className="flex-1 flex flex-col items-center justify-center px-4 pb-8 bg-[#292a2d] text-white relative">
          <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
            <Image
              onClick={() => setExpand(!expand)}
              className="rotate-180"
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

          {messages.length === 0 ? (
            <>
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/logo_icon.svg"
                  alt="Logo"
                  width={64}
                  height={64}
                  className="h-16"
                />
                <p className="text-2xl font-medium">Hi, I am ReepSeek</p>
              </div>
              <p className="text-sm mt-2">How Can I Help You Today?</p>
            </>
          ) : (
            <div></div>
          )}
	  {/* prompt box*/}
	  <p className="text-xs absolute bottom-1 text-gray-500"> Ai-generated,for reference only.</p>

        </div>
      </div>
    </div>
  );
}
