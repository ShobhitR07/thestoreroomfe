import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
//import aboutImage from "./path/to/your/image.jpg"; // Add your image path here


const AboutPage = () => {
  return (
    
    <div className=" p-8 bg-pageColor   min-h-screen  ">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="mb-4 text-lg">
        Welcome to Store Room, the secure and efficient data-sharing application designed to simplify the way you store and transfer information across devices. With Store Room, you can create a dedicated space, or "room," where you can store your data securely. Each room is private, ensuring that only you (or your collaborators) have access to the information within it. Access your stored data anytime and from any device by simply logging in to your account, and enjoy the peace of mind that comes from our automatic data deletion feature, which ensures all rooms and their contents are deleted after 24 hours. Signing up for Store Room is quick and easy—just provide your username, email, and password, and you’re ready to go! Plus, our collaborative feature allows multiple users to create a common room where everyone can share data, making teamwork efficient without the risk of long-term data retention. Whether you need to quickly transfer data, store sensitive information temporarily, or collaborate on projects, Store Room makes data sharing secure, straightforward, and convenient.


        </p>

        <ul className="list-disc list-inside mb-4 text-sm px-6 py-2">
          {/* <li className="mb-2">
            Add an extra layer of security with two-factor authentication.
          </li> */}
          {/* <li className="mb-2">
            Your notes are encrypted from the moment you create them
          </li> */}
          {/* <li className="mb-2">
            Access your notes from anywhere with the assurance that they are
            stored .
          </li> */}
          {/* <li className="mb-2">
            Our app is designed to be intuitive and easy to use.
          </li> */}
        </ul>
        <div className="flex space-x-4 mt-10">
          <p className="mb-4 text-lg px-6 py-2">Thank you for choosing Store Room!</p>
          {/* <Link className="text-white rounded-full p-2 bg-customRed  " to="/">
            <FaFacebookF size={24} />
          </Link>
          <Link className="text-white rounded-full p-2 bg-customRed  " to="/">
            <FaTwitter size={24} />
          </Link>
          <Link className="text-white rounded-full p-2 bg-customRed  " to="/">
            <FaLinkedinIn size={24} />
          </Link>
          <Link className="text-white rounded-full p-2 bg-customRed  " to="/">
            <FaInstagram size={24} />
          </Link> */}
        </div>
      </div>
    </div>
    
  );
};

export default AboutPage;
