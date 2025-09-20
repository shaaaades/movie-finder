import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchBar from "./SearchBar.jsx";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex flex-row items-center justify-between sm:justify-between p-2 text-sm text-[#111155]">
      <nav className="hidden sm:flex justify-between items-center gap-3">
        <img
          className="rounded-full w-0.4 h-0.4"
          src="../src/assets/images/initial-movie-logo.png"
          alt="Movie Quest"
        />
        <p className="font-main-header tracking-wide"> Movie </p>
      </nav>

      <SearchBar />

      <nav className="hidden flex sm:flex items-center gap-8 font-side-header font-semibold">
        <a href="#" className="hover:text-gray-500">
          Login
        </a>
        <a href="#" className="hover:text-gray-500">
          Register
        </a>
      </nav>

      <nav className="sm:hidden flex flex-col items-end gap-1 font-side-header font-semibold">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="sm:hidden font-bold text-xl hover:text-gray-500"
        >
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
        {showMenu && (
          <>
            <a href="#" className="hover:text-gray-500">
              Login
            </a>
            <a href="#" className="hover:text-gray-500">
              Register
            </a>
          </>
        )}
      </nav>
    </header>
  );
}