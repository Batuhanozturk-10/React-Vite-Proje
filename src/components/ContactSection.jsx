import React from "react";
import "../css/ContactSection.css";

function ContactSection() {
  return (
    <div className="contact-container">
      {/* Sağ: Bilgiler */}
      <div className="info-container">
        <h2>İletişim Bilgilerimiz</h2>
        <p>
          <strong>📍 Adres:</strong> İstanbul, Kadıköy
        </p>
        <p>
          <strong>📞 Telefon:</strong> +90 555 555 55 55
        </p>
        <p>
          <strong>✉️ E-posta:</strong> info@site.com
        </p>
        <p>
          <strong>🕒 Çalışma Saatleri:</strong> 09:00 - 18:00
        </p>
      </div>
    </div>
  );
}

export default ContactSection;
