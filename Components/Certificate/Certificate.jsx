import React from "react";
import styles from "../../styles/Home.module.css";
const Certificate = () => {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-xl mb-2 text-white">
                You Will be Provided With <br /> A Certificate After completion
                this Course .
              </h1>
              <div className="leading-relaxed">
                As you will complete the course you will get completion
                certificate and will get endorsed by our team in skills you have
                learned on Linkedin . you can also add this certificate to your
                resume or Cv .
              </div>
            </div>

            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <p className="leading-relaxed">Tap Image To View</p>
            </div>
          </div>
          <div
            className={` ${styles.certificate} lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0  `}
          >
            <img
              className="object-cover object-center w-full h-full"
              src="https://i.ibb.co/Sn1sSMq/Ayum-Learn-Certificate.jpg"
              alt="stats"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Certificate;
