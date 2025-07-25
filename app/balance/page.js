"use client";
import { useState } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import { FaInfoCircle } from "react-icons/fa";

export default function Create() {
  // 0 = Withdraw, 1 = History
  const [tab, setTab] = useState(0);

  return (
    <section>
      <header className="grid grid-cols-2">
        <p
          className={`border-b-2 ${
            tab === 0 ? "border-sky-600" : "border-neutral-800 cursor-pointer"
          } p-5 text-center`}
          onClick={() => setTab(0)}
        >
          Withdraw
        </p>
        <p
          className={`border-b-2 ${
            tab === 1 ? "border-sky-600" : "border-neutral-800 cursor-pointer"
          } p-5 text-center`}
          onClick={() => setTab(1)}
        >
          History
        </p>
      </header>
      {tab === 0 && (
        <section>
          <div className="flex items-center p-4">
            <input
              type="number"
              placeholder="Enter the amount"
              className="bg-neutral-900 w-full p-5 text-neutral-200 outline-0 border-b-1 border-neutral-600 rounded-tl-2xl focus:border-sky-600"
            />
            <button className="w-20 bg-sky-600 h-16 flex items-center justify-center rounded-tr-2xl">
              <RiArrowRightUpLine size={25} />
            </button>
          </div>

          {/* <div className="p-4 pt-0">
            <h2 className="flex items-center gap-3">
              Request Approved <FaCircleCheck color="lime" />
            </h2>
          </div> */}

          <div className="p-4 pt-0">
            <h2 className="text-neutral-400">
              It may take up to an hour to process the redemption code, which
              will be sent to your email.
            </h2>
          </div>

          {/* <p className="text-neutral-300 p-3">
          You can only withdraw once your balance reach 100 coins.
        </p> */}
        </section>
      )}

      {tab === 1 && (
        <p className="p-4 flex items-center gap-1.5 text-neutral-400">
          <FaInfoCircle /> No history yet.
        </p>
      )}
    </section>
  );
}
