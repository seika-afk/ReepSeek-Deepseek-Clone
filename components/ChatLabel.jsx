import Image from "next/image";
import React from "react";

const ChatLabel = ({ openMenu, setOpenMenu }) => {
  return (
    <div className="flex items-center justify-between p-2 text-white/80 hover:bg-white/10 rounded-lg text-sm group cursor-pointer">
      <p className="group-hover:max-w-[83%] truncate">Chat Name Here</p>

      <div className="relative flex items-center justify-center h-6 w-6 aspect-square">
        {/* Menu button */}
        <button
          onClick={() => setOpenMenu({ open: !openMenu.open })}
          className="flex items-center justify-center h-6 w-6 hover:bg-black/80 rounded-lg"
        >
          <Image
            width={16}
            height={16}
            src="/assets/three_dots.svg"
            alt="menu"
            className="w-4"
          />
        </button>

        {/* Dropdown */}
        {openMenu.open && (
          <div className="absolute -right-36 top-6 bg-gray-700 rounded-xl w-max p-2 shadow-lg">
            <div className="flex items-center gap-3 hover:bg-white/10 px-3 py-2 rounded-lg cursor-pointer">
              <Image width={16} height={16} src="/assets/pencil_icon.svg" alt="rename" />
              <p>Rename</p>
            </div>
            <div className="flex items-center gap-3 hover:bg-white/10 px-3 py-2 rounded-lg cursor-pointer">
              <Image width={16} height={16} src="/assets/delete_icon.svg" alt="delete" />
              <p>Delete</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatLabel;

