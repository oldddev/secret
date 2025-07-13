import { GiDragonOrb } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
import { GiBroadsword } from "react-icons/gi";
import { GiBattleAxe } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import Link from "next/link";
import Settings from "./settings";

export default function Sidebar() {
  return (
    <nav className="h-screen bg-neutral-950 min-w-15 flex flex-col border-r-1 border-neutral-800 justify-between fixed">
      <div>
        <Link
          className="w-full flex items-center justify-center h-15 border-b-1 border-neutral-800"
          href={"/"}
        >
          <GiDragonOrb size={20} />
        </Link>
        <Link
          className="w-full flex items-center justify-center h-15 hover:bg-sky-600 border-b-1 border-neutral-950"
          href={"/match"}
        >
          <IoGameController size={20} />
        </Link>
        <Link
          className="w-full flex items-center justify-center h-15 hover:bg-sky-600 border-b-1 border-neutral-950"
          href={"/create"}
        >
          <GiBroadsword size={20} />
        </Link>
        <Link
          className="w-full flex items-center justify-center h-15 hover:bg-sky-600 border-b-1 border-neutral-950"
          href={"/battle"}
        >
          <GiBattleAxe size={20} />
        </Link>

        <Link
          className="w-full flex items-center justify-center h-15 hover:bg-sky-600 border-b-1 border-neutral-950"
          href={"/friends"}
        >
          <RiTeamFill size={20} />
        </Link>
      </div>
      <Settings />
    </nav>
  );
}
