const uniqueId = require("shortid");
import { IoInformationCircleSharp } from "react-icons/io5";
import { SlGameController } from "react-icons/sl";
import JoinedMatch from "@/components/joined_match";

const joined_matches = [
  // {
  //   tournamentId: uniqueId.generate(),
  //   playerUid: Math.floor(Math.random() * 34928773) + 234626,
  //   prize: 500,
  //   entry: "Free",
  //   members_joined: 46,
  //   max_members: 64,
  //   status: "Not yet started.",
  // },
];

export default function Matches() {
  return (
    <>
      {joined_matches.length != 0 && (
        <section className="p-4 flex flex-col gap-3">
          {joined_matches.map((elem) => {
            return <JoinedMatch data={elem} key={elem.tournamentId} />;
          })}
        </section>
      )}
      {!joined_matches.length && (
        <section className="flex items-center justify-center h-[95vh] w-full flex-col gap-5">
          <div className="flex flex-col items-center justify-center gap-4 mb-30 md:mb-0">
            <SlGameController size={45} color="#a1a1a1" />
            <h2 className="text-neutral-400">
              You havn't joined any match yet.
            </h2>
          </div>
        </section>
      )}
    </>
  );
}
