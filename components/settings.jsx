"use client";
import { useState } from "react";

import { IoMdSettings } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa";

export default function Settings() {
  const [active, setActive] = useState(false);
  return (
    <div className="z-1000">
      <h1
        className="w-full flex items-center justify-center h-15 hover:bg-sky-600 border-neutral-800 cursor-pointer border-t-1 z-100"
        onClick={() => setActive(!active)}
      >
        <IoMdSettings size={20} />
      </h1>
      <div
        className={`absolute bottom-6 left-20 w-50 bg-neutral-900 rounded-xl overflow-hidden border-1 border-neutral-700 ${
          !active ? "hidden" : ""
        }`}
      >
        <h1 className="flex items-center gap-3 p-4 pl-5 hover:bg-sky-600 border-b-1 border-neutral-700">
          <FaGithub />
          <p>Github</p>
        </h1>
        <h1 className="flex items-center gap-3 p-4 pl-5 hover:bg-sky-600 border-b-1 border-neutral-700">
          <FaBook />
          <p>Terms</p>
        </h1>
        <h1 className="flex items-center gap-3 p-4 pl-5 hover:bg-red-500">
          <FaDoorOpen />
          <p>Logout</p>
        </h1>
      </div>
    </div>
  );
}
