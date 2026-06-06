import { Menu, X } from "lucide-react";
import { useState } from "react";
function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    return (
    <header className="bg-black fixed top-0 left-0 w-full z-50 lg:hidden">
        <div className="flex items-center justify-between pt-5 lg:px-10">

            <a
                href="#"
                className="flex items-center transition-transform duration-300 hover:scale-105 active:scale-95"
            >
                <img
                    src="/mylogo-white.png"
                    className="w-20 h-18 sm:w-25 sm:h-22 object-contain"
                    alt="Logo"
                />
            </a>

            <button
                type="button"
                className="flex items-center justify-center pr-5 cursor-pointer text-white transition-colors duration-300 hover:text-orange-400 active:scale-95"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
                {isMenuOpen ? (
                    <X className="size-9 sm:size-10" />
                ) : (
                    <Menu className="size-9 sm:size-10" />
                )}
            </button>

        </div>

  {isMenuOpen && (
    <nav className="mt-10 flex flex-col gap-2 text-[1.2em] text-white">
      <div className="flex h-15 w-full cursor-pointer items-center justify-center text-center font-medium transition-colors duration-300 hover:bg-white hover:text-black active:bg-orange-500 active:text-white">
        <a href="#about" className="w-full py-1" onClick={() => setIsMenuOpen(false)}>
          About me
        </a>
      </div>

      <div className="flex h-15 w-full cursor-pointer items-center justify-center text-center font-medium transition-colors duration-300 hover:bg-white hover:text-black active:bg-orange-500 active:text-white">
        <a href="#skills" className="w-full py-1" onClick={() => setIsMenuOpen(false)}>
          Skills
        </a>
      </div>

      <div className="flex h-15 w-full cursor-pointer items-center justify-center text-center font-medium transition-colors duration-300 hover:bg-white hover:text-black active:bg-orange-500 active:text-white">
        <a href="#projects" className="w-full py-1" onClick={() => setIsMenuOpen(false)}>
          Projects
        </a>
      </div>

      <div className="flex h-15 w-full cursor-pointer items-center justify-center text-center font-medium transition-colors duration-300 hover:bg-white hover:text-black active:bg-orange-500 active:text-white">
        <a href="#contact" className="w-full py-1" onClick={() => setIsMenuOpen(false)}>
          CONTACT ME
        </a>
      </div>
    </nav>
  )}
</header>
    )
}

export default Header;