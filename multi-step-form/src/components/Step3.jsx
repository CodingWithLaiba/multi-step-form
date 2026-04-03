import React from "react";
function Step3({ formData, backStep, submitted }) {
  return (
    <>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>
      <p>Address:{formData.address}</p>
      <p>Ticket Selected:{formData.product}</p>
      <div className="inline-flex justify-between">
        <button
          onClick={backStep}
          className="cursor-pointer bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          Back
        </button>
        <button
          type="button"
          onClick={submitted}
          className="cursor-pointer bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          Submit
        </button>
      </div>
    </>
  );
}
export default Step3;
