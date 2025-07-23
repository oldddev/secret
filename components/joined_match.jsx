export default function JoinedMatch({ data }) {
  return (
    <div className="w-full bg-neutral-900 rounded-xl border-1 border-neutral-800 p-6 flex flex-col gap-2">
      {/* Check this out */}
      <p>
        Tournament ID:{" "}
        <span className="text-neutral-400">{data.tournamentId} </span>
      </p>
      <p>
        Game UID:{" "}
        <span className="text-neutral-400">
          {Math.floor(Math.random() * 34928773) + 234626}
        </span>
      </p>
      <p>
        Prize: <span className="text-neutral-400">{data.prize}</span>
      </p>
      <p>
        Entry: <span className="text-neutral-400">{data.entry}</span>
      </p>
      <p>
        Members:{" "}
        <span className="text-neutral-400">
          {data.members_joined}/{data.max_members}
        </span>
      </p>
      <p>
        Status: <span className="text-neutral-400">{data.status}</span>
      </p>
    </div>
  );
}
