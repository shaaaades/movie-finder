import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex flex-row items-center justify-between sm:justify-around p-2">
      
      <nav className="hidden sm:flex justify-between items-center gap-3">
        <img className="rounded-full w-0.4 h-0.4" src="../src/assets/images/initial-movie-logo.png" alt="Movie Quest"/>
        <p className="font-main-header"> Movie Quest </p>
      </nav>

      <nav className="hidden sm:flex justify-between items-center gap-4 font-side-header">
        <a href="#" className="hover:text-gray-500">
          Login
        </a>
        <a href="#" className="hover:text-gray-500">
          Register
        </a>
      </nav>

      <nav className="sm:hidden flex flex-col items-end gap-1">
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