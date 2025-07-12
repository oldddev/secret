import { GiDragonOrb } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
import { GiBroadsword } from "react-icons/gi";
import { GiBattleAxe } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";

export default function Sidebar() {
  return (
    <nav className="h-screen bg-neutral-950 min-w-15 flex flex-col border-r-1 border-neutral-800 justify-between">
      <div>
        <h1 className="w-full flex items-center justify-center h-15 border-b-1 border-neutral-800">
          <GiDragonOrb size={20} />
        </h1>
        <h1 className="w-full flex items-center justify-center h-15 hover:bg-sky-600 border-b-1 border-neutral-950">
          <IoGameController size={20} />
        </h1>
        <h1 className="w-full flex items-center justify-center h-15 hover:bg-sky-600 border-b-1 border-neutral-950">
          <GiBroadsword size={20} />
        </h1>
        <h1 className="w-full flex items-center justify-center h-15 hover:bg-sky-600 border-b-1 border-neutral-950">
          <GiBattleAxe size={20} />
        </h1>

        <h1 className="w-full flex items-center justify-center h-15 hover:bg-sky-600 border-b-1 border-neutral-950">
          <RiTeamFill size={20} />
        </h1>
      </div>
      <h1 className="w-full flex items-center justify-center h-15 hover:bg-sky-600 border-b-1 border-neutral-950">
        <IoMdSettings size={20} />
      </h1>
    </nav>
  );
}
