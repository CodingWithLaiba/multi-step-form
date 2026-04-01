import React from "react";
import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

function MultiStepForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        address:"",
        product: "",
    });
    const [submit, setSubmit] = useState(false);

    function handleChange(e){
setFormData({...formData,[e.target.name]:e.target.value})
    };
    function nextStep() {
      setStep(step + 1);  
    };
    function backStep(){
        setStep(step - 1);
    }
    function submitted(){
        console.log("Form Submitted:", formData );
        setSubmit(true);
    }
    if(submit===true){
        "Form Submit successfully"
    }
    return(
        <>
        <div className="container">
            <h1>Multi Step Form</h1>
        </div>
        <div>
            {step ===1 && <Step1 formData={formData} handleChange={handleChange} nextStep={nextStep}/>}
             {step ===2 && <Step2 formData={formData} handleChange={handleChange} nextStep={nextStep} backStep={backStep}/>}
              {step ===3 && <Step3 formData={formData} backStep={backStep} submitted={submitted}/>}
        </div>
        </>
    )
}
export default MultiStepForm;