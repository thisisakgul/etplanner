import { Link } from "react-router-dom";
import Header from "./Header";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-2 px-6 flex justify-between items-center rounded-b-3xl">
      {/* Sol linkler */}
      <div className="flex space-x-3 items-center">
        <Link to="/" className="text-black text-sm font-medium hover:underline">
          Hakkımızda
        </Link>
        <Link to="/" className="text-black text-sm font-medium hover:underline">
          İletişim
        </Link>
      </div>

      {/* Ortada başlık */}
      <div className="flex-1 flex justify-center">
        <Link to="/">
          <Header />
        </Link>
      </div>

      {/* Sağ linkler */}
      <div className="flex space-x-3 items-center">
        <Link to="/my-plans" className="text-black text-sm font-medium hover:underline">
          Planlarım
        </Link>
        <button className="bg-black text-white text-sm px-3 py-1.5 rounded">
          Giriş / Kaydol
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
