import React from "react";
function Step2({ formData, handleChange, nextStep, backStep }) {
  return (
    <>
      <form action="">
        <select
          name="product"
          id="product"
          value={formData.product}
          onChange={handleChange}
        >
          <option value="">--Chosse the Product--</option>
          <option value="Simple Ticket">Simple Ticket</option>
          <option value="Premium Ticket">Premium Ticket</option>
          <option value="VIP Ticket">VIP Ticket</option>
        </select><br/>
        <button type="button" onClick={backStep}>
          Back
        </button>
        <button type="button" onClick={nextStep}>
          Next
        </button>
      </form>
    </>
  );
}
export default Step2;