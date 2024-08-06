import React from 'react';

const ContactAddress = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="basis-[70%] md:basis-[70%] flex-grow bg-blue-200 p-4">
        {/* Main content goes here */}
        <h2 className="text-xl font-bold">Contact Us</h2>
        <p>Please fill out the form below to get in touch with us.</p>
        {/* Add your contact form or additional content here */}
      </div>
      <div className="basis-[30%] md:basis-[30%] flex-grow bg-red-200 p-4">
        {/* Sidebar content goes here */}
        <h3 className="text-lg font-semibold">Our Address</h3>
        <p>1234 Example Street, City, Country</p>
        <h3 className="text-lg font-semibold">Contact Information</h3>
        <p>Email: contact@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </div>
  );
};

export default ContactAddress;