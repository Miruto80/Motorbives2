import React, { useState, useEffect } from 'react'; // Agregado useEffect
import '../assets/css/Contact.css';
import Title from './Title';
import { useForm } from '@formspree/react';
import Swal from 'sweetalert2';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  // Estados para validaciones
  const [errors, setErrors] = useState({});
  const [validatedFields, setValidatedFields] = useState(new Set());

  // Estado y handler de Formspree
  const [state, handleSubmit] = useForm("xzdvprqk");

  // Validadores para cada campo
  const validators = {
    name: value => {
      if (!value.trim()) return 'Name is required';
      if (!/^[a-zA-Z\s]+$/.test(value)) return 'Name must contain only letters and spaces';
      return '';
    },
    number: value => {
      if (!value.trim()) return 'Number is required';
      if (value.length < 10) return 'Number must be at least 10 digits';
      if (!/^\d+$/.test(value)) return 'Number must contain only digits';
      return '';
    },
    email: value => {
      if (!value.trim()) return 'Email is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format';
      return '';
    },
    date: value => {
      if (!value.trim()) return 'Date is required';
      const selectedDate = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) return 'Date must be today or in the future';
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
        title: 'Missing or invalid information',
        text: 'Please correct the errors before submitting.',
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
        title: 'Reservation Submitted',
        text: 'Thank you! We will contact you soon to confirm your test drive.',
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
        title: 'Error',
        text: 'Something went wrong. Please try again.',
      });
    }
  }, [state.succeeded, state.errors]);

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
        title: 'Error',
        text: 'Failed to send. Please check your connection.',
      });
    }
  };

  return (
    <section className="reservation-section">
      <Title text='Schedule a test drive'/>
      <div className="reservation-form">
        <form onSubmit={onSubmit}>
          <label>
            Name:
            <input 
              type="text" 
              placeholder='Put your name here' 
              value={name} 
              onChange={handleChange} 
              name="name"
              className={` ${errors.name ? 'is-invalid' : validatedFields.has('name') ? 'is-valid' : ''}`}
              required 
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </label>

          <label>
            Number:
            <input 
              type="tel"  
              placeholder='Put your number here' 
              value={number} 
              onChange={handleChange} 
              name="number"
              className={` ${errors.number ? 'is-invalid' : validatedFields.has('number') ? 'is-valid' : ''}`}
              required 
            />
            {errors.number && <span className="text-danger">{errors.number}</span>}
          </label>

          <label>
            Email:
            <input 
              type="email"  
              placeholder='Put your email here' 
              value={email} 
              onChange={handleChange} 
              name="email"
              className={` ${errors.email ? 'is-invalid' : validatedFields.has('email') ? 'is-valid' : ''}`}
              required 
            />
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </label>

          <label>
            Date:
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
            {state.submitting ? 'Sending...' : 'Schedule Your Test Drive'}
          </button>
        </form>
      </div>

      <div className="reservation-map">
        <iframe
          title="Ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.2871327877124!2d-97.3496619!3d32.7846451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e77270e244259%3A0xf0fef2c095b92789!2sMotorvibes%20llc!5e0!3m2!1ses!2sus!4v1768606554060!5m2!1ses!2sus"          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <Title text='Social Media'/>
      <div className="reservation-socials">
        <div className="socials">
          <a href="https://www.facebook.com/profile.php?id=61572580624185" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com/motorvibesllc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="https://www.tiktok.com/@motorvibesllc?_r=1&_t=ZS-93fv0rHk8xU" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <i className="fab fa-tiktok" aria-hidden="true"></i>
          </a>
          <a href="https://wa.me/16822406838" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="fab fa-whatsapp" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  );
}