import React from "react";
import "../css/Voleybol.css";

export default function Voleybol() {
  const clubs = [
    {
      name: "İstanbul Efendileri Spor Akademisi",
      price: "1500 TL / Ay",
      link: "http://www.istanbulefendileri.org/index.html#",
    },
    {
      name: "Beylikdüzü Bizimkent Spor Kulübü",
      price: "2500 TL / Ay",
      link: "https://bizimkentvoleybol.wordpress.com/",
    },
    {
      name: "Avrupa Voleybol spor Akademisi",
      price: "3000 TL / Ay",
      link: "https://www.olleyy.com/voleybol-okulu/avrupa-voleybol-akademisi-spor-kulubu-beylikduzu-istanbul/3855",
    },
    {
      name: "Beylikdüzü Fenerbahçe Spor Akademisi",
      price: "4000 TL / Ay",
      link: "https://fenerbahcebahcesehir.com.tr/",
      
    },
  ];

  return (
    <div className="kurs-sayfasi">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Voleybol Kursu</h1>
      <p className="mb-6">
        Voleybol, takım oyunu ve dayanıklılık gerektiren harika bir spor
        dalıdır. Beylikdüzü ve çevresindeki kulüplerimizde antrenmanlara
        katılabilirsiniz.
      </p>

      <div className="kart-container">
        {clubs.map((club) => (
          <div key={club.name} className="kart">
            <h2>{club.name}</h2>
            <p>{club.price}</p>
            <a href={club.link} target="_blank" rel="noopener noreferrer">
              Üye olmak istiyorsanız tıklayın
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
