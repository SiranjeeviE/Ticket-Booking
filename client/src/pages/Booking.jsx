import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    transportCategory: '',
    startDate: '',
    from: '',
    to: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {



      console.log('Booking data:', formData);
      navigate('/confirmation', { state: { booking: formData } });
    } catch (error) {
      setError('Failed to book. Please try again.');
      console.error('Booking error:', error);
    }
  };

  return (
    <div className="booking-bg">
      <section className="booking" id="booking">
        <h2>Book Your Journey</h2>
        {error && <div className="error-message">{error}</div>}
        <form className="booking-form" onSubmit={handleSubmit}>
          <label style={{ fontWeight: 'bold' }}>Transport Category</label>
          <select
            name="transportCategory"
            value={formData.transportCategory}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Flight">Flight</option>
            <option value="Bus">Bus</option>
          </select>

          <label>Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />

          <label>From</label>
          <input
            type="text"
            name="from"
            placeholder="Starting Location"
            value={formData.from}
            onChange={handleChange}
            required
          />

          <label>To</label>
          <input
            type="text"
            name="to"
            placeholder="Destination"
            value={formData.to}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn">Book Ticket</button>
        </form>
      </section>
    </div>
  );
};

export default Booking;
