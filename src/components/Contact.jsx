import React, { useState, useEffect } from 'react'; // Agregado useEffect
import '../assets/css/Contact.css';
import Title from './Title';
import { useForm } from '@formspree/react';
import Swal from 'sweetalert2';
import { useLanguage } from '../context/useLanguage.js'; // Agregar import

export default function ContactSection() {
  const { language, t } = useLanguage(); // Usar el hook

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  // Estados para validaciones
  const [errors, setErrors] = useState({});
  const [validatedFields, setValidatedFields] = useState(new Set());

  // Estado y handler de Formspree
  const [state, handleSubmit] = useForm("xzdvprqk");

  // Validadores para cada campo (usando traducciones)
  const validators = {
    name: value => {
      if (!value.trim()) return t('preapproval.errors.required');
      if (!/^[a-zA-Z\s]+$/.test(value)) return t('preapproval.errors.nameLetters');
      return '';
    },
    number: value => {
      if (!value.trim()) return t('preapproval.errors.required');
      if (value.length < 10) return t('preapproval.errors.phone');
      if (!/^\d+$/.test(value)) return t('preapproval.errors.numberDigits');
      return '';
    },
    email: value => {
      if (!value.trim()) return t('preapproval.errors.required');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return t('preapproval.errors.email');
      return '';
    },
    date: value => {
      if (!value.trim()) return t('preapproval.errors.required');
      const selectedDate = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) return t('preapproval.errors.dateFuture');
      return '';
    },
  };

  // Función para validar un campo individual
  const validateField = (name, value) => {
    if (validators[name]) return validators[name](value);
    return '';
  };

  // Handler actualizado para cambios en inputs con validación en tiempo real
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Actualizar el estado del campo
    if (name === 'name') setName(value);
    else if (name === 'number') setNumber(value.replace(/\D/g, '')); // Solo números
    else if (name === 'email') setEmail(value);
    else if (name === 'date') setDate(value);

    // Validar en tiempo real
    const error = validateField(name, value);
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
  };

  // Validación completa antes de enviar
  const validateForm = () => {
    const fields = ['name', 'number', 'email', 'date'];
    let newErrors = {};
    let hasError = false;

    fields.forEach(field => {
      const value = field === 'name' ? name : field === 'number' ? number : field === 'email' ? email : date;
      const error = validateField(field, value);
      if (error) {
        newErrors[field] = error;
        hasError = true;
      }
    });

    setErrors(newErrors);

    if (hasError) {
      Swal.fire({
        icon: 'warning',
        title: t('contact.alerts.missingInfo'),
        text: t('contact.alerts.correctErrors'),
      });
      return false;
    }

    return true;
  };

  // useEffect para manejar el estado de Formspree (éxito o error)
  useEffect(() => {
    if (state.succeeded) {
      Swal.fire({
        icon: 'success',
        title: t('contact.alerts.success'),
        text: t('contact.alerts.successText'),
      });

      // Resetear los campos después del envío
      setName('');
      setNumber('');
      setEmail('');
      setDate('');
      setErrors({});
      setValidatedFields(new Set());
    }

    if (state.errors && state.errors.length > 0) {
      Swal.fire({
        icon: 'error',
        title: t('contact.alerts.error'),
        text: t('contact.alerts.errorText'),
      });
    }
  }, [state.succeeded, state.errors, t]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Validar antes de enviar

    try {
      // Enviar los datos a Formspree
      await handleSubmit({
        name,
        number,
        email,
        date,
      });
    } catch (error) {
      console.error('Formspree error:', error);
      Swal.fire({
        icon: 'error',
        title: t('contact.alerts.error'),
        text: t('contact.alerts.sendError'),
      });
    }
  };

  return (
    <section className="reservation-section">
      <Title text={t('contact.title')} />
      <div className="reservation-form">
        <form onSubmit={onSubmit}>
          <label>
            {t('contact.labels.name')}
            <input 
              type="text" 
              placeholder={t('contact.placeholders.name')} 
              value={name} 
              onChange={handleChange} 
              name="name"
              className={` ${errors.name ? 'is-invalid' : validatedFields.has('name') ? 'is-valid' : ''}`}
              required 
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </label>

          <label>
            {t('contact.labels.number')}
            <input 
              type="tel"  
              placeholder={t('contact.placeholders.number')} 
              value={number} 
              onChange={handleChange} 
              name="number"
              className={` ${errors.number ? 'is-invalid' : validatedFields.has('number') ? 'is-valid' : ''}`}
              required 
            />
            {errors.number && <span className="text-danger">{errors.number}</span>}
          </label>

          <label>
            {t('contact.labels.email')}
            <input 
              type="email"  
              placeholder={t('contact.placeholders.email')} 
              value={email} 
              onChange={handleChange} 
              name="email"
              className={` ${errors.email ? 'is-invalid' : validatedFields.has('email') ? 'is-valid' : ''}`}
              required 
            />
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </label>

          <label>
            {t('contact.labels.date')}
            <input 
              type="date" 
              value={date} 
              onChange={handleChange} 
              name="date"
              className={` ${errors.date ? 'is-invalid' : validatedFields.has('date') ? 'is-valid' : ''}`}
              required 
            />
            {errors.date && <span className="text-danger">{errors.date}</span>}
          </label>
          <button type="submit" disabled={state.submitting}>
            {state.submitting ? t('contact.buttons.sending') : t('contact.buttons.submit')}
          </button>
        </form>
      </div>

      <div className="reservation-map">
        <iframe
          title="Ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.372449093431!2d-97.37629262447268!3d32.78238238371213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e77270e244259%3A0xf0fef2c095b92789!2sMotorvibes%20llc!5e0!3m2!1ses!2sve!4v1770854334275!5m2!1ses!2sve"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}