import Searchbox from "@/components/searchbox";
import Sidebar from "@/components/sidebar";
import { Inter } from "next/font/google";

export default function Create() {
  return (
    <section className="flex w-screen">
      <Sidebar />
      <section className="w-full flex flex-col">
        <Searchbox />
        {/* CONTINUE FROM HERE */}
        <section></section>
      </section>
    </section>
  );
}
