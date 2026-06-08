import { ArrowBigUpDash } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
function Footer() {

    return(
        <footer id='footer' className="bg-[#1A1A1A]">
            <div className='flex justify-center pt-5 text-white '>
                
                    <div className='flex flex-col items-center gap-2'>
                        <a href="#">
                            <div className='flex flex-col items-center '>
                                <ArrowBigUpDash size={15}/>
                                <p className='text-[0.8em] font-roboto'>BACK TO TOP</p>
                            </div>
                        </a>
                            <div className='flex items-center gap-5 mt-5'>
                                <a href="https://www.linkedin.com/in/gabriel-martins-45780539a/" target='_blank' className='lg:hover:text-red-500 lg:hover:scale-110 transition-all duration-300'>
                                    <FaLinkedin className="size-5 lg:size-7" />
                                </a>
                                
                                    <a href="https://github.com/GabrielMT-01" target='_blank' className='lg:hover:text-red-500 lg:hover:scale-110 transition-all duration-300'>
                                        <FaGithub className='size-5 lg:size-7'/>
                                    </a>
                            </div>
                            <p>@2026 Gabriel Martins All Rights Reserved.</p>
                    </div>
                
            </div>
        </footer>
    )
}

export default Footer