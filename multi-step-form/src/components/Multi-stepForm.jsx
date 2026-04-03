import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

function MultiStepForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    product: "",
  });

  const [submit, setSubmit] = useState(false);

  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    product: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function nextStep() {
    let newErrors = {
      name: "",
      email: "",
      phone: "",
      address: "",
      product: "",
    };

    if (step === 1) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.phone) newErrors.phone = "Phone is required";
      if (!formData.address) newErrors.address = "Address is required";

      if (
        newErrors.name ||
        newErrors.email ||
        newErrors.phone ||
        newErrors.address
      ) {
        setError(newErrors);
        return;
      }
    }

    if (step === 2) {
      if (!formData.product) {
        newErrors.product = "Please select a product";
        setError(newErrors);
        return;
      }
    }

    setError(newErrors);
    if (step < 3) setStep(step + 1);
  }

  function backStep() {
    if (step > 1) setStep(step - 1);
  }

  function submitted() {
    console.log("Form Submitted:", formData);
    setSubmit(true);
  }

  if (submit) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-3xl font-bold text-green-600">
          Form Submitted Successfully
        </h2>

        <button
          onClick={() => {
            setSubmit(false);
            setStep(1);
            setFormData({
              name: "",
              email: "",
              phone: "",
              address: "",
              product: "",
            });
          }}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Fill Again
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="text-center mt-5">
        <h1 className="font-bold text-4xl">Multi Step Form</h1>
      </div>

      <div >
        {step === 1 && (
          <Step1
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            error={error}
          />
        )}

        {step === 2 && (
          <Step2
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            backStep={backStep}
            error={error}
          />
        )}

        {step === 3 && (
          <Step3
            formData={formData}
            backStep={backStep}
            submitted={submitted}
          />
        )}
      </div>
    </>
  );
}

export default MultiStepForm;
