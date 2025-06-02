import React from "react";
import "../css/Basketbol.css";

export default function Basketbol() {
  const course = {
    id: 890,
    title: "Basketbol Spor Akademisi",
    description: "Basketbol oynamak istiyorsanız; hemen kayıt olabilirsiniz",
    price: "2500 TL",
    link: "http://www.istanbulefendileri.org/",
    // link başına https:// ekle!
    image: "/assets/image/basketbol.png",
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
