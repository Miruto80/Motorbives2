import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useForm } from '@formspree/react';
import '../assets/css/Preapproval.css';

export default function Preapproval() {
  const [step, setStep] = useState(1);
  const [state, handleSubmit] = useForm("mldgwnda");

  const initialData = {
    firstName: '',
    middleName: '',
    lastName: '',
    suffix: '',
    email: '',
    phone: '',
    dob: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    timeAtAddress: '',
    housing: '',
    employer: '',
    occupation: '',
    income: '',
    additionalIncome: '',
    carType: '',
    downPayment: '',
  };

  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [validatedFields, setValidatedFields] = useState(new Set()); // Para rastrear campos validados exitosamente

  /* ================= HANDLERS ================= */
  const validators = {
    email: value =>
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? 'Invalid email format'
        : '',

    phone: value =>
      value.length < 10 ? 'Phone must be at least 10 digits' : '',

    income: value =>
      value <= 0 ? 'Income must be greater than 0' : '',
  };

  const validateField = (name, value) => {
    if (!value.trim()) return 'This field is required';
    if (validators[name]) return validators[name](value);
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Campos que no permiten números
    const noNumbersFields = ['firstName', 'middleName', 'lastName', 'suffix', 'address', 'city', 'state', 'employer', 'occupation'];

    let updatedValue = value;
    if (noNumbersFields.includes(name)) {
      updatedValue = value.replace(/\d/g, ''); // Remover dígitos
    } else if (name === 'phone') {
      updatedValue = value.replace(/\D/g, ''); // Solo números
    }

    setFormData(prev => ({ ...prev, [name]: updatedValue }));

    // Validar en tiempo real para campos requeridos
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'dob', 'address', 'city', 'state', 'zip', 'employer', 'occupation', 'income'];
    if (requiredFields.includes(name)) {
      const error = validateField(name, updatedValue);
      setErrors(prev => ({
        ...prev,
        [name]: error,
      }));

      if (!error) {
        setValidatedFields(prev => new Set(prev).add(name));
      } else {
        setValidatedFields(prev => {
          const newSet = new Set(prev);
          newSet.delete(name);
          return newSet;
        });
      }
    }
  };

  const validateStep = () => {
    const stepFields = {
      1: ['firstName', 'lastName', 'email', 'phone', 'dob'],
      2: ['address', 'city', 'state', 'zip'],
      3: ['employer', 'occupation', 'income'],
    };

    const currentFields = stepFields[step] || [];
    let newErrors = {};
    let hasError = false;

    currentFields.forEach(field => {
      if (!formData[field]?.toString().trim()) {
        newErrors[field] = 'This field is required';
        hasError = true;
      }
    });

    setErrors(newErrors);

    if (hasError) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing information',
        text: 'Please complete all required fields before continuing.',
      });
      return false;
    }

    return true;
  };

  const nextStep = () => {
    if (validateStep()) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const submitForm = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    await handleSubmit({
      target: {
        elements: Object.entries(formData).map(([name, value]) => ({
          name,
          value,
        })),
      },
    });

    Swal.fire({
      icon: 'success',
      title: 'Application Submitted',
      text: 'A Motor Vibes specialist will contact you shortly.',
    });

    setFormData(initialData);
    setStep(1);
    setErrors({});
    setValidatedFields(new Set()); // Resetear también los campos validados
  };

  const progress = (step / 4) * 100;

  /* ================= UI ================= */

  return (
    <div className="form-wrapper">
      <h2 className="text-center mb-4">Get Pre-Approved</h2>

      {/* Progress bar */}
      <div className="progress mb-4">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Steps */}
      <div className="preapproval-steps mb-4">
        <div className={step >= 1 ? 'step active' : 'step'}>📝 Personal</div>
        <div className={step >= 2 ? 'step active' : 'step'}>🏠 Residence</div>
        <div className={step >= 3 ? 'step active' : 'step'}>💼 Employment</div>
        <div className={step >= 4 ? 'step active' : 'step'}>🚗 Vehicle</div>
      </div>

      <form onSubmit={submitForm}>
        {/* STEP 1 */}
        {step === 1 && (
          <div className="form-section">
            <h4>Step 1: Personal Information</h4>

            <div className="row">
              <div className="col-md-3 mb-3">
                <label>First Name *</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`form-control ${errors.firstName ? 'is-invalid' : validatedFields.has('firstName') ? 'is-valid' : ''}`}
                />
                {errors.firstName && <span className="text-danger">{errors.firstName}</span>}
              </div>

              <div className="col-md-3 mb-3">
                <label>Middle Name</label>
                <input
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="col-md-3 mb-3">
                <label>Last Name *</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`form-control ${errors.lastName ? 'is-invalid' : validatedFields.has('lastName') ? 'is-valid' : ''}`}
                />
                {errors.lastName && <span className="text-danger">{errors.lastName}</span>}
              </div>

              <div className="col-md-3 mb-3">
                <label>Suffix</label>
                <input
                  name="suffix"
                  value={formData.suffix}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 mb-3">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-control ${errors.email ? 'is-invalid' : validatedFields.has('email') ? 'is-valid' : ''}`}
                />
                {errors.email && <span className="text-danger">{errors.email}</span>}
              </div>

              <div className="col-md-4 mb-3">
                <label>Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`form-control ${errors.phone ? 'is-invalid' : validatedFields.has('phone') ? 'is-valid' : ''}`}
                />
                {errors.phone && <span className="text-danger">{errors.phone}</span>}
              </div>

              <div className="col-md-4 mb-3">
                <label>Date of Birth *</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className={`form-control ${errors.dob ? 'is-invalid' : validatedFields.has('dob') ? 'is-valid' : ''}`}
                />
                {errors.dob && <span className="text-danger">{errors.dob}</span>}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="form-section">
            <h4>Step 2: Current Residence</h4>

            <div className="mb-3">
              <label>Street Address *</label>
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`form-control ${errors.address ? 'is-invalid' : validatedFields.has('address') ? 'is-valid' : ''}`}
              />
              {errors.address && <span className="text-danger">{errors.address}</span>}
            </div>

            <div className="row">
              <div className="col-md-4 mb-3">
                <label>City *</label>
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`form-control ${errors.city ? 'is-invalid' : validatedFields.has('city') ? 'is-valid' : ''}`}
                />
                {errors.city && <span className="text-danger">{errors.city}</span>}
              </div>

              <div className="col-md-4 mb-3">
                <label>State *</label>
                <input
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={`form-control ${errors.state ? 'is-invalid' : validatedFields.has('state') ? 'is-valid' : ''}`}
                />
                {errors.state && <span className="text-danger">{errors.state}</span>}
              </div>

              <div className="col-md-4 mb-3">
                <label>Zip Code *</label>
                <input
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  className={`form-control ${errors.zip ? 'is-invalid' : validatedFields.has('zip') ? 'is-valid' : ''}`}
                />
                {errors.zip && <span className="text-danger">{errors.zip}</span>}
              </div>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="form-section">
            <h4>Step 3: Employment & Income</h4>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Employer *</label>
                <input
                  name="employer"
                  value={formData.employer}
                  onChange={handleChange}
                  className={`form-control ${errors.employer ? 'is-invalid' : validatedFields.has('employer') ? 'is-valid' : ''}`}
                />
                {errors.employer && <span className="text-danger">{errors.employer}</span>}
              </div>

              <div className="col-md-6 mb-3">
                <label>Occupation *</label>
                <input
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className={`form-control ${errors.occupation ? 'is-invalid' : validatedFields.has('occupation') ? 'is-valid' : ''}`}
                />
                {errors.occupation && <span className="text-danger">{errors.occupation}</span>}
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Monthly Income *</label>
                <input
                  type="number"
                  name="income"
                  value={formData.income}
                  onChange={handleChange}
                  className={`form-control ${errors.income ? 'is-invalid' : validatedFields.has('income') ? 'is-valid' : ''}`}
                />
                {errors.income && <span className="text-danger">{errors.income}</span>}
              </div>

              <div className="col-md-6 mb-3">
                <label>Additional Income</label>
                <input
                  type="number"
                  name="additionalIncome"
                  value={formData.additionalIncome}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="form-section">
            <h4>Step 4: Vehicle Interest</h4>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Vehicle of Interest</label>
                <input
                  name="carType"
                  value={formData.carType}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Estimated Down Payment</label>
                <input
                  type="number"
                  name="downPayment"
                  value={formData.downPayment}
                  onChange={handleChange}
                  className="form-control"
                />
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