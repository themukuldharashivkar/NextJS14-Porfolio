"use client";

import SocialButton from "./SocialButton";
import { AiFillInstagram } from "react-icons/ai";
import { PiDribbbleLogoFill } from "react-icons/pi";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4 lg:flex-col-reverse">
      <div
        id="hero-img"
        className="h-[24rem] md:h-[30rem] rounded-3xl p-8 bg-[url('/avatar.jpg')] bg-cover bg-center lg:order-2"
      />
      <div
        id="about"
        className="bg-zinc-200 h-[36rem] lg:h-[30rem] rounded-3xl p-10 flex flex-col gap-12 md:gap-16 bg-[url('/gradient-bg.jpg')] bg-cover lg:order-1"
      >
        <h1 className="text-4xl font-semibold">
          Hello, I am a Frontend Web Developer with 2 years of experience.
        </h1>
        <p className="flex-1">
          I care a lot about using design for positive impact and enjoy creating
          user-centric, delightful, and human experiences.
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-2 md:gap-4 justify-self-end">
          <button className="bg-black text-white font-medium py-3 px-12 rounded-full w-60 lg:w-auto">
            Contact me
          </button>
          <div className="flex items-center gap-4">
            <SocialButton bgColor="dribbble">
              <PiDribbbleLogoFill className="w-5 h-5" />
            </SocialButton>
            <SocialButton bgColor="instagram">
              <AiFillInstagram className="w-5 h-5" />
            </SocialButton>
            <SocialButton bgColor="twitter">
              <FaTwitter className="w-5 h-5" />
            </SocialButton>
            <SocialButton bgColor="linkedin">
              <FaLinkedin className="w-5 h-5" />
            </SocialButton>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
