"use client";

import Image from "next/image";
import spaceImage from "@/public/imgs/img.jpg";
import { FaHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaComment } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import { HiOutlineLink } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { GrAlert } from "react-icons/gr";

export default function Post({ data }) {
  const [active, setActive] = useState(false);
  return (
    <div className="border-r-1 border-b-1 border-neutral-800 max-w-100 relative z-1">
      <header className="flex justify-between items-center p-5 text-neutral-400">
        <h2 className="flex items-center gap-2">
          <CgProfile />
          {data.author}
        </h2>
        <h2
          className="hover:bg-neutral-800 p-1 rounded-xl cursor-pointer"
          onClick={() => setActive(!active)}
        >
          {!active && <BsThreeDots />}
          {active && <RxCross2 />}
        </h2>
      </header>
      <div className="overflow-hidden p-5 pt-0 relative">
        <Image
          src={data.image_link}
          alt="Shit Image"
          className="rounded-2xl"
          width={350}
          height={350}
        />
      </div>
      <section className="p-4 pt-0 text-neutral-400 leading-6 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <FaHeart color="red" onClick={() => setActive(!active)} />
            <p>{data.likes}</p>
          </div>

          <div className="flex items-center gap-2">
            <FaComment />
            <p>{data.comments}</p>
          </div>
        </div>
        <p>{data.content}</p>
      </section>
      <div
        className={`absolute top-15 right-5 bg-neutral-800 w-40 rounded-xl overflow-hidden ${
          !active ? "hidden" : ""
        }`}
      >
        <p className="p-5 py-3 border-b-1 border-neutral-700 hover:bg-blue-600 flex items-center gap-2">
          <HiOutlineLink />
          Copy URL
        </p>
        <p className="p-5 py-3 hover:bg-red-500 flex items-center gap-2">
          <GrAlert />
          Report
        </p>
      </div>
    </div>
  );
}
