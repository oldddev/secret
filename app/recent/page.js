import { MdOutlineHistory } from "react-icons/md";

export default function Friends() {
  return (
    <section className="h-dvh flex items-center justify-center flex-col gap-3">
      <MdOutlineHistory size={40} color="#a1a1a1" />
      <p className="text-neutral-400 mb-25">No recent matches found.</p>
    </section>
  );
}
