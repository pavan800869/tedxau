import React from "react";
import "../styles/common.css"

const Contact = () => {
  return (
    <section className="bg-black text-white py-20 px-8">
      <h1 className="text-5xl font-bold text-red-600 text-center">Contact Us</h1>
      <form className="mt-10 max-w-lg mx-auto">
        <input 
          type="text" 
          placeholder="Name" 
          className="w-full p-4 mb-4 rounded border border-red-600" 
        />
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full p-4 mb-4 rounded border border-red-600" 
        />
        <textarea 
          placeholder="Message" 
          className="w-full p-4 mb-4 rounded border border-red-600" 
          rows="4"
        ></textarea>
        <button 
          type="submit" 
          className="w-full bg-red-600 text-white py-3 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
