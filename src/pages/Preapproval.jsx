import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useForm } from '@formspree/react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import '../assets/css/Preapproval.css';
import SEO from '../components/SEO.jsx';
import { useLanguage } from '../context/useLanguage'; 

export default function Preapproval() {
  const { t } = useLanguage(); 
  const [step, setStep] = useState(1);
  const [state, handleSubmit] = useForm("mnjzadvz");
  const [submitting, setSubmitting] = useState(false);
  const initialData = {
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    socialOrItin: '',
    licenseNumber: '',
    licenseState: '',
    dob: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    timeAtAddress: '',
    housing: '',
    employmentType: '',
    CompanyName: '',
    occupation: '',
    income: '',
    additionalIncome: '',
    timeAtJob: '',
    carType: '',
    downPayment: '',
  };

  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [validatedFields, setValidatedFields] = useState(new Set());

  const [statesList, setStatesList] = useState([]);
  const [citiesList, setCitiesList] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [loadingStates, setLoadingStates] = useState(true);
  const [loadingCities, setLoadingCities] = useState(false);

  const API_KEY = 'fcd4726fc4858a2b59f737afc60ef270377d2be3cc24c87c653f6106b8529c68';
  const API_BASE_URL = 'https://api.countrystatecity.in/v1/countries/US';

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/states`, {
          headers: { 'X-CSCAPI-KEY': API_KEY },
        });
        setStatesList(response.data);
      } catch (error) {
        console.error('Error fetching states:', error);
        Swal.fire({
          icon: 'error',
          title: t('preapproval.alerts.error'),
          text: t('preapproval.alerts.apiError'),
        });
      } finally {
        setLoadingStates(false);
      }
    };
    fetchStates();
  }, [t]);

  useEffect(() => {
    if (selectedState) {
      const fetchCities = async () => {
        setLoadingCities(true);
        try {
          const response = await axios.get(`${API_BASE_URL}/states/${selectedState}/cities`, {
            headers: { 'X-CSCAPI-KEY': API_KEY },
          });
          setCitiesList(response.data);
        } catch (error) {
          console.error('Error fetching cities:', error);
          Swal.fire({
            icon: 'error',
            title: t('preapproval.alerts.error'),
            text: t('preapproval.alerts.apiErrorCities'),
          });
        } finally {
          setLoadingCities(false);
        }
      };
      fetchCities();
    } else {
      setCitiesList([]);
    }
  }, [selectedState, t]);

  const validators = {
    email: value =>
      value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? t('preapproval.errors.email')
        : '',
    phone: value =>
      value.length < 10 ? t('preapproval.errors.phone') : '',
    income: value =>
      value <= 0 ? t('preapproval.errors.income') : '',
    dob: value => {
      if (!value) return '';
      const today = new Date();
      const birthDate = new Date(value);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age < 18 ? t('preapproval.errors.dob') : '';
    },
  };

  const validateField = (name, value) => {
    if (!value.trim()) return t('preapproval.errors.required');
    if (validators[name]) return validators[name](value);
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const noNumbersFields = ['firstName', 'middleName', 'lastName', 'CompanyName', 'occupation', 'licenseState'];
    const noLettersFields = ['phone', 'zip', 'income', 'additionalIncome', 'downPayment', 'socialOrItin', 'licenseNumber'];

    let updatedValue = value;
    if (noNumbersFields.includes(name)) {
      updatedValue = value.replace(/\d/g, '');
    } else if (noLettersFields.includes(name)) {
      updatedValue = value.replace(/\D/g, '');
    }

    setFormData(prev => ({ ...prev, [name]: updatedValue }));

    if (name === 'state') {
      setSelectedState(value);
    }

    const requiredFields = ['firstName', 'lastName', 'phone', 'dob', 'socialOrItin', 'licenseNumber', 'licenseState', 'address', 'city', 'state', 'zip', 'timeAtAddress', 'employmentType', 'CompanyName', 'occupation', 'income', 'timeAtJob'];
    if (requiredFields.includes(name)) {
      const error = validateField(name, updatedValue);
      setErrors(prev => ({ ...prev, [name]: error }));

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
      1: ['firstName', 'lastName', 'socialOrItin', 'licenseNumber', 'licenseState', 'phone', 'dob'],
      2: ['address', 'city', 'state', 'zip', 'timeAtAddress'],
      3: ['employmentType', 'CompanyName', 'occupation', 'income', 'timeAtJob'],
    };

    const currentFields = stepFields[step] || [];
    let newErrors = {};
    let hasError = false;

    currentFields.forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        hasError = true;
      }
    });

    setErrors(prev => ({ ...prev, ...newErrors }));

    if (hasError) {
      Swal.fire({
        icon: 'warning',
        title: t('preapproval.alerts.missingInfo'),
        text: t('preapproval.alerts.completeFields'),
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

    setSubmitting(true);
    try {
      await handleSubmit(formData);
      Swal.fire({
        icon: 'success',
        title: t('preapproval.alerts.success'),
        text: t('preapproval.alerts.successText'),
      });
      setFormData(initialData);
      setStep(1);
      setErrors({});
      setValidatedFields(new Set());
      setSelectedState('');
      setCitiesList([]);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: t('preapproval.alerts.error'),
        text: t('preapproval.alerts.errorText'),
      });
    } finally {
      setSubmitting(false);
    }
  };

  const progress = (step / 4) * 100;

  const stepVariants = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, x: -40, transition: { duration: 0.25, ease: 'easeIn' } },
  };

  return (
    <div className="form-wrapper">
      <SEO 
        title="Pre-Approval" 
        description="Get pre-approved for car financing at Motorvibes." 
        url="https://www.motorvibesllc.com/Preapproval"
        image="/img/logo.webp" 
      />
      <h2 className="text-center mb-4">{t('preapproval.title')}</h2>

      <div className="progress mb-4">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="preapproval-steps mb-4">
        <div className={step >= 1 ? 'step active' : 'step'}>{t('preapproval.steps.personal')}</div>
        <div className={step >= 2 ? 'step active' : 'step'}>{t('preapproval.steps.residence')}</div>
        <div className={step >= 3 ? 'step active' : 'step'}>{t('preapproval.steps.employment')}</div>
        <div className={step >= 4 ? 'step active' : 'step'}>{t('preapproval.steps.vehicle')}</div>
      </div>

      <form onSubmit={submitForm}>
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" variants={stepVariants} initial="initial" animate="animate" exit="exit">
              <div className="form-section">
                <h4>{t('preapproval.stepTitles.1')}</h4>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label>{t('preapproval.labels.firstName')}</label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`form-control ${errors.firstName ? 'is-invalid' : validatedFields.has('firstName') ? 'is-valid' : ''}`}
                    />
                    {errors.firstName && <span className="text-danger">{errors.firstName}</span>}
                  </div>
                  <div className="col-md-4 mb-3">
                    <label>{t('preapproval.labels.middleName')}</label>
                    <input
                      name="middleName"
                      value={formData.middleName}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label>{t('preapproval.labels.lastName')}</label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`form-control ${errors.lastName ? 'is-invalid' : validatedFields.has('lastName') ? 'is-valid' : ''}`}
                    />
                    {errors.lastName && <span className="text-danger">{errors.lastName}</span>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label>{t('preapproval.labels.email')}</label>
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
                    <label>{t('preapproval.labels.phone')}</label>
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
                    <label>{t('preapproval.labels.dob')}</label>
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
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label>{t('preapproval.labels.socialOrItin')}</label>
                    <input
                      name="socialOrItin"
                      value={formData.socialOrItin}
                      onChange={handleChange}
                      placeholder={t('preapproval.placeholders.socialOrItin')}
                      className={`form-control ${errors.socialOrItin ? 'is-invalid' : validatedFields.has('socialOrItin') ? 'is-valid' : ''}`}
                    />
                    {errors.socialOrItin && <span className="text-danger">{errors.socialOrItin}</span>}
                  </div>
                  <div className="col-md-4 mb-3">
                    <label>{t('preapproval.labels.licenseNumber')}</label>
                    <input
                      name="licenseNumber"
                      value={formData.licenseNumber}
                      onChange={handleChange}
                      className={`form-control ${errors.licenseNumber ? 'is-invalid' : validatedFields.has('licenseNumber') ? 'is-valid' : ''}`}
                    />
                    {errors.licenseNumber && <span className="text-danger">{errors.licenseNumber}</span>}
                  </div>
                  <div className="col-md-4 mb-3">
                    <label>{t('preapproval.labels.licenseState')}</label>
                    <select
                      name="licenseState"
                      value={formData.licenseState}
                      onChange={handleChange}
                      className={`form-select ${errors.licenseState ? 'is-invalid' : validatedFields.has('licenseState') ? 'is-valid' : ''}`}
                      disabled={loadingStates}
                    >
                      <option value="">{loadingStates ? t('preapproval.options.state.loading') : t('preapproval.options.state.select')}</option>
                      {statesList.map(stateItem => (
                        <option key={stateItem.id} value={stateItem.iso2}>{stateItem.name}</option>
                      ))}
                    </select>
                    {errors.licenseState && <span className="text-danger">{errors.licenseState}</span>}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" variants={stepVariants} initial="initial" animate="animate" exit="exit">
              <div className="form-section">
                <h4>{t('preapproval.stepTitles.2')}</h4>
                <div className="mb-3">
                  <label>{t('preapproval.labels.address')}</label>
                  <input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`form-control ${errors.address ? 'is-invalid' : validatedFields.has('address') ? 'is-valid' : ''}`}
                  />
                  {errors.address && <span className="text-danger">{errors.address}</span>}
                </div>
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <label>{t('preapproval.labels.state')}</label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className={`form-select ${errors.state ? 'is-invalid' : validatedFields.has('state') ? 'is-valid' : ''}`}
                      disabled={loadingStates}
                    >
                      <option value="">{loadingStates ? t('preapproval.options.state.loading') : t('preapproval.options.state.select')}</option>
                      {statesList.map(stateItem => (
                        <option key={stateItem.id} value={stateItem.iso2}>{stateItem.name}</option>
                      ))}
                    </select>
                    {errors.state && <span className="text-danger">{errors.state}</span>}
                  </div>
                  <div className="col-md-3 mb-3">
                    <label>{t('preapproval.labels.city')}</label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={`form-select ${errors.city ? 'is-invalid' : validatedFields.has('city') ? 'is-valid' : ''}`}
                      disabled={loadingCities || !selectedState}
                    >
                      <option value="">{loadingCities ? t('preapproval.options.city.loading') : t('preapproval.options.city.select')}</option>
                      {citiesList.map(city => (
                        <option key={city.id} value={city.name}>{city.name}</option>
                      ))}
                    </select>
                    {errors.city && <span className="text-danger">{errors.city}</span>}
                  </div>
                  <div className="col-md-3 mb-3">
                    <label>{t('preapproval.labels.zip')}</label>
                    <input
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                      className={`form-control ${errors.zip ? 'is-invalid' : validatedFields.has('zip') ? 'is-valid' : ''}`}
                    />
                    {errors.zip && <span className="text-danger">{errors.zip}</span>}
                  </div>
                  <div className="col-md-3 mb-3">
                    <label>{t('preapproval.labels.timeAtAddress')}</label>
                    <input
                      name="timeAtAddress"
                      value={formData.timeAtAddress}
                      onChange={handleChange}
                      placeholder={t('preapproval.placeholders.timeAtAddress')}
                      className={`form-control ${errors.timeAtAddress ? 'is-invalid' : validatedFields.has('timeAtAddress') ? 'is-valid' : ''}`}
                    />
                    {errors.timeAtAddress && <span className="text-danger">{errors.timeAtAddress}</span>}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" variants={stepVariants} initial="initial" animate="animate" exit="exit">
              <div className="form-section">
                <h4>{t('preapproval.stepTitles.3')}</h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>{t('preapproval.labels.employmentType')}</label>
                    <select
                      name="employmentType"
                      value={formData.employmentType}
                      onChange={handleChange}
                      className={`form-select ${errors.employmentType ? 'is-invalid' : validatedFields.has('employmentType') ? 'is-valid' : ''}`}
                    >
                      <option value="">{t('preapproval.options.employmentType.select')}</option>
                      <option value="self employed">{t('preapproval.options.employmentType.selfEmployed')}</option>
                      <option value="employed full time">{t('preapproval.options.employmentType.fullTime')}</option>
                      <option value="employed part time">{t('preapproval.options.employmentType.partTime')}</option>
                      <option value="Other">{t('preapproval.options.employmentType.other')}</option>
                    </select>
                    {errors.employmentType && <span className="text-danger">{errors.employmentType}</span>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>{t('preapproval.labels.companyName')}</label>
                    <input
                      name="CompanyName"
                      value={formData.CompanyName}
                      onChange={handleChange}
                      className={`form-control ${errors.CompanyName ? 'is-invalid' : validatedFields.has('CompanyName') ? 'is-valid' : ''}`}
                    />
                    {errors.CompanyName && <span className="text-danger">{errors.CompanyName}</span>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>{t('preapproval.labels.occupation')}</label>
                    <input
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      className={`form-control ${errors.occupation ? 'is-invalid' : validatedFields.has('occupation') ? 'is-valid' : ''}`}
                    />
                    {errors.occupation && <span className="text-danger">{errors.occupation}</span>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>{t('preapproval.labels.income')}</label>
                    <input
                      type="number"
                      name="income"
                      value={formData.income}
                      onChange={handleChange}
                      className={`form-control ${errors.income ? 'is-invalid' : validatedFields.has('income') ? 'is-valid' : ''}`}
                    />
                    {errors.income && <span className="text-danger">{errors.income}</span>}
                  </div>
                </div>
                <div className='row'>
                  <div className="col-md-6 mb-3">
                    <label>{t('preapproval.labels.additionalIncome')}</label>
                    <input
                      type="number"
                      name="additionalIncome"
                      value={formData.additionalIncome}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>{t('preapproval.labels.timeAtJob')}</label>
                    <input
                      type="text"
                      name="timeAtJob"
                      value={formData.timeAtJob}
                      onChange={handleChange}
                      placeholder={t('preapproval.placeholders.timeAtJob')}
                      className={`form-control ${errors.timeAtJob ? 'is-invalid' : validatedFields.has('timeAtJob') ? 'is-valid' : ''}`}
                    />
                    {errors.timeAtJob && <span className="text-danger">{errors.timeAtJob}</span>}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" variants={stepVariants} initial="initial" animate="animate" exit="exit">
              <div className="form-section">
                <h4>{t('preapproval.stepTitles.4')}</h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>{t('preapproval.labels.carType')}</label>
                    <input
                      name="carType"
                      value={formData.carType}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>{t('preapproval.labels.downPayment')}</label>
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
            </motion.div>
          )}

          <div className="d-flex justify-content-between mt-4">
            {step > 1 && (
              <button type="button" className="btn btn-outline-secondary" onClick={prevStep}>
                {t('preapproval.buttons.back')}
              </button>
            )}

            {step < 4 ? (
              <button type="button" className="btn btn-primary ms-auto" onClick={nextStep}>
                {t('preapproval.buttons.next')}
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-success ms-auto"
                onClick={submitForm}
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"></span>
                    {t('preapproval.buttons.submitting')}
                  </>
                ) : (
                  t('preapproval.buttons.submit')
                )}
              </button>
            )}
          </div>
        </AnimatePresence>
      </form>
    </div>
  );
}