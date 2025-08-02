import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookAppointment: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [time, setTime] = useState('');
  const [gender, setGender] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, dob, time, gender, symptoms });
    setSubmitted(true);

    setTimeout(() => {
      navigate('/');
    }, 30000);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto' }}>
      {submitted ? (
        <div>
          <h2>Appointment Confirmed!✅</h2>
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

          <label>Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            style={{ display: 'block', marginBottom: '1rem', width: '100%' }}
          >
            <option value="">Select Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </select>

          <label>Select Time</label>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            style={{ display: 'block', marginBottom: '1rem', width: '100%' }}
          >
            <option value="">Select Time</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:30 AM">11:30 AM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="4:00 PM">4:00 PM</option>
          </select>

          <label>Symptoms</label>
          <textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            rows={3}
            placeholder="Describe symptoms"
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
