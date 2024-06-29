import React, { useEffect, useRef } from "react";
import airbnb from "../assets/airbnb.svg";
import facebook from "../assets/facebook.svg";
import disney from "../assets/disney.svg";

import apple from "../assets/apple.svg";
import spark from "../assets/spark.svg";
import samsung from "../assets/samsung.svg";
import quora from "../assets/quora.svg";
import sass from "../assets/sass.svg";

const LogoCarousel = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    const ul = logosRef.current;
    ul.insertAdjacentHTML("afterend", ul.outerHTML);
    ul.nextSibling.setAttribute("aria-hidden", "true");
  }, []);

  return (
    <>
      <div className=" w-[92%] rounded-xl font-inter antialiased  flex flex-col justify-center btnprimary overflow-hidden mt-10 mx-auto">
        <main className="px-5 py-5 md:px-6 ">
          <div className="text-center">
            <p className="font-inter font-medium text-white text-xl mb-5">
              Trusted by world’s best brands
            </p>
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <ul
                ref={logosRef}
                className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
              >
                <li>
                  <img src={facebook} alt="Facebook" />
                </li>
                <li>
                  <img src={disney} alt="Disney" />
                </li>
                <li>
                  <img src={airbnb} alt="Airbnb" />
                </li>
                <li>
                  <img src={apple} alt="Apple" />
                </li>
                <li>
                  <img src={spark} alt="Spark" />
                </li>
                <li>
                  <img src={samsung} alt="Samsung" />
                </li>
                <li>
                  <img src={quora} alt="Quora" />
                </li>
                <li>
                  <img src={sass} alt="Sass" />
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default LogoCarousel;
