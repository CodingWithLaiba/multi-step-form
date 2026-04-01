import React from "react";
 function Step3({formData,backStep,submitted}){
    return(
        <>
        <p>{formData.name}</p>
        <p>{formData.email}</p>
        <p>{formData.phone}</p>
        <p>{formData.address}</p>
        <p>{formData.product}</p>
        <button onClick={backStep}>back</button>
        <button type="button" onClick={submitted}>Submit</button>
        </>
    )
 }
 export default Step3;