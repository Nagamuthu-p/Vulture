import React from "react";
import aboutimg1 from "../assets/vul/part.png";
import aboutimg2 from '../assets/vul/part2.png'
import { motion } from "framer-motion";
import { fadeIn } from "../variants"; 

const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto">
      <div
        className="flex flex-col md:flex-row-reverse justify-between items-center gap-8"
        id="about"
      >
        <motion.div
          className="md:w-1/2"
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <img src={aboutimg1} alt="" />
        </motion.div>

        <motion.div
          className="md:w-2/5"
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            we have been improving our product{" "}
            <span className="text-secondary">for many years.</span>
          </h2>
          <p className=" text-teritary text-lg mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            dolorem et nisi fugit quia aspernatur hic, ut, iure nobis aliquam
            atque, dolore numquam quibusdam impedit necessitatibus unde
            architecto commodi mollitia.
          </p>
          <button className="btnprimary">Get Started</button>
        </motion.div>
      </div>

      <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div
          className="md:w-1/2"
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <img src={aboutimg2} alt="" />
        </motion.div>

        <motion.div
          className="md:w-1/2"
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            we have been improving our product{" "}
            <span className="text-secondary">for many years.</span>
          </h2>
          <p className=" text-teritary text-lg mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            dolorem et nisi fugit quia aspernatur hic, ut, iure nobis aliquam
            atque, dolore numquam quibusdam impedit necessitatibus unde
            architecto commodi mollitia.
          </p>
          <button className="btnprimary">Get Started</button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
