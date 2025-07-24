import { GiDragonOrb } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
import { MdOutlineHistory } from "react-icons/md";
import { FaTrophy } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import Link from "next/link";
import Settings from "./settings";

export default function Sidebar() {
  return (
    <nav className="h-dvh bg-neutral-950 min-w-15 flex flex-col border-r-1 border-neutral-800 justify-between fixed z-100 max-h-dvh">
      <div>
        <Link
          className="w-full flex items-center justify-center h-15 border-b-1 border-neutral-800"
          href={"/"}
        >
          <GiDragonOrb size={20} />
        </Link>
        <Link
          className="w-full flex items-center justify-center h-15 hover:bg-sky-600 border-b-1 border-neutral-950"
          href={"/"}
        >
          <IoGameController size={20} />
        </Link>
        <Link
          className="w-full flex items-center justify-center h-15 hover:bg-sky-600 border-b-1 border-neutral-950"
          href={"/match"}
        >
          <FaTrophy size={20} />
        </Link>
        <Link
          className="w-full flex items-center justify-center h-15 hover:bg-sky-600 border-b-1 border-neutral-950"
          href={"/recent"}
        >
          <MdOutlineHistory size={23} />
        </Link>

        <Link
          className="w-full flex items-center justify-center h-15 hover:bg-sky-600 border-b-1 border-neutral-950"
          href={"/balance"}
        >
          <GiMoneyStack size={20} />
        </Link>
      </div>
      <Settings />
    </nav>
  );
}
