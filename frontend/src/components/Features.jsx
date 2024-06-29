import React from "react";
import featureimg from "../assets/vul/education.png";

const Features = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id="feature">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="lg:w-1/4">
          <h3 className="text-3xl text-primary font-bold lg:w-3/4 mb-3">
            Why we are better than others
          </h3>
          <p className="text-base text-teritary text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            non voluptates voluptatem sequi nisi fugit eligendi quam, error
            ducimus, earum accusamus corporis. Placeat voluptate numquam tenetur
            autem fuga corporis doloribus?
          </p>
        </div>
        <div className="w-full lg:w-3/4">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-start md:gap-12">
            <div className="bg-[rgba(255,255,255,0.04] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-8 cursor-pointer transition-all duration-300">
              <div>
                <img src={featureimg} alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Conventitent study schedulde
                </h5>
              </div>
            </div>

            <div className="mt-20 bg-[rgba(255,255,255,0.04] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-8 cursor-pointer transition-all duration-300">
              <div>
                <img src={featureimg} alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Conventitent study schedulde
                </h5>
              </div>
            </div>

            <div className="bg-[rgba(255,255,255,0.04] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-8 cursor-pointer transition-all duration-300">
              <div>
                <img src={featureimg} alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Conventitent study schedulde
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
