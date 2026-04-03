import React from "react";
function Step2({ formData, handleChange, nextStep, backStep, error }) {
  return (
    <>
      <form
        action=""
        className="flex flex-col gap-4 justify-center  mt-4 w-full"
      >
        {error.product && (
          <p className="text-red-500 text-center mt-4">{error.product}</p>
        )}

        <select
          name="product"
          id="product"
          value={formData.product}
          onChange={handleChange}
          className="w-full"
        >
          <option value="">--Chosse the Product--</option>
          <option value="Simple Ticket">Simple Ticket</option>
          <option value="Premium Ticket">Premium Ticket</option>
          <option value="VIP Ticket">VIP Ticket</option>
        </select>

        <div className="inline-flex ">
          <button
            type="button"
            onClick={backStep}
            className="cursor-pointer bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          >
            Back
          </button>
          <button
            type="button"
            onClick={nextStep}
            className="cursor-pointer bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
}
export default Step2;
