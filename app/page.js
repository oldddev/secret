import Post from "@/components/post";
import TextPost from "@/components/text_post";
import { FaPaperPlane } from "react-icons/fa6";
import { FiAlertTriangle } from "react-icons/fi";

const posts = [
  {
    author: "Shaik Ali",
    hash: "ae5ebeee",
    likes: 762,
    comments: 32,
    content:
      "Space, in a general sense, refers to the boundless three-dimensional continuum that contains all matter and objects, including planets, stars, and galaxies.",
    image_link:
      "https://cdn.esahubble.org/archives/images/screen/heic0715a.jpg",
  },

  {
    author: "Marwaan SK",
    hash: "ae5bbeea",
    likes: 102,
    comments: 5,
    content:
      "The Space Science Institute is shaping our future by enabling scientists to advance our understanding of Earth and the Universe.",
    image_link:
      "https://cdn.esahubble.org/archives/images/screen/heic0514a.jpg",
  },

  {
    author: "Shaik Ali",
    hash: "ae5ebe6ee",
    likes: 762,
    comments: 32,
    content:
      "Space, in a general sense, refers to the boundless three-dimensional continuum that contains all matter and objects, including planets, stars, and galaxies.",
    image_link:
      "https://cdn.esahubble.org/archives/images/screen/heic0702a.jpg",
  },
  {
    author: "Marwaan SK",
    hash: "ae5bbseeam",
    likes: 102,
    comments: 5,
    content:
      "The Space Science Institute is shaping our future by enabling scientists to advance our understanding of Earth and the Universe.",
    image_link: "https://cdn.esahubble.org/archives/images/large/opo0010a.jpg",
  },
  {
    author: "Marwaan SK",
    hash: "ae5bbseean",
    likes: 102,
    comments: 5,
    content:
      "The Space Science Institute is shaping our future by enabling scientists to advance our understanding of Earth and the Universe.",
    image_link:
      "https://cdn.esahubble.org/archives/images/screen/heic1323a.jpg",
  },
  {
    author: "Marwaan SK",
    hash: "ae5bbseeba",
    likes: 102,
    comments: 5,
    content:
      "The Space Science Institute is shaping our future by enabling scientists to advance our understanding of Earth and the Universe.",
    image_link:
      "https://cdn.esahubble.org/archives/images/screen/heic1818a.jpg",
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
      <section className="h-screen md:flex flex-col hidden md:flex-row w-[100%] p-10">
        <header className="w-full">
          <textarea
            className="w-full bg-neutral-900 h-40 p-5 outline-0 resize-none border-1 border-neutral-800 rounded-t-2xl focus:border-neutral-600"
            placeholder="What are you upto?"
          ></textarea>
          <div className="flex justify-between">
            <input
              type="text"
              className="w-full bg-neutral-900 rounded-bl-2xl border-1 border-neutral-800 outline-0 p-2 px-5 text-neutral-400 focus:border-neutral-600"
              placeholder="Image URL"
            />
            <button className="p-5 px-10 rounded-br-2xl bg-neutral-800 text-neutral-100 hover:bg-sky-600 hover:text-white transition cursor-pointer border-l-1 border-neutral-700">
              <FaPaperPlane />
            </button>
          </div>
          {/* <p className=" text-rose-500 p-5 pl-0 flex items-center gap-2">
            <FiAlertTriangle />
            Enter a valid link!
          </p> */}
        </header>
      </section>
    </main>
  );
}
