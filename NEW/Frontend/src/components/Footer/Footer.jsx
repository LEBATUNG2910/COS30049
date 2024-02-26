import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white  ">
      <div className=" mx-auto flex flex-col md:flex-row justify-between items-center px-4 z-0">
        <div className="mt-4  ">
          <div className="flex items-center justify-center text-2xl p-5 font-bold">
            Community
          </div>
          <a
            href="https://www.facebook.com/quyeen.ngoc.9"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 ml-5"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              className="text-3xl md:text-xl lg:text-4xl"
            />
          </a>
          <a
            href="https://www.instagram.com/_lebatuuuu2910_/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x "
              className="text-3xl md:text-xl lg:text-4xl"
            />
          </a>
          <a
            href="https://discord.gg/paYyqJCQ"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FontAwesomeIcon
              icon={faDiscord}
              size="2x"
              className="text-3xl md:text-xl lg:text-4xl"
            />
          </a>
        </div>
        {/* You can also add more social media icons similarly */}
        <div className="mb-4 md:mb-0 ">
          <h4 className="md:text-2xl md:mb-2 md:mr-10 font-bold">About Us</h4>
          <p className="md:text-xl">Ngoc Quyen</p>
          <p className="md:text-xl">Ba Tung</p>
          <p className="md:text-xl">Thuan Khang</p>
        </div>
        <div>
          <h4 className="md:text-2xl md:mb-2 font-bold">Product</h4>
          <p className="md:text-xl">Exchange Coin</p>
          <p className="md:text-xl">Buy Crypto</p>
          <p className="md:text-xl">Trade NFTs</p>
        </div>
      </div>
      {/* Copyright and Company Name */}
      <div className="md:mt-20 mt-10 text-center md:text-lg ">
        <p className="text-white">No Copyright &copy; 2024</p>
        <p className="text-white">BITWALLS GROUP</p>
      </div>
    </footer>
  );
};

export default Footer;
