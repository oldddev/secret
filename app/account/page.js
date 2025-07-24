"use client";

import AccountForm from "@/components/account_form";
import { useState } from "react";
export default function Account() {
  const [tab, setTab] = useState(0);
  return (
    <section className="h-dvh flex items-center justify-center">
      <div className="bg-neutral-800 w-70 md:w-100 rounded-2xl overflow-hidden border-1 border-neutral-700 mb-20 md:mb-50">
        <header className="grid grid-cols-2">
          <button
            className={`border-b-2 ${
              tab === 0 ? "border-sky-600" : "border-neutral-700"
            } p-3 cursor-pointer`}
            onClick={() => setTab(0)}
          >
            Create
          </button>
          <button
            className={`border-b-2 ${
              tab === 1 ? "border-sky-600" : "border-neutral-700"
            } p-3 cursor-pointer`}
            onClick={() => setTab(1)}
          >
            Login
          </button>
        </header>
        {tab === 0 && <AccountForm tab={tab} />}
        {tab === 1 && <AccountForm tab={tab} />}
      </div>
    </section>
  );
}
