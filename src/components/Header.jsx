import { useState } from "react";
import { GrClose, GrVideo } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex flex-row items-center justify-between sm:justify-around p-2">
      <GrVideo/>
      <a
        href="/"
        className="flex items-center h-10 px-10 font-semibold"
      >
        Movie Finder
      </a>
      <nav className="hidden sm:flex justify-between items-center gap-4 font-semibold">
        <a href="#" className="hover:text-gray-500">
          Login
        </a>
        <a href="#" className="hover:text-gray-500">
          Register
        </a>
      </nav>
      <nav className="sm:hidden flex flex-col items-end gap-1 font-semibold">
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

export default Header;