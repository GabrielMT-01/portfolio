import { FaHtml5, FaReact, FaCss3Alt, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

function Skills() {
  return (
    <section id="skills" className="bg-[#d7d7d7] pb-40 scroll-mt-20">
      <div className="pt-20">
        <h2 className="flex justify-center items-center border-black border-10 px-4 py-2 m-auto w-[210px] text-black h-[68px] font-montserrat font-bold tracking-[7px] lg:w-[410px] lg:h-[123px] lg:text-3xl">
          SKILLS
        </h2>
        <img className="m-auto mt-7 w-[280px] h-[50px] lg:w-[420px] lg:h-[75px]" src="/separatorBlackquality.png" alt="separatorwhite"/>

        <h2 className="text-2xl lg:text-4xl text-center pt-20 font-bold tracking-[10px]">
          USING NOW:{" "}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 pt-10 gap-15 place-items-center 2xl:grid-cols-4 min-[2200px]:pt-40">
          
          <div className="flex flex-col items-center">
            <FaReact className="w-17 h-17 lg:w-20 lg:h-20" color="#61DBFB" />
            <p className="text-center text-2xl font-roboto font-medium tracking-[7px] pt-3">React</p>
          </div>
          
          <div className="flex flex-col items-center">
            <SiTypescript className="w-17 h-17 lg:w-20 lg:h-20" color="#2D79C7" />
            <p className="text-center text-2xl font-roboto font-medium tracking-[7px] pt-3">TypeScript</p>
          </div>
          
          <div className="flex flex-col items-center">
            <RiTailwindCssFill className="w-17 h-17 lg:w-20 lg:h-20" color="#38BDF8" />
            <p className="text-center text-2xl font-roboto font-medium tracking-[7px] pt-3">TailWind CSS</p>
          </div>
          
          <div className="flex flex-col items-center">
            <FaHtml5 className="w-17 h-17 lg:w-25 lg:h-25" color="orange" />
            <p className="text-center text-2xl font-roboto font-medium tracking-[7px] pt-3">HTML5</p>
          </div>
          
          <div className="flex flex-col items-center">
            <FaCss3Alt className="w-17 h-17 lg:w-25 lg:h-25" color="#2965F1" />
            <p className="text-center text-2xl font-roboto font-medium tracking-[7px] pt-3">CSS3</p>
          </div>
          
          <div className="flex flex-col items-center">
            <SiJavascript className="w-17 h-17 lg:w-25 lg:h-25" color="#F7E018" />
            <p className="text-center text-2xl font-roboto font-medium tracking-[7px] pt-3">JavaScript</p>
          </div>
          
          <div className="">
            <FaGithub className="w-17 h-17 lg:w-25 lg:h-25 m-auto"/>
            <p className="text-center text-2xl font-roboto font-medium tracking-[7px] pt-3">GitHub</p>
          </div>

          <div>
            <FaGitAlt className="w-17 h-17 lg:w-30 lg:h-30 m-auto" color="#F05033"/>
            <p className="text-center text-2xl font-roboto font-medium tracking-[7px] pt-3">Git</p>
          </div>

        </div>

        <h2 className="text-2xl lg:text-4xl text-center pt-30 font-bold tracking-[10px] ">TO LEARN: </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 pt-10 gap-15 2xl:gap-0 place-items-center min-[2200px]:pt-40">
            <div>
                <SiNextdotjs className="w-17 h-17 lg:w-25 lg:h-25 m-auto"/>
                <p className="text-center text-2xl font-roboto font-medium tracking-[7px] pt-3">Next.Js</p>
            </div>

            <div>
                <img className="w-17 h-17 lg:w-25 lg:h-25 m-auto" src="/united-kingdom.png" alt="englishicon" />
                <p className="text-center text-2xl font-roboto font-medium tracking-[7px] pt-3">English</p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;