import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Spor Kursları</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-200">
              Ana Sayfa
            </Link>
          </li>
          <li>
            <Link to="/kurslar" className="text-white hover:text-gray-200">
              Kurslar
            </Link>
          </li>
          <li>
            <Link to="/hakkimizda" className="text-white hover:text-gray-200">
              Hakkımızda
            </Link>
          </li>
          <li>
            <Link to="/iletisim" className="text-white hover:text-gray-200">
              İletişim
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
