import React from "react";

import "../css/Contact.css"; // CSS dosyası (değişken tanımlanmaz)

function Contact() {
  return (
    <div className="iletisim-sayfasi">
      <h1>İletişim</h1>
      <p>
        Her türlü soru, öneri veya başvuru için bizimle iletişime
        geçebilirsiniz.
      </p>

      <div className="iletisim-icerik">
        {/* Form kutusu */}
        <div className="iletisim-kutu">
          <form className="iletisim-formu">
            <label>Ad Soyad</label>
            <input type="text" placeholder="Adınızı ve soyadınızı girin" />

            <label>Email</label>
            <input type="email" placeholder="ornek@mail.com" />

            <label>Konu</label>
            <input type="text" placeholder="Konu başlığı" />

            <label>Mesajınız</label>
            <textarea placeholder="Mesajınızı yazın..." rows="5"></textarea>

            <button type="submit">Gönder</button>
          </form>
        </div>

        {/* Bilgiler kutusu */}
        <div className="iletisim-kutu">
          <h3>İletişim Bilgileri</h3>
          <p>
            <strong>Adres:</strong> Barbaros Mah. Spor Sk. No:42 Beşiktaş /
            İstanbul
          </p>
          <p>
            <strong>Telefon:</strong> 0 (212) 456 78 90
          </p>
          <p>
            <strong>WhatsApp:</strong> 0 (530) 123 45 67
          </p>
          <p>
            <strong>Email:</strong> bilgi@sporakademisi.com
          </p>
          <p>
            <strong>Çalışma Saatleri:</strong> Pazartesi - Cumartesi, 09:00 -
            18:00
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
