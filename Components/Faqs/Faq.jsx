import React from "react";

const Faq = () => {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-800">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">
                  Who is Frontend Developer ?
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-white title-font mb-2">
                  The Front-End Developer creates things that the user sees.
                </h2>
                <p className="leading-relaxed">
                  A Front-End Developer is someone who creates websites and web
                  applications. It is a popular job, and everyone can become a
                  Front-End Developer.The main responsibility of a Front-End
                  Developer is the User interface. Simply put, create things
                  that the user sees.HTML, CSS, and JavaScript are the basic
                  languages you need to know to create a website.
                </p>
              </div>
            </div>
            <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">
                  Who is Backend Developer ?
                </span>
              </div>
              <div className="md:flex-grow">
                {
                  <h2 className="text-2xl font-medium text-white title-font mb-2">
                    Back-end development means working on server-side software,
                    which focuses on everything you can’t see on a website.
                  </h2>
                }
                <p className="leading-relaxed">
                  Back-end developers are the experts who build and maintain the
                  mechanisms that process data and perform actions on websites.
                  Unlike front-end developers, who control everything you can
                  see on a website, back-end developers are involved in data
                  storage, security, and other server-side functions that you
                  cannot see.
                </p>
              </div>
            </div>
            <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">
                  Who is Full stack Web developer ?
                </span>
              </div>
              <div className="md:flex-grow md:ml-2">
                <h2 className="text-2xl font-medium text-white title-font mb-2">
                  A full stack web developer is a person who can develop both
                  client and server software.
                </h2>
                <p className="leading-relaxed">
                  Full-stack developers are experts in both the frontend and
                  backend; so, the full-stack of technology that makes up a
                  website.They are proficient in both frontend and backend
                  languages and frameworks, as well as in server, network and
                  hosting environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
