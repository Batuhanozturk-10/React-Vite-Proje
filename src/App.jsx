import React from "react";
import Header from "./Header.jsx";
import { courses } from "./data.js";
import Course from "./Course";
import "./css/Course.css";
import CourseAdvice from "./components/CourseAdvice";
import { Routes, Route } from "react-router-dom";
import Duyurular from "./pages/Duyurular";
import Voleybol from "./pages/Voleybol.jsx";
import Basketbol from "./pages/Basketbol.jsx";
import Futbol from "./pages/Futbol.jsx";
import "./css/Futbol.css";
import "./css/Voleybol.css";
import "./css/Basketbol.css";
import Contact from "./pages/Contact";
import "./css/Contact.css";
import "./Header.css";
import SocialMedia from "./components/SocialMedia";

// ✅ Artık Header burada olmayacak
function AnaSayfa() {
  return (
    <div className="app-container">
      <div className="animated-background" />
      <div className="content">
        <SocialMedia />
        <CourseAdvice />
      </div>
    </div>
  );
}

function Kurslar() {
  return <h2>Kurslar Sayfası</h2>;
}

function Hakkimizda() {
  return <h2>Hakkımızda Sayfası</h2>;
}

function Iletisim() {
  return <h2>İletişim Sayfası</h2>;
}

function App() {
  return (
    <>
      {/* ✅ Header sadece burada bir kere çağrılıyor */}
      <Header />
      <Routes>
        <Route path="/" element={<AnaSayfa />} />
        <Route path="/duyurular" element={<Duyurular />} />
        <Route path="/kurslar" element={<Kurslar />} />
        <Route path="/kurslar/voleybol" element={<Voleybol />} />
        <Route path="/kurslar/futbol" element={<Futbol />} />
        <Route path="/kurslar/basketbol" element={<Basketbol />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/iletisim" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
