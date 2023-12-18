import React from "react";
import ButtonComponent from "../components/ButtonComponent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <div className="min-h-[100vh] flex flex-col h-main-height justify-center items-center px-7">
        <div className="flex flex-col gap-[5.88rem] justify-center items-center text-center">
          <p className="text-[2rem] font-bold leading-[2.62rem]">
            Sorry, the page you were looking for was ${error.statusText}
          </p>
          <Link to="/" className="w-full">
            <ButtonComponent text="Return to home" bgColor="bg-black" />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Error;
