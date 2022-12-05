import React from "react";
import styles from "../../styles/Home.module.css";
const Course = () => {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">
              Ayum Learning
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
              What we will Learn in this course
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3 ">
              <div
                style={{
                  fontWeight: "500",
                  boxShadow: "0 3px 15px rgba(234, 158, 1, 0.8)",
                }}
                className="flex rounded-lg h-full bg-orange-400  text-black p-8 flex-col"
              >
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className=" text-lg title-font font-medium">Frontend</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    We will learn frontend technologies like HTML , CSS , SCSS ,
                    Javascript , BOOTSTRAP , REACT JS , TAILWIND CSS and many
                    more professional toolkits .
                  </p>
                  {/* <a className="mt-3 text-indigo-400 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a> */}
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div
                style={{
                  boxShadow: "0 3px 15px rgba(0, 255, 252, 0.8)",
                  fontWeight: "500",
                }}
                className="flex rounded-lg h-full bg-cyan-400 text-black p-8 flex-col"
              >
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 className=" text-lg title-font font-medium">Backend</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Talking about Backend Technologies we will learn Nodejs ,
                    Expressjs , Mongodb , Npm and yarn packages , Github ,
                    Version control and many more ..
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div
                style={{
                  fontWeight: "500",
                  boxShadow: "0 3px 15px rgba(0, 255, 145, 0.8)",
                }}
                className="flex rounded-lg h-full bg-green-400 text-black p-8 flex-col"
              >
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h2 className=" text-lg title-font font-medium">
                    Deployment
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    In Deployment phase we will learn to deploy our sites and
                    web apps in Vercel , Netlify , Github and other deployment
                    servers . we will get to know how to manage version control
                    of websites and learn some other professional stuff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col ">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://kyanon.digital/wp-content/uploads/2021/10/citizen-developer-la-gi-loi-ich-cua-citizen-development.jpg"
          />
          {
            <div
              style={{
                borderRadius: "12px",
                backgroundColor: "rgba(14, 26, 47)",
                border: "1px solid aqua",
                width: "95%",
              }}
              className="text-center lg:w-2/3 w-full  p-4"
            >
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                All About this Course
              </h1>
              <p className="leading-relaxed text-white mb-8">
                This course duration is of 3 months and this will work as your
                classes tution . Like fees will charge on monthly basis which is{" "}
                <br />
                <span className="text-yellow-300 font-bold">RS 500/month</span>.
                So you are not bound to pay all at once. classes will be held on
                Google meet , students require a Laptop but if you do not have
                you can also connect with friends laptops . timings will be
                decided on your guys demand we will make a poll on instagram and
                according to result timing will be decided. if you have any
                doubt you can directly connect with instructor anytime 24/7.
              </p>
              <div className="flex justify-center">
                <button
                  className={`inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ${styles.registerbtn}`}
                >
                  <a
                    rel="noreferrer"
                    target={"_blank"}
                    href="https://forms.gle/LQ4VEv8xs2pK24Eg9"
                  >
                    Register Here!
                  </a>
                </button>
              </div>
            </div>
          }
        </div>
      </section>
    </>
  );
};

export default Course;
