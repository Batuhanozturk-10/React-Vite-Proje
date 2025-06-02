import React, { useState } from "react";
import "./Header.css";
import SocialMedia from "./components/SocialMedia";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo">Spor Kursları</div>

      <nav className="nav-links">
        <a href="/" className="menu-item">
          Anasayfa
        </a>

        {/* Dropdown başlığı <a> olarak */}
        <a
          href="#!"
          className="menu-item dropdown"
          role="button"
          tabIndex={0}
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
          onClick={(e) => {
            e.preventDefault(); // sayfa yenilenmesin
            toggleDropdown();
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              toggleDropdown();
            }
          }}
        >
          Kurslar ▼
        </a>

        {/* Dropdown içeriği */}
        {dropdownOpen && (
          <div className="dropdown-content">
            <a href="/kurslar/voleybol" className="dropdown-item">
              Voleybol
            </a>
            <a href="/kurslar/basketbol" className="dropdown-item">
              Basketbol
            </a>
            <a href="/kurslar/futbol" className="dropdown-item">
              Futbol
            </a>
          </div>
        )}

        <a href="/iletisim" className="menu-item">
          İletişim
        </a>
        <a href="/duyurular" className="menu-item">
          Duyurular
        </a>
      </nav>

      <SocialMedia />
    </header>
  );
}
