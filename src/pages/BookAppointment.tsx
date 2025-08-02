import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookAppointment: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [time, setTime] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, dob, time });
    setSubmitted(true);

    // Optionally redirect after few seconds
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto' }}>
      {submitted ? (
        <div>
          <h2>Appointment Confirmed!</h2>
          <p>Thank you, {name}. Your appointment has been booked.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Book Appointment</h2>

          <label>Patient Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ display: 'block', marginBottom: '1rem', width: '100%' }}
          />

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ display: 'block', marginBottom: '1rem', width: '100%' }}
          />

          <label>Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
            style={{ display: 'block', marginBottom: '1rem', width: '100%' }}
          />

          <label>Preferred Appointment Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            style={{ display: 'block', marginBottom: '1rem', width: '100%' }}
          />

          <button type="submit" style={{ padding: '0.5rem 1rem' }}>
            Confirm Appointment
          </button>
        </form>
      )}
    </div>
  );
};

export default BookAppointment;
