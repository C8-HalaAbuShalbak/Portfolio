import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { TypeAnimation } from "react-type-animation";
const Contact = () => {
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [thank, setThank] = useState(false);
  const handleThankMsg = () => {
    setThank(true);
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_j5381wl",
        "template_c5evtcx",
        form.current,
        "OvNxWqM4ZNoMso80y"
      )
      .then(
        (result) => {
          setMsg("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setMsg("FAILED...");
        }
      );
  };
  return (
    <div
      id="contactMe"
      className="flex h-screen  rounded-lg m-auto  items-center w-[90vw]  bg-none text-white shadow-lg shadow-white "
    >
      <div className="mx-auto w-full max-w-lg">
       
        <h1 className="text-4xl font-medium mb-7">Contact Me</h1>

        <form 
          action="https://api.web3forms.com/submit"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative z-0">
              <input
                type="text"
                name="name"
                required
                className="peer block w-full appearance-none border-0 border-b border-gray-200 bg-transparent py-2.5 px-0  text-violet-100 text-lg focus:border-indigo-200 focus:outline-focus focus:ring-0 cursor-none"
                placeholder=" "
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <label className="absolute top-0 -z-10 origin-[0] -translate-y-6 scale-0 transform text-md font-normal text-gray-100/75 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-yellow-400 peer-focus:dark:text-yellow-100">
                Your name
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="text"
                name="email"
                required
                className="peer block w-full appearance-none border-0 border-b border-gray-200 bg-transparent py-2.5 px-0  text-violet-100 text-lg focus:border-indigo-200 focus:outline-focus focus:ring-0 cursor-none"
                placeholder=" "
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label className="absolute top-0 -z-10 origin-[0] -translate-y-6 scale-0 transform text-md font-normal text-gray-100/75 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-yellow-400 peer-focus:dark:text-yellow-100">
                Your email
              </label>
            </div>
            <div className="relative z-0 col-span-2">
              <textarea
                name="message"
                rows="5"
                className="peer block w-full appearance-none border-0 border-b border-gray-200 bg-transparent py-2.5 px-0  text-violet-100 text-lg focus:border-indigo-200 focus:outline-focus focus:ring-0 cursor-none"
                placeholder=" "
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
              <label className="absolute top-0 -z-10 origin-[0] -translate-y-6 scale-0 transform text-md font-normal text-gray-100/75 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-yellow-400 peer-focus:dark:text-yellow-100">
                Your message
              </label>
            </div>
          </div>
          <button
            type="submit"
            value="Send"
            className="mt-5 rounded-md bg-black px-10 py-2 text-white cursor-none hover:shadow-md hover:shadow-white"
            onClick={handleThankMsg}
          >
            Send Message
          </button>
          {thank && name && email && (
            <TypeAnimation
              sequence={[

                " Thank you for contacting.You are always welcome to share your thoughts",
                1500,
              ]}
              wrapper="div"
              speed={45}
              deletionSpeed={45}
              className="mt-3 h-2/5 text-lg text-emerald-400 font-normal bg-transparent"
              repeat={Infinity}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
