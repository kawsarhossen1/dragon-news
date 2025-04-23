import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold my-2">Find Us On</h2>
      <div className="flex join-vertical *:bg-base-100 ">
        <button className="btn join-item justify-start">
          <FaFacebook className="text-blue-400 text-2xl"></FaFacebook> Facebook
        </button>
        <button className="btn join-item justify-start">
          <FaTwitter className="text-blue-400 text-2xl"></FaTwitter> Twitter
        </button>
        <button className="btn join-item justify-start ">
          <FaInstagram className="text-red-500 text-2xl"></FaInstagram> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
