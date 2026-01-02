import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Confirmation.css';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    if (location.state?.booking) {
      setBooking(location.state.booking);
    } else {
      // If no booking data is found, redirect to home
      navigate('/');
    }
  }, [location, navigate]);

  if (!booking) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <h2>🎉 Booking Confirmed!</h2>
        <div className="booking-details">
          <h3>Your Booking Details</h3>
          <div className="detail-row">
            <span className="detail-label">Booking Reference:</span>
            <span className="detail-value">EX-{Math.random().toString(36).substr(2, 8).toUpperCase()}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Transport:</span>
            <span className="detail-value">{booking.transportCategory}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Date:</span>
            <span className="detail-value">
              {new Date(booking.startDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
          <div className="detail-row">
            <span className="detail-label">From:</span>
            <span className="detail-value">{booking.from}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">To:</span>
            <span className="detail-value">{booking.to}</span>
          </div>
        </div>
        <div className="confirmation-actions">
          <button 
            className="btn primary"
            onClick={() => window.print()}
          >
            Print Ticket
          </button>
          <button 
            className="btn secondary"
            onClick={() => navigate('/')}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
