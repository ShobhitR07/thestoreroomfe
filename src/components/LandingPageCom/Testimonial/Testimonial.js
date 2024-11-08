import React from "react";
import TestimonialItem from "./TestimonialItem";

const Testimonial = () => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-x-4 gap-y-10 md:px-0 px-5 ">
      <TestimonialItem
      
        title="What is Store Room?"
        text=" Store Room is a secure data-sharing application that allows users to effortlessly copy and transfer data between devices. It ensures that your information is stored safely and can be accessed whenever you need it."
        name="Shobhit"
        status="Founder"
      />
       <TestimonialItem
        title="How does the room feature work??"
        text="Users can create a dedicated room to store their data. Once created, the user can log in from another device to access this data. If multiple users want to collaborate, they can create a common room for everyone to share their information."
        name="Shobhit"
        status="Founder"
      />
      <TestimonialItem
        title="What happens to my data after 24 hours?"
        text=" To prioritize user privacy, all rooms and their stored data are automatically deleted after 24 hours. This ensures that your information is not retained longer than necessary."
        name="Shobhit"
        status="Founder"
      />
       <TestimonialItem
        title="How do I sign up for Store Room?"
        text=" Signing up is quick and easy! Simply enter your username, email, and password. Make sure to use a valid email address, as it will be needed to reset your password if forgotten."
        name="Shobhit"
        status="Founder"
      />
       <TestimonialItem
        title="What if I forget my password?"
        text=" If you forget your password, you can easily reset it using your registered email. A password reset link will be sent to your email, allowing you to create a new password."
        name="Shobhit"
        status="Founder"
      />
       <TestimonialItem
        title="Can I collaborate with others in a room?"
        text=" Yes! Store Room allows multiple users to collaborate by creating a common room. All users can paste their data into this shared space and access it as needed, but remember that the room will be deleted after 24 hours.."
        name="Shobhit"
        status="Founder"
      />
    </div>
  );
};

export default Testimonial;
