import React from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";

const Home = () => {
  return (
    <>
      <div className="min-h-[calc(100vh-148px)] bg-hero-section bg-cover bg-center flex items-center justify-center">
        <div className="flex flex-col gap-12 px-7">
          <div className="flex flex-col gap-6 ">
            <h2 className="text-4xl text-white font-semibold">
              You got the travel plans, we got the travel vans.
            </h2>
            <p className="text-base font-normal text-white">
              Add adventure to your life by joining the #vanlife movement. Rent
              the perfect van to make your perfect road trip.
            </p>
          </div>
          <Link to="/login">
            <ButtonComponent text="Find your van" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
