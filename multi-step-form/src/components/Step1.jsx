import React from "react";

function Step1({ formData, handleChange, nextStep}){
    return(
    <>
    <form action="">
    <input type="text" name="name" className="" value={formData.name} onChange={handleChange} placeholder="Enter Your name"/><br/>
     <input type="email" name="email" className="" value={formData.email} onChange={handleChange} placeholder="your@gmail.com"/><br/>
    <input type="text" name="phone" className="" value={formData.phone} onChange={handleChange} placeholder="Enter Your Phone Number"/><br/>
    <input type="text" name="address" className="" value={formData.address} onChange={handleChange} placeholder="Enter Your Address"/><br/>
<button onClick={nextStep}>Next Step</button>
</form>
    </>
    )
}
export default Step1;