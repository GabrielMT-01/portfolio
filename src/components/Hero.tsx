import type { ReactNode } from "react";
import { AtSign } from "lucide-react";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";

const DESKTOP_SPLIT_TOP = "48%";
const DESKTOP_SPLIT_BOTTOM = "42%";

const navLinkClass =
    "relative text-white font-medium transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:-translate-y-0.5";

function Hero() {
    return (
        <section id="hero">
            {/* Mobile */}
            <div className="w-full relative lg:hidden h-screen overflow-hidden">
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/Background.png"
                    alt="background"
                />
                
                <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white pt-20 px-6">
                    <p className="font-normal text-xl sm:text-2xl md:text-3xl text-center">
                        Hi! My name is Gabriel
                    </p>
                    <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl text-center mt-2">
                        I'm a{" "}
                        <span className="text-orange-500">Front-End Developer</span>
                    </h1>
                    <img
                        className="mt-[14px] w-[142px] h-[20px] sm:w-[180px] sm:h-[20px]"
                        src="/separatorWhitequality.png"
                        alt="separator"
                    />
                    
                    
                    <div className="mt-6 flex gap-5 sm:gap-6 pointer-events-auto relative z-20">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gabrielmartdesouza@gmail.com" target="_blank" rel="noopener noreferrer" className="block">
                            <MobileSocialIcon>
                                <AtSign className="size-7 sm:size-8" strokeWidth={2.5} />
                            </MobileSocialIcon>
                        </a>
                        <a href="https://github.com/GabrielMT-01" target="_blank" rel="noopener noreferrer" className="block">
                            <MobileSocialIcon>
                                <FaGithub className="size-7 sm:size-8" />
                            </MobileSocialIcon>
                        </a>
                        <a href="https://www.linkedin.com/in/gabriel-martins-45780539a/" target="_blank" rel="noopener noreferrer" className="block">
                            <MobileSocialIcon>
                                <FaLinkedin className="size-7 sm:size-8" />
                            </MobileSocialIcon>
                        </a>
                    </div>

                    <a 
                        href="/Gabriel Sousa CV - Desenvolvedor Front-End Júnior.pdf" 
                        download="Gabriel_Sousa_CV.pdf" 
                        className="mt-6 tracking-[3px] text-sm font-medium bg-[#E5E5E5] text-black shadow-[0_4px_12px_rgba(0,0,0,0.15)] px-6 py-2 rounded-full block relative z-20"
                    >
                        DOWNLOAD CV
                    </a>

                    <a
                        href="#about"
                        className="absolute bottom-10 text-white transition-transform duration-300 hover:scale-110 hover:text-orange-400 active:scale-95 z-20"
                    >
                        <FaArrowDown className="size-10 sm:size-12" />
                    </a>
                </div>
            </div>

            {/* Desktop lg+ */}
            <div className="hidden lg:block relative h-screen w-full overflow-hidden">
                
                <div
                    className="absolute inset-0 bg-[#d7d7d7]"
                    style={{
                        clipPath: `polygon(0 0, ${DESKTOP_SPLIT_TOP} 0, ${DESKTOP_SPLIT_BOTTOM} 100%, 0 100%)`,
                    }}
                />
                <div
                    className="absolute inset-0 bg-[#1A1A1A]"
                    style={{
                        clipPath: `polygon(${DESKTOP_SPLIT_TOP} 0, 100% 0, 100% 100%, ${DESKTOP_SPLIT_BOTTOM} 100%)`,
                    }}
                />

                <div className="fixed top-0 left-0 w-full z-50 h-25 bg-white/0 backdrop-blur-[2px] border-b-2 border-black/50 rounded-full">
                    <div className="max-w-[1920px] mx-auto flex items-center justify-between py-6 px-8 xl:px-14 2xl:px-20">
                        <a
                            href="#"
                            className="block transition-transform duration-300 hover:scale-105 active:scale-95"
                        >
                            <img
                                src="/mylogo.png" 
                                alt="Logo"
                                className="h-12 w-auto object-contain xl:h-16 2xl:h-20 min-[1920px]:h-24"
                            />
                        </a>

                        <nav className="flex items-center gap-6 xl:gap-10 2xl:gap-12 text-lg xl:text-xl 2xl:text-2xl min-[1920px]:text-[1.75rem]">
                            <a href="#about" className={navLinkClass}>
                                About me
                            </a>
                            <a href="#skills" className={navLinkClass}>
                                Skills
                            </a>
                            <a href="#projects" className={navLinkClass}>
                                Projects
                            </a>
                            <a
                                href="#contact"
                                className="bg-white text-black font-bold px-5 py-2 rounded-full text-base xl:px-7 xl:py-3 xl:text-lg 2xl:px-9 2xl:py-3.5 2xl:text-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(255,255,255,0.25)] active:scale-95"
                            >
                                CONTACT ME
                            </a>
                        </nav>
                    </div>
                </div>

                <div className="relative z-10 h-full">
                    <div className="absolute left-0 top-0 bottom-0 w-[40%] xl:w-[38%] flex flex-col justify-center pl-8 lg:pl-12 xl:pl-20 2xl:pl-28 min-[1920px]:pl-36">
                        <p className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl min-[1920px]:text-6xl text-black">
                            Hi, I am
                        </p>
                        <h1 className="lg:text-5xl 2xl:text-6xl font-bold text-black leading-[1.05] mt-2 xl:mt-3">
                            Gabriel Sousa
                        </h1>
                        <p className="text-lg lg:text-3xl 2xl:text-4xl min-[1920px]:text-4xl text-[#828282] mt-3 xl:mt-5">
                            Front-end Developer
                        </p>
                        
                        
                        <div className="flex gap-3 xl:gap-4 2xl:gap-5 mt-4 lg:mt-5 xl:mt-6">
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gabrielmartdesouza@gmail.com" target="_blank" rel="noopener noreferrer">
                                <SocialButton aria-label="Email">
                                    <AtSign strokeWidth={2.5} />
                                </SocialButton>
                            </a>
                            <a href="https://github.com/GabrielMT-01" target="_blank" rel="noopener noreferrer">
                                <SocialButton aria-label="GitHub">
                                    <FaGithub />
                                </SocialButton>
                            </a>
                            <a href="https://www.linkedin.com/in/gabriel-martins-45780539a/" target="_blank" rel="noopener noreferrer">
                                <SocialButton aria-label="LinkedIn">
                                    <FaLinkedin />
                                </SocialButton>
                            </a>
                        </div>
                        
                        
                        <a 
                            href="/Gabriel Sousa CV - Desenvolvedor Front-End Júnior.pdf" 
                            download="Gabriel_Sousa_CV.pdf" 
                            className="mt-10 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:bg-white active:scale-95 lg:w-[25vw] min-w-[150px] text-center tracking-[5px] font-montserrat font-medium bg-[#E5E5E5] shadow-[0_4px_12px_rgba(0,0,0,0.15)] px-5 py-2 rounded-full block"
                        >
                            <span>DOWNLOAD CV</span>
                        </a>
                    </div>

                    <div className="absolute right-0 top-0 bottom-0 w-[65%] flex items-end justify-center pointer-events-none px-4">
                        <img
                            src="/myphoto.png" 
                            alt="Gabriel Sousa"
                            className="max-h-[80vh] xl:max-h-[85vh] 2xl:max-h-[90vh] 2xl:w-auto object-contain object-bottom" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}


function MobileSocialIcon({ children }: { children: ReactNode }) {
    return (
        <div className="text-white transition-all duration-300 hover:scale-110 hover:text-orange-400 active:scale-95">
            {children}
        </div>
    );
}

function SocialButton({
    children,
    "aria-label": ariaLabel,
}: {
    children: ReactNode;
    "aria-label": string;
}) {
    return (
        <span
            aria-label={ariaLabel}
            className="group w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-19 2xl:h-19 min-[1920px]:w-20 min-[1920px]:h-20 bg-[#E5E5E5] rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-center text-black cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:bg-white active:scale-95 [&_svg]:size-5 lg:[&_svg]:size-6 xl:[&_svg]:size-7 2xl:[&_svg]:size-8 min-[1920px]:[&_svg]:size-9"
        >
            {children}
        </span>
    );
}

export default Hero;