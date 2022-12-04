import React from "react";
import styles from "../../styles/Home.module.css";

const Land = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white ">
            This Winter Learn Something Meaningful
            <br className="hidden lg:inline-block" />
            <span className="text-yellow-400">Register Now!</span>
          </h1>
          <p className="mb-8 leading-relaxed">
            Ayum Learning is Offering you complete Full stack web developer
            course which will include learning of all the technologies get used
            in developing an full stack web app from frontend to backend . as
            this course will lead by experienced developers who also are
            students so they know what we all feel while learning something new
            so Get your seat belts tight and Explore you potential in full stack
            web development .
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <button
              className={` ${styles.registerbtn} inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg`}
            >
              <a
                rel="noreferrer"
                target={"_blank"}
                href="https://forms.gle/LQ4VEv8xs2pK24Eg9"
              >
                Register Here!
              </a>
            </button>{" "}
            <div className="text-white"> Or Contact - 6261178107</div>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/full_stack_banner.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Land;
