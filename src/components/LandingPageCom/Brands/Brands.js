import React from "react";
import { IoIosPartlySunny, IoIosTabletPortrait } from "react-icons/io";
import { AiOutlineClockCircle, AiOutlineGlobal } from "react-icons/ai";
import { MdOutlineSecurity } from "react-icons/md";
import { SiPythonanywhere } from "react-icons/si";
import { TbPackageExport } from "react-icons/tb";
import { FcAssistant } from "react-icons/fc";
import BrandItem from "./BrandItem";
import { FaUserFriends } from "react-icons/fa";

const Brands = () => {
  return (
    <div className="grid lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-10 pt-20 md:px-0 px-5">
      {/* <BrandItem
        title="World Class Partners"
        text="Connect with LinkedIn, Google, and 70+ other apps and tools to get more
        done. Make your work easier by linking your favorite platforms. Stay on
        top of tasks, calendars, and messages in one spot. Save time and focus
        better with our easy connections."
        icon={IoIosPartlySunny}
      />{" "}
      <BrandItem
        title="Fast Global Supports"
        text="Connect with LinkedIn, Google, and 70+ other apps and tools to get more
        done. Make your work easier by linking your favorite platforms. Stay on
        top of tasks, calendars, and messages in one spot. Save time and focus
        better with our easy connections."
        icon={AiOutlineGlobal}
      />{" "}
      <BrandItem
        title="Trusting Security"
        text="Connect with LinkedIn, Google, and 70+ other apps and tools to get more
        done. Make your work easier by linking your favorite platforms. Stay on
        top of tasks, calendars, and messages in one spot. Save time and focus
        better with our easy connections."
        icon={MdOutlineSecurity}
      />{" "}
      <BrandItem
        title="Anywhere reculting"
        text="Connect with LinkedIn, Google, and 70+ other apps and tools to get more
        done. Make your work easier by linking your favorite platforms. Stay on
        top of tasks, calendars, and messages in one spot. Save time and focus
        better with our easy connections."
        icon={SiPythonanywhere}
      />{" "}
      <BrandItem
        title="Export Advice"
        text="Connect with LinkedIn, Google, and 70+ other apps and tools to get more
        done. Make your work easier by linking your favorite platforms. Stay on
        top of tasks, calendars, and messages in one spot. Save time and focus
        better with our easy connections."
        icon={TbPackageExport}
      />{" "}
      <BrandItem
        title="Assisted Onboarding"
        text="Connect with LinkedIn, Google, and 70+ other apps and tools to get more
        done. Make your work easier by linking your favorite platforms. Stay on
        top of tasks, calendars, and messages in one spot. Save time and focus
        better with our easy connections."
        icon={FcAssistant}
      /> */}
        <BrandItem
    title="Seamless Integration"
    text="Connect effortlessly with popular platforms like Google Drive, Dropbox, and more, simplifying your data sharing process while enhancing productivity."
    icon={IoIosPartlySunny}
  />
  <BrandItem
    title="24/7 Global Support"
    text="Our dedicated support team is here for you around the clock, ensuring assistance whenever you need help with our services."
    icon={AiOutlineGlobal}
  />
  <BrandItem
    title="Top-notch Security"
    text="With advanced encryption and strict security protocols, we protect your data and ensure that it remains private and secure."
    icon={MdOutlineSecurity}
  />
  <BrandItem
    title="User-Friendly Interface"
    text="Enjoy an intuitive design that makes it easy to navigate and use our app, regardless of your technical expertise."
    icon={FaUserFriends}
  />
  <BrandItem
    title="Cross-Device Accessibility"
    text="Access your shared data seamlessly from any device, ensuring you can retrieve your information whenever and wherever you need it."
    icon={IoIosTabletPortrait}
  />
  <BrandItem
    title="Automatic Data Deletion"
    text="To enhance your privacy, all user data is automatically deleted after 24 hours, ensuring your information remains confidential."
    icon={AiOutlineClockCircle}
  />
    </div>
  );
};

export default Brands;
