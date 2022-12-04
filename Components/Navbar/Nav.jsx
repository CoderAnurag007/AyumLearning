import React from "react";
import Image from "next/image";
const Nav = () => {
  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <Image
              style={{ marginTop: "-5px" }}
              width={100}
              height={40}
              src={`/ayumTranparent.png`}
              loading="eager"
              alt="Ayum"
            />
            <span className="ml-3 text-xl text-cyan-400">Learning</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"></nav>
          <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            <a href="https://ayum.in" target={"_blank"}>
              {" "}
              Go To Ayum Health
            </a>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Nav;
