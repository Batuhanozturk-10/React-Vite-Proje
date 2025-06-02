// src/pages/Futbol.jsx
import React from "react";
import "../css/Futbol.css";

export default function Futbol() {
  const course = {
    id: 891,
    title: "Futbol Spor Akademisi",
    description: "Futbol oynamayı öğrenmek istiyorsanız; hemen kayıt olun!",
    price: "3000 TL",
    link: "https://www.galatasaray.org/s/galatasaray-futbol-okullari/138",
    image: "/assets/image/futbol.png", // uygun resim yolunu ayarla
  };

  return (
    <div className="kurs-sayfasi">
      <h1>{course.title}</h1>
      <img src={course.image} alt={course.title} className="kurs-resmi" />
      <p>{course.description}</p>
      <p>Fiyat: {course.price}</p>
      <a href={course.link} target="_blank" rel="noopener noreferrer">
        Hemen Kayıt Ol
      </a>
    </div>
  );
}
