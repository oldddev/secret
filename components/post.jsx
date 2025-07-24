"use client";

import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import { HiOutlineLink } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { GrAlert } from "react-icons/gr";
import { TbCoinRupee } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";
import { IoGameController } from "react-icons/io5";
import { MdDoNotDisturbAlt } from "react-icons/md";

import { GiDragonShield } from "react-icons/gi";

export default function Post({ data }) {
  const [active, setActive] = useState(false);
  return (
    <div className="border-r-1 border-b-1 border-neutral-800 max-w-100 relative z-1">
      <header className="flex justify-between items-center p-5 text-neutral-400">
        <h2 className="flex items-center gap-2">
          <GiDragonShield />
          {data.title}
        </h2>
        <h2
          className="hover:bg-neutral-800 p-1 rounded-xl cursor-pointer"
          onClick={() => setActive(!active)}
        >
          {!active && <BsThreeDots />}
          {active && <RxCross2 />}
        </h2>
      </header>
      <div className="overflow-hidden p-5 pt-0 relative flex items-center justify-center">
        <Image
          src={data.image_link}
          alt="Shit Image"
          className="rounded-2xl object-cover"
          width={400}
          height={400}
        />
      </div>
      <section className="p-4 pt-0 text-neutral-400 leading-6 flex flex-col gap-3">
        <div className="flex items-center gap-3 justify-between">
          <div className="flex gap-3">
            <div className="flex items-center gap-2">
              <RiTeamFill onClick={() => setActive(!active)} />
              <p>
                <span>{data.members_joined}</span>/
                <span>{data.max_members}</span>
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              <TbCoinRupee />
              <p>{data.prize}</p>
            </div>
          </div>
          <div>
            <p># {data.hash}</p>
          </div>
        </div>
        <div className="flex flex-col p-1">
          <p>{data.content}</p>
          {data.members_joined >= data.max_members && (
            <button className="flex items-center justify-center gap-4 bg-neutral-700 text-neutral-50 mt-5 p-2 rounded-3xl cursor-not-allowed">
              Max reached <MdDoNotDisturbAlt />
            </button>
          )}
          {data.members_joined < data.max_members && (
            <button className="flex items-center justify-center gap-4 bg-sky-600 text-neutral-50 mt-5 p-2 rounded-3xl">
              JOIN <IoGameController />
            </button>
          )}
        </div>
      </section>
      <div
        className={`absolute top-15 right-5 border-neutral-700 border-1 bg-neutral-800 w-40 rounded-xl overflow-hidden ${
          !active ? "hidden" : ""
        }`}
      >
        <p className="p-5 py-3 border-b-1 border-neutral-700 hover:bg-sky-600 flex items-center gap-2">
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
