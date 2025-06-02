import React from "react";
import "./CourseAdvice.css";

const advice = [
  {
    sport: "Futbol",
    ageRange: "7–14 yaş",
    recommendedStartAge: "7-11 yaş arası",
    description:
      "Futbol, enerjisi yüksek ve hareket etmeyi seven çocuklar için ideal. Bu spor, fiziksel dayanıklılığı artırırken takım çalışması, iş birliği ve liderlik becerilerini de geliştirir.",
    features: [
      "Takım ruhuna yatkınlık",
      "Hız ve çeviklik",
      "Rekabetçi ruh",
      "Sosyal iletişim becerileri",
    ],
  },
  {
    sport: "Basketbol",
    ageRange: "8–16 yaş",
    recommendedStartAge: "8-11 yaş arası",
    description:
      "Basketbol, el-göz koordinasyonu ve strateji geliştirmeyi seven çocuklar için uygundur. Hızlı tempo refleksleri güçlendirir, özgüveni ve liderlik duygusunu destekler.",
    features: [
      "El-göz koordinasyonu",
      "Hız ve dayanıklılık",
      "Stratejik düşünme",
      "Yüksek enerji seviyesi",
    ],
  },
  {
    sport: "Voleybol",
    ageRange: "9–15 yaş",
    recommendedStartAge: "10-12 yaş arası",
    description:
      "Voleybol, dikkatli ve disiplinli çocuklar için ideal bir takım sporu. Koordinasyon, denge ve zamanlama becerilerini geliştirirken sorumluluk almayı da öğretir.",
    features: [
      "Takım çalışmasına uyum",
      "Esneklik ve denge",
      "Zamanlama becerisi",
      "Etkili iletişim",
    ],
  },
];

export default function CourseAdvice() {
  return (
    <div className="course-advice">
      <section className="importance-box">
        <h1>İstikbali Engelleyen Değil, Güçlendiren Spor</h1>
        <ul>
          <li>
            Hep çocuklarımızın geleceğini, yani istikballerini en iyi şekilde
            kurabilmeleri için çaba harcıyoruz. Ancak, çoğu zaman sporun bu
            yolda bir engel olacağı düşünülür. "Spor yaparsa derslerine zaman
            ayıramaz", "Sporla uğraşmak akademik başarıyı düşürür" gibi kaygılar
            yaygındır. Peki, gerçekten spor çocukların istikbalini engelleyen
            bir unsur mudur?
          </li>
          <li>
            Bilimsel araştırmalar ve eğitim uzmanları bunun tam tersini
            söylüyor. Spor, çocukların fiziksel sağlığını korumakla kalmaz, aynı
            zamanda zihinsel ve duygusal gelişimlerini destekler. Düzenli
            fiziksel aktivite yapan çocukların konsantrasyon, hafıza ve problem
            çözme becerilerinde gelişmeler gözlemlenmiştir. Spor, stres ve
            kaygıyı azaltarak daha dengeli ve motive bir öğrenme ortamı yaratır.
          </li>
          <li>
            Ayrıca, sporun getirdiği disiplin ve takım çalışması becerileri,
            okul hayatında ve gelecekteki kariyerlerinde çocuklara önemli
            avantajlar sağlar. Spor yapan çocuklar, zaman yönetimi konusunda
            daha başarılı, özgüvenli ve sosyal ilişkilerde daha güçlü olurlar.
          </li>
          <li>
            Kısacası, spor çocukların istikballerini engelleyen değil, tam
            aksine güçlendiren, destekleyen bir etkendir. Onların hem bedensel
            hem de zihinsel olarak sağlıklı bireyler olmalarını sağlayarak,
            başarıya giden yolda yanlarında olur.
          </li>
        </ul>
      </section>

      <section className="spor-neden-container">
        <h1>Çocuklar İçin Sporun Önemi</h1>
        <ul>
          <li>
            Çocuklar için spor yapmak, sağlıklı büyüme ve gelişme açısından çok
            önemlidir. Düzenli fiziksel aktivite, kasların, kemiklerin ve kalbin
            güçlü olmasını sağlar, bağışıklık sistemini destekler ve obezite
            riskini azaltır.
          </li>
          <li>
            Spor, çocukların özgüvenini artırır, duygusal olarak kendilerini
            daha iyi hissetmelerine yardımcı olur ve sosyal becerilerini
            geliştirir. Takım oyunları sayesinde paylaşmayı, iş birliğini ve
            iletişimi öğrenirken, bireysel sporlar disiplin ve sorumluluk
            duygusunu pekiştirir.
          </li>

          <li>
            Dünya Sağlık Örgütü, çocukların her gün en az 60 dakika aktif
            olmasını önerir. Bu hareket süresi, çocukların hem fiziksel hem
            zihinsel gelişimini destekler.
          </li>

          <li>
            Kısacası, spor çocukların sağlıklı, mutlu ve dengeli bireyler olarak
            büyümelerini sağlayan temel bir yaşam alışkanlığıdır.
          </li>
        </ul>
      </section>

      <h2>Hangi Spor, Hangi Çocuk İçin?</h2>
      <ul>
        {advice.map(
          ({ sport, ageRange, recommendedStartAge, description, features }) => (
            <li key={sport}>
              <h3>{sport}</h3>
              <p>
                <strong>Yaş Aralığı:</strong> {ageRange}
              </p>
              <p>
                <strong>Tavsiye Edilen Başlama Yaşı:</strong>{" "}
                {recommendedStartAge}
              </p>
              <p>{description}</p>
              <ul>
                {features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
