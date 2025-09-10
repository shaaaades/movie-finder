import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex flex-row items-center justify-between sm:justify-around p-2">
      
      <nav className="hidden sm:flex justify-between items-center gap-3 font-semibold">
        <img class="rounded-full w-10 h-10" src="../src/assets/images/movie-quest-logo.png" alt="Movie Quest"/>
        <p> MOVIE QUEST </p>
      </nav>

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