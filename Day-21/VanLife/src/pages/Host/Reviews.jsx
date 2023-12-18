import React from "react";

const Reviews = () => {
  return (
    <>
      <div className="px-7 flex flex-col items-center justify-center gap-[2.8rem]">
        <div className="w-full flex flex-col item-start gap-[2rem]">
          <div className="flex gap-3 items-center">
            <h1 className="text-[2rem] font-bold">Your reviews</h1>
            <h3 className="text-base font-medium">last 30 day</h3>
          </div>
          <div className="flex flex-col items-start gap-[1.56rem]">
            <div className="flex gap-[0.31rem] items-center ">
              <span className="text-[2rem] font-bold">5.0</span>
              <div className="flex gap-1">
                <img className="w-[1.66rem]" src="\icons\Star.png" alt="star" />
                <span className="text-base font-medium">overall rating</span>
              </div>
            </div>
            <img src="\icons\Percentage Graphes.png" alt="percentage" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-[2.3rem]">
          <span className="text-[1.12rem] font-bold">Reviews (2)</span>
          <div className="flex flex-col items-start gap-[0.43rem]">
            <div className="flex gap-1">
              <img className="w-[1.5rem]" src="\icons\Star.png" alt="star" />
              <img className="w-[1.5rem]" src="\icons\Star.png" alt="star" />
              <img className="w-[1.5rem]" src="\icons\Star.png" alt="star" />
              <img className="w-[1.5rem]" src="\icons\Star.png" alt="star" />
              <img className="w-[1.5rem]" src="\icons\Star.png" alt="star" />
            </div>
            <div className="flex items-start gap-[0.31rem]">
              <span className="text-base font-semibold">Elliot</span>
              <span className="text-base font-semibold text-lightgrey">
                December 1, 2022
              </span>
            </div>
            <p className="text-base font-medium">
              The beach bum is such as awesome van! Such as comfortable trip. We
              had it for 2 weeks and there was not a single issue. Super clean
              when we picked it up and the host is very comfortable and
              understanding. Highly recommend!
            </p>
          </div>
          <div className="flex flex-col items-start gap-[0.43rem]">
            <div className="flex gap-1">
              <img className="w-[1.5rem]" src="\icons\Star.png" alt="star" />
              <img className="w-[1.5rem]" src="\icons\Star.png" alt="star" />
              <img className="w-[1.5rem]" src="\icons\Star.png" alt="star" />
              <img className="w-[1.5rem]" src="\icons\Star.png" alt="star" />
              <img className="w-[1.5rem]" src="\icons\Star.png" alt="star" />
            </div>
            <div className="flex items-start gap-[0.31rem]">
              <span className="text-base font-semibold">Elliot</span>
              <span className="text-base font-semibold text-lightgrey">
                December 1, 2022
              </span>
            </div>
            <p className="text-base font-medium">
              The beach bum is such as awesome van! Such as comfortable trip. We
              had it for 2 weeks and there was not a single issue. Super clean
              when we picked it up and the host is very comfortable and
              understanding. Highly recommend!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
