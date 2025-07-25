import Post from "@/components/post";
import { FaPaperPlane } from "react-icons/fa6";
const shortId = require("shortid");

const posts = [
  {
    title: "Clash Of Champions",
    hash: shortId.generate(),
    members_joined: Math.floor(Math.random() * 50),
    max_members: 2,
    prize: 500,
    content:
      "Join our free-to-enter game tournament and compete for real cash prizes — no entry fee, just your skills! ",
    image_link:
      "https://staticg.sportskeeda.com/editor/2020/08/7430d-15967720224804-800.jpg",
  },
  {
    title: "Clash Of Champions",
    hash: shortId.generate(),
    members_joined: Math.floor(Math.random() * 50),
    max_members: 64,
    prize: 500,
    content:
      "Join our free-to-enter game tournament and compete for real cash prizes — no entry fee, just your skills! ",
    image_link:
      "https://staticg.sportskeeda.com/editor/2020/08/7430d-15967720224804-800.jpg",
  },
  {
    title: "Clash Of Champions",
    hash: shortId.generate(),
    members_joined: Math.floor(Math.random() * 50),
    max_members: 64,
    prize: 500,
    content:
      "Join our free-to-enter game tournament and compete for real cash prizes — no entry fee, just your skills! ",
    image_link:
      "https://staticg.sportskeeda.com/editor/2020/08/7430d-15967720224804-800.jpg",
  },
  {
    title: "Clash Of Champions",
    hash: shortId.generate(),
    members_joined: Math.floor(Math.random() * 50),
    max_members: 64,
    prize: 500,
    content:
      "Join our free-to-enter game tournament and compete for real cash prizes — no entry fee, just your skills! ",
    image_link:
      "https://staticg.sportskeeda.com/editor/2020/08/7430d-15967720224804-800.jpg",
  },
  {
    title: "Clash Of Champions",
    hash: shortId.generate(),
    members_joined: Math.floor(Math.random() * 50),
    max_members: 64,
    prize: 500,
    content:
      "Join our free-to-enter game tournament and compete for real cash prizes — no entry fee, just your skills! ",
    image_link:
      "https://staticg.sportskeeda.com/editor/2020/08/7430d-15967720224804-800.jpg",
  },
  {
    title: "Clash Of Champions",
    hash: shortId.generate(),
    members_joined: Math.floor(Math.random() * 50),
    max_members: 64,
    prize: 500,
    content:
      "Join our free-to-enter game tournament and compete for real cash prizes — no entry fee, just your skills! ",
    image_link:
      "https://staticg.sportskeeda.com/editor/2020/08/7430d-15967720224804-800.jpg",
  },
];

export default function Home() {
  return (
    <main className="md:flex">
      <section className="grid grid-cols-1 md:grid-cols-3 md:min-w-[60vw] md:overflow-y-scroll h-screen 2xl:grid-cols-3">
        {posts.map((elem) => {
          return <Post data={elem} key={elem.hash} />;
        })}
      </section>
      <section className="h-screen md:flex hidden flex-col w-[100%] p-10 relative">
        <header className="w-full">
          <textarea
            className="w-full bg-neutral-900 h-40 p-5 outline-0 resize-none border-1 border-neutral-800 rounded-t-2xl focus:border-neutral-600"
            placeholder="What are you upto?"
          ></textarea>
          <input
            type="text"
            className="w-full bg-neutral-900 border-1 border-neutral-800 outline-0 p-2 px-5 text-neutral-400 focus:border-neutral-600 mb-0.5 py-4"
            placeholder="Game Title"
          />
          <div className="flex justify-between">
            <input
              type="text"
              className="w-full bg-neutral-900 rounded-bl-2xl border-1 border-neutral-800 outline-0 p-2 px-5 text-neutral-400 focus:border-neutral-600 mr-0.5"
              placeholder="Image URL"
            />
            <button className="p-5 px-10 rounded-br-2xl bg-neutral-800 text-neutral-100 hover:bg-sky-600 hover:text-white transition cursor-pointer">
              <FaPaperPlane />
            </button>
          </div>
          {/* <p className=" text-rose-500 p-5 pl-0 flex items-center gap-2">
            <FiAlertTriangle />
            Enter a valid link!
          </p> */}
          <p className="text-neutral-400 p-5">
            Posting as:{" "}
            <span className="underline text-sky-600">Shaik Ali</span>
          </p>
        </header>
      </section>
    </main>
  );
}
