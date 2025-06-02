import React from "react";
import "../css/ContactForm.css";

function ContactForm() {
  return (
    <div className="contact-form">
      <h2>İletişim Formu</h2>
      <form>
        <label>Adınız:</label>
        <input type="text" name="name" placeholder="Adınızı girin" />

        <label>E-posta:</label>
        <input type="email" name="email" placeholder="E-posta adresiniz" />

        <label>Mesajınız:</label>
        <textarea name="message" placeholder="Mesajınızı buraya yazın..." />

        <button type="submit">Gönder</button>
      </form>
    </div>
  );
}

export default ContactForm;
