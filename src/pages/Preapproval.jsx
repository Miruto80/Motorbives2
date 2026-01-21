import React, { useState, useRef } from 'react';
import Swal from 'sweetalert2';
import { useForm } from '@formspree/react';
import '../assets/css/FormWrapper.css'

export default function Preapproval() {
  const [step, setStep] = useState(1);
  const [state, handleSubmit] = useForm("xgvyrkoo");
  const formRef = useRef(null);

  const nextStep = () => {
    if (validateStep()) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const validateStep = () => {
    const fields = formRef.current.querySelectorAll(
      `[data-step="${step}"] input[required]`
    );

    for (let field of fields) {
      if (!field.value.trim()) {
        Swal.fire({
          icon: 'warning',
          title: 'Missing information',
          text: 'Please complete all required fields before continuing.',
        });
        field.focus();
        return false;
      }
    }
    return true;
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    await handleSubmit(e);

    if (state.succeeded) {
      Swal.fire({
        icon: 'success',
        title: 'Application Submitted',
        text: 'A specialist will contact you shortly.',
      });
      formRef.current.reset();
      setStep(1);
    }
  };

  const progress = (step / 4) * 100;

  return (
    <div className="form-wrapper">
      <h2 className="text-center mb-4">Get Pre-Approved</h2>

      {/* Progress bar */}
      <div className="progress mb-4">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <form ref={formRef} onSubmit={submitForm}>
        {/* STEP 1 */}
        {step === 1 && (
          <div className="form-section" data-step="1">
            <h4>Step 1: Personal Information</h4>

            <div className="row">
              <div className="col-md-3 mb-3">
                <label>First Name *</label>
                <input name="firstName" className="form-control" required />
              </div>
              <div className="col-md-3 mb-3">
                <label>Middle Name</label>
                <input name="middleName" className="form-control" />
              </div>
              <div className="col-md-3 mb-3">
                <label>Last Name *</label>
                <input name="lastName" className="form-control" required />
              </div>
              <div className="col-md-3 mb-3">
                <label>Suffix</label>
                <input name="suffix" className="form-control" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 mb-3">
                <label>Email *</label>
                <input type="email" name="email" className="form-control" required />
              </div>
              <div className="col-md-4 mb-3">
                <label>Phone *</label>
                <input type="tel" name="phone" className="form-control" required />
              </div>
              <div className="col-md-4 mb-3">
                <label>Date of Birth *</label>
                <input name="dob" className="form-control" placeholder="MM/DD/YYYY" required />
              </div>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="form-section" data-step="2">
            <h4>Step 2: Current Residence</h4>

            <div className="mb-3">
              <label>Street Address *</label>
              <input name="address" className="form-control" required />
            </div>

            <div className="row">
              <div className="col-md-4 mb-3">
                <label>City *</label>
                <input name="city" className="form-control" required />
              </div>
              <div className="col-md-4 mb-3">
                <label>State *</label>
                <input name="state" className="form-control" required />
              </div>
              <div className="col-md-4 mb-3">
                <label>Zip Code *</label>
                <input name="zip" className="form-control" required />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label>How long have you lived here?</label>
                <input name="timeAtAddress" className="form-control" />
              </div>
              <div className="col-md-6 mb-3">
                <label>Rent or Own?</label>
                <input name="housing" className="form-control" />
              </div>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="form-section" data-step="3">
            <h4>Step 3: Employment & Income</h4>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Employer *</label>
                <input name="employer" className="form-control" required />
              </div>
              <div className="col-md-6 mb-3">
                <label>Occupation *</label>
                <input name="occupation" className="form-control" required />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Monthly Income *</label>
                <input type="number" name="income" className="form-control" required />
              </div>
              <div className="col-md-6 mb-3">
                <label>Additional Income</label>
                <input type="number" name="additionalIncome" className="form-control" />
              </div>
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="form-section" data-step="4">
            <h4>Step 4: Vehicle Interest</h4>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Vehicle of Interest</label>
                <input name="carType" className="form-control" />
              </div>
              <div className="col-md-6 mb-3">
                <label>Estimated Down Payment</label>
                <input type="number" name="downPayment" className="form-control" />
              </div>
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="d-flex justify-content-between mt-4">
          {step > 1 && (
            <button type="button" className="btn btn-outline-secondary" onClick={prevStep}>
              ← Back
            </button>
          )}

          {step < 4 ? (
            <button type="button" className="btn btn-primary ms-auto" onClick={nextStep}>
              Next →
            </button>
          ) : (
            <button type="submit" className="btn btn-success ms-auto">
              Submit Application
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
