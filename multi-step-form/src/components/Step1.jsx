import React from "react";

function Step1({ formData, handleChange, nextStep, error }) {
  return (
    <>
      <form
        action=""
        className="flex flex-col gap-2.5 justify-center items-start mt-4"
      >
        <input
          type="text"
          name="name"
          className="w-full p-2 rounded-md border border-gray-400 "
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Your name"
        />
        {error.name && (
          <p className="text-red-500 text-center mt-1">{error.name}</p>
        )}
        <input
          type="email"
          name="email"
          className="w-full p-2 rounded-md border border-gray-400"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@gmail.com"
        />
        {error.email && (
          <p className="text-red-500 text-center mt-1">{error.email}</p>
        )}
        <input
          type="text"
          name="phone"
          className="w-full p-2 rounded-md border border-gray-400"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter Your Phone Number"
        />
        {error.phone && (
          <p className="text-red-500 text-center mt-1">{error.phone}</p>
        )}
        <input
          type="text"
          name="address"
          className="w-full p-2 rounded-md border border-gray-400 "
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter Your Address"
        />
        {error.address && (
          <p className="text-red-500 text-center mt-1">{error.address}</p>
        )}
        <button
          type="button"
          onClick={nextStep}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold cursor-pointer py-2 px-4 rounded"
        >
          Next
        </button>
      </form>
    </>
  );
}
export default Step1;
