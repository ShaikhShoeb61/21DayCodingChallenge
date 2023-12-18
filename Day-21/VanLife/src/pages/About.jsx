import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-[calc(100vh-148px)]">
      <img src="./images/about-small-image.png" alt="about image" />
      <div className="flex flex-col justify-center items-center px-8 py-12 gap-14">
        <div className="flex flex-col justify-center items-center gap-8">
          <h1 className="text-black font-bold text-3xl">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p className="text-base font-medium">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch.(Hitch costs extra 😉)
          </p>
          <p className="text-base font-medium">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="flex flex-col justify-center items-start gap-6 px-9 py-8 rounded-md bg-primarylight">
          <h3 className="text-black text-2xl font-bold">
            Your destination is waiting. Your van is ready.
          </h3>
          <Link to="/vans">
            <button className="px-5 py-3 bg-black text-white rounded-md">
              Explore our vans
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
