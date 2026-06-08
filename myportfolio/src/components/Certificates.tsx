import { FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

function Certificates() {

    return(
        <section className="bg-[#d7d7d7] pt-10">
            <h2 className="flex justify-center items-center  border-black border-10 p-5 m-auto w-[250px] text-black h-[68px] font-montserrat font-extrabold tracking-[7px] lg:w-[410px] lg:h-[123px] lg:text-3xl">
                CERTIFICATES
            </h2>
            <img className="m-auto mt-10 w-[280px] h-[50px] lg:w-[380px] lg:h-[65px]" src="/separatorBlackquality.png" alt="separatorblack"/>

            <div className="grid grid-cols-1 sm:grid-cols-2 pt-10 gap-15 place-items-center 2xl:grid-cols-4 min-[2200px]:pt-40">
          
          
          <div className="flex flex-col items-center">
            <FaHtml5 className="w-20 h-20 lg:w-35 lg:h-35" color="orange" />
            <p className="text-center text-2xl font-roboto font-medium tracking-[7px] pt-3">HTML5</p>
            <a className="border-2 rounded-md px-10 mt-3 px-2 text-[1.2em] lg:text-2xl lg:hover:border-red-500 lg:hover:-translate-y-1 lg:hover:translate-x-1 transition-all duration-300" target="_blank" href="https://www.cursoemvideo.com/certificates/certificado/?course_id=235264&cert-nonce=a7130a2f1b">View</a>
          </div>
          
          <div className="flex flex-col items-center">
            <FaCss3Alt className="w-20 h-20 lg:w-35 lg:h-35" color="#2965F1" />
            <p className="text-center text-2xl font-roboto font-medium tracking-[7px] pt-3">CSS3</p>
            <a className="border-2 rounded-md px-10 mt-3 px-2 text-[1.2em] lg:text-2xl lg:hover:border-red-500 lg:hover:-translate-y-1 lg:hover:translate-x-1 transition-all duration-300" target="_blank" href="https://www.cursoemvideo.com/certificates/certificado/?course_id=235264&cert-nonce=a7130a2f1b">View</a>
          </div>
          
          <div className="flex flex-col items-center">
            <SiJavascript className="w-20 h-20 lg:w-35 lg:h-35" color="#F7E018" />
            <p className="text-center text-2xl font-roboto font-medium tracking-[7px] pt-3">JavaScript</p>
            <a className="border-2 rounded-md px-10 mt-3 px-2 text-[1.2em] lg:text-2xl lg:hover:border-red-500 lg:hover:-translate-y-1 lg:hover:translate-x-1 transition-all duration-300" target="_blank" href="https://www.cursoemvideo.com/certificates/certificado/?course_id=27745&cert-nonce=b6f8a2b0ee">View</a>
          </div>
          
          <div className="flex flex-col items-center">
            <FaGithub className="w-20 h-20 lg:w-35 lg:h-35 m-auto"/>
            <p className="text-center text-2xl font-roboto font-medium tracking-[7px] pt-3">Git/GitHub</p>
            <a className="border-2 rounded-md px-10 mt-3 px-2 text-[1.2em] lg:text-2xl lg:hover:border-red-500 lg:hover:-translate-y-1 lg:hover:translate-x-1 transition-all duration-300" href="">View</a>
          </div>
        </div>
        </section>
    )
}

export default Certificates