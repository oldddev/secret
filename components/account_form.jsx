import { useRef, useState } from "react";
import { PiCheckCircleFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { BiSolidErrorCircle } from "react-icons/bi";
import { FaLock } from "react-icons/fa";
import { BsDice6Fill } from "react-icons/bs";
import { AiOutlineReload } from "react-icons/ai";
const shortId = require("shortid");

const crypto = require("crypto");

export default function AccountForm({ tab }) {
  const [error, setError] = useState(false);
  const [loading, setLoding] = useState(false);

  const PASSWORD_LENGTH = 14;
  const inputFirst = useRef(null);
  const formRef = useRef(null);
  const inputSecond = useRef(null);

  const createUser = async (body) => {
    setLoding(true);
    let rawResponse = await fetch("/api/registerUser", {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json",
      },
    });
    setLoding(false);
    const response = await rawResponse.json();
  };

  const loginUser = async (body) => {
    setLoding(true);
    let rawResponse = await fetch("/api/loginUser", {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json",
      },
    });
    setLoding(false);
    const response = await rawResponse.json();
    if (!response.valid) setError("Invalid email or password.");
  };

  const generatePassword = () => {
    const hash = crypto
      .createHash("sha256")
      .update(shortId.generate())
      .digest("hex");
    inputSecond.current.value = hash.slice(0, PASSWORD_LENGTH);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputF = inputFirst.current.value.trim();
    const inputS = inputSecond.current.value.trim();

    if (tab === 0) {
      if (!inputF) {
        setError("Email cannot be empty.");
        return;
      }
      if (!inputS || inputS.length < 8) {
        setError("Choose a long password.");
        return;
      }
    }
    if (tab === 1) {
      if (!inputF || !inputS || inputS.length < 8) {
        setError("Invalid email or password");
        return;
      }
    }

    setError(false);

    const submitForm = async () => {
      const rawForm = formRef.current;
      const form = new FormData(rawForm);
      const formObject = Object.fromEntries(form.entries());
      const body = JSON.stringify(formObject);
      if (tab === 0) {
        createUser(body);
      } else {
        loginUser(body);
      }
    };
    submitForm();
  };
  return (
    <form ref={formRef}>
      <div className="flex">
        <h2 className="pl-3 w-8 border-b-1 border-neutral-600 flex items-center justify-center">
          <MdEmail />
        </h2>
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          ref={inputFirst}
          required
          className="p-4 w-full outline-0 border-b-1 border-neutral-600 px-5"
        />
      </div>
      <div className="flex">
        <h2 className="pl-4 w-7 border-b-1 border-neutral-600 flex items-center justify-center">
          <FaLock />
        </h2>
        <input
          type={tab === 0 ? "text" : "password"}
          name="password"
          required
          ref={inputSecond}
          placeholder={tab === 0 ? "Enter new password" : "Enter your password"}
          className="p-4 w-full outline-0 border-b-1 border-neutral-600 px-5"
        />
        {tab === 0 && (
          <h2
            className="pr-4 w-7 border-b-1 border-neutral-600 flex items-center justify-center cursor-pointer"
            onClick={generatePassword}
          >
            <BsDice6Fill />
          </h2>
        )}
      </div>
      {error && (
        <p className="p-4 pb-0 text-red-500 flex items-center gap-2">
          <BiSolidErrorCircle /> {error}
        </p>
      )}
      <p className="p-4 text-neutral-300">
        By submitting this form, you agree to the{" "}
        <span className="underline text-sky-600">terms.</span>
      </p>
      <button
        type="submit"
        className={`bg-sky-600 p-3 w-full flex items-center gap-2 justify-center cursor-pointer  transition-opacity ${
          loading ? "opacity-50" : "opacity-100"
        }`}
        onClick={handleSubmit}
      >
        Create Account
        {!loading && <PiCheckCircleFill />}
        {loading && <AiOutlineReload className="animate-spin" />}
      </button>
    </form>
  );
}
