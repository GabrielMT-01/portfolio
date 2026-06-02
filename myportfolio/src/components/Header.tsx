import { Menu, X } from "lucide-react";
import { useState } from "react";
function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    return (
    <header className="bg-black lg:bg-[#d7d7d7]">
        <div className="flex items-center justify-between pt-5 lg:px-10">

            <a href="#" className="flex items-center">
                <img src="./mylogo.png" className="hidden w-25 h-22 lg:block lg:w-35 lg:h-30 object-contain lg:pt-5" />
                <img src="./mylogo-white.png" className="w-25 h-22 lg:hidden" />
            </a>

            <button
                className="flex items-center justify-center pr-5 cursor-pointer text-white lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                {isMenuOpen ? <X className="size-10" /> : <Menu className="size-10" />}
            </button>

            <nav className="hidden lg:flex lg:items-center  lg:text-xl gap-10 text-black font-medium">
                <a href="#about" className="font-semibold hover:text-red-500 hover:-translate-y-1 transition-all duration-300">About me</a>
                <a href="#skills" className="font-semibold hover:text-red-500 hover:-translate-y-1 transition-all duration-300">Skills</a>
                <a href="#projects" className="font-semibold hover:text-red-500 hover:-translate-y-1 transition-all duration-300">Projects</a>
                <div className="bg-white h-10 flex items-center rounded-xl hover:-translate-y-1 transition-all duration-300"><a href="#contact" className="p-3 text-black font-semibold hover:text-red-500 transition-all duration-300">CONTACT ME</a></div>
            </nav>
        </div>

  {isMenuOpen && (
    <nav className="mt-10 flex flex-col gap-2 pb-10 text-[1.2em] text-white lg:hidden">
      <div className="flex h-15 w-full cursor-pointer items-center justify-center text-center font-medium hover:bg-white hover:text-black">
        <a href="#about">About me</a>
      </div>

      <div className="flex h-15 w-full cursor-pointer items-center justify-center text-center font-medium hover:bg-white hover:text-black">
        <a href="#skills">Skills</a>
      </div>

      <div className="flex h-15 w-full cursor-pointer items-center justify-center text-center font-medium hover:bg-white hover:text-black">
        <a href="#projects">Projects</a>
      </div>

      <div className="flex h-15 w-full cursor-pointer items-center justify-center text-center font-medium hover:bg-white hover:text-black">
        <a href="#contact">CONTACT ME</a>
      </div>
    </nav>
  )}
</header>
    )
}

export default Header;