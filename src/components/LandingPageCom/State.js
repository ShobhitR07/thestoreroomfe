import React from "react";
import CardSlider from "./CardSlider";

const State = () => {
  return (
    <div className="py-28">
      <div className="flex justify-between items-center md:px-0 px-4">
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <span className="sm:text-4xl text-logoText text-parameter font-bold">
            7x
           
          </span>
          <span className="text-slate-900 text-center sm:text-sm text-xs ">
            High Conversion Rate
            
          </span>
        </div>{" "}
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <span className="sm:text-4xl text-logoText text-parameter  font-bold">
            42x
          </span>
          <span className="text-slate-900 text-center  sm:text-sm text-xs">
            Faster Impression
          </span>
        </div>{" "}
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <span className="sm:text-4xl text-logoText text-parameter font-bold">
            300%
          </span>
          <span className="text-slate-900 text-center  sm:text-sm text-xs">
            {/* Higher lead Quality */}
            Faster Data Transfer
          </span>
        </div>
      </div>
      <div className="mt-10 md:px-0 px-4">
        <h3 className="text-slate-950 text-2xl font-semibold pb-5 pt-6">
          Metrics For Store Room
        </h3>

        <div className="flex md:flex-row flex-col md:gap-0 gap-16 justify-between">
          <ul className="list-disc sm:px-5 ps-10 text-slate-900 flex flex-col gap-5 flex-1 overflow-hidden">
            <li>
              {/* Trusted by thousands of users worldwide. */}
              5x Higher Data Security: We implement advanced encryption and security measures to protect your information.
              </li>
            <li>
              {/* Experience reliable access to your notes anytime, anywhere. */}
              Enjoy seamless access to your shared data across devices at your convenience.
              </li>
            {/* <li>
              Quickly access your notes with our optimized search feature.
              
               2x Faster Data Transfer: Share your data with double the speed compared to traditional methods.
            </li> */}
            <li>
              Quickly access your notes with our optimized search feature.
            </li>
            {/* <li>10,000+ trusted users</li> */}
            <li>99.9% uptime</li>
            <li>2x faster note retrieval</li>
          </ul>
          <div className="flex-1 overflow-hidden">
            <CardSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default State;
