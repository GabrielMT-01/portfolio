import { ArrowBigUpDash } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
function Footer() {

    return(
        <footer id='footer' className="bg-[#1A1A1A]">
            <div className='flex justify-center pt-5 text-white '>
                <a href="#">
                    <div className='flex flex-col items-center gap-2'>
                        <div className='flex flex-col items-center '>
                            <ArrowBigUpDash size={15}/>
                            <p className='text-[0.8em] font-roboto'>BACK TO TOP</p>
                        </div>
                            <div className='flex items-center gap-5 mt-5'>
                                <a href="https://www.linkedin.com/in/gabriel-martins-45780539a/" target='_blank'>
                                    <FaLinkedin className="size-5 lg:size-7" />
                                </a>
                                
                                    <a href="https://github.com/GabrielMT-01" target='_blank'>
                                        <FaGithub className='size-5 lg:size-7'/>
                                    </a>
                            </div>
                            <p>@2020 Tomasz Gajda All Rights Reserved.</p>
                    </div>
                </a>
            </div>
        </footer>
    )
}

export default Footer