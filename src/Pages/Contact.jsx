import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

function Contact() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem' }}>
      <h2>Contact Us.</h2>

      {/* Contact Info Section */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', margin: '2rem 0' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem' }}><FaMapMarkerAlt /></div>
          <h4>Address</h4>
          <p>6834 Hollywood Blvd – Los Angeles CA</p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem' }}><FaEnvelope /></div>
          <h4>Email</h4>
          <p>Support@website.com</p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem' }}><FaPhoneAlt /></div>
          <h4>Phone</h4>
          <p>+20 010 2517 8918</p>
        </div>
      </div>

      {/* Form Section */}
      <form style={{ display: 'flex', flexDirection: 'column', width: '80%', maxWidth: '600px', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input type="text" placeholder="Name" style={{ flex: 1, padding: '0.5rem' }} />
          <input type="email" placeholder="Email" style={{ flex: 1, padding: '0.5rem' }} />
        </div>
        <textarea placeholder="Message" rows="5" style={{ width: '100%', padding: '0.5rem' }}></textarea>
        <button type="submit" style={{ alignSelf: 'flex-start', padding: '0.5rem 1rem' }}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
