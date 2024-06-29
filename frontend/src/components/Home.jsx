import React from "react";
import banner from "../assets/vul/banners.png";
import Banner from "./Banner";

const Home = () => {
    return (
      <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id="home">
        <Banner
          banner={banner}
          heading="Develop your skills with vulture"
          subheading="Somos una empresa familiar dedicada al rubro de transporte de carga pesa, carga concentrada y minerales" btn1={'Get started'} btn2={'Discount'}
        />
      </div>
    );
};

export default Home;
