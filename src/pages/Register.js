import React from "react";
import "../styles/registration.css"
import "../styles/common.css"

const Register = () => {
  return (
    <section className="bg-white text-black py-20 px-8">
      <h1 className="text-5xl font-bold text-red-600 text-center">Register Now</h1>
      <form className="mt-10 max-w-lg mx-auto">
        <input 
          type="text" 
          placeholder="Full Name" 
          className="w-full p-4 mb-4 rounded border border-black" 
        />
        <input 
          type="email" 
          placeholder="Email Address" 
          className="w-full p-4 mb-4 rounded border border-black" 
        />
        <input 
          type="text" 
          placeholder="Phone Number" 
          className="w-full p-4 mb-4 rounded border border-black" 
        />
        <button 
          type="submit" 
          className="w-full bg-red-600 text-white py-3 rounded">
          Register
        </button>
      </form>
    </section>
  );
};

export default Register;
