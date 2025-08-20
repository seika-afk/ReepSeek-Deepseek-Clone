import React, { useState } from 'react';
import Image from 'next/image';

const PromptBox = (setIsLoading,isLoading) => {
  const [prompt, setPrompt] = useState('');

  return (
    <form
      className={`w-full ${
        false ? 'max-w-3xl' : 'max-w-2xl'
      } bg-[#404045] p-4 rounded-3xl mt-4 transition-all`}
    >
      <textarea
        className="outline-none w-full resize-none overflow-hidden break-words bg-transparent"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <div className="flex items-center justify-between text-sm mt-2">
        <div className="flex items-center gap-2">
          <p className="flex items-center gap-2 text-sm border border-gray-300/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition">
            <Image
              src="/assets/deepthink_icon.svg"
              alt="DeepThink"
              width={20}
              height={20}
            />
            DeepThink (R1)
          </p>

          <p className="flex items-center gap-2 text-sm border border-gray-300/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition">
            <Image
              src="/assets/search_icon.svg"
              alt="Search"
              width={20}
              height={20}
            />
            Search
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Image
            src="/assets/pin_icon.svg"
            alt="Pin"
            width={16}
            height={16}
            className=" w-4 cursor-pointer"
          />

          <button type="button" className={`${prompt ? "bg-primary": "bg-[#71717a]"} rounded-full p-2 cursor-pointer `}>
            <Image
              src={prompt?"assets/arrow_icon.svg":"assets/arrow_icon_dull.svg"}
              alt="Pin"
              width={16}
              height={16}
              className="w-3.5 aspect-squarer"
            />
          </button>
        </div>
      </div>
    </form>
  );
};

export default PromptBox;

