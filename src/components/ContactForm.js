import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/server.php', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
      .then((res) => res.text())
      .then((data) => alert(data))
      .catch((err) => console.error(err));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <textarea name="message" placeholder="Message" onChange={handleChange} required />
      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;
