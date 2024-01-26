"use client";

import SocialButton from "./SocialButton";
import { AiFillInstagram } from "react-icons/ai";
import { PiDribbbleLogoFill } from "react-icons/pi";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="bg-zinc-200 h-[25rem] rounded-3xl p-10 flex flex-col bg-[url('/gradient-bg.jpg')] bg-cover">
      <h1 className="text-4xl font-semibold">Want to work together?</h1>
      <p className="">
        Feel free to reach out for collaborations or just a friendly hello
      </p>
      <p className="flex-1">mukul.dharashivkar99@gmail.com</p>
      <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end pt-5">
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
  );
};
export default ContactSection;
