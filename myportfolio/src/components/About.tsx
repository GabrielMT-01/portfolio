function About() {

    return(
        <section id="about" className="bg-[#d7d7d7]">
            
            <div className="pt-15 pb-15">
                <h2 className="flex justify-center items-center border-black border-10 px-4 py-2 m-auto w-[210px] text-black h-[68px]  lg:w-[410px] lg:h-[123px] lg:text-3xl font-montserrat font-bold tracking-[7px]">ABOUT ME</h2>
            </div>
                <p className=" max-w-[900px]
                    mx-auto
                    text-center
                    text-lg
                    lg:text-3xl
                    text-gray-700
                    font-montserrat
                    leading-relaxed
                    px-6">
                    I'm a Front-End Developer passionate about creating modern, responsive, and user-friendly interfaces.
                    <br /><br />
                    I enjoy transforming ideas into real projects and continuously improving my skills through hands-on development.
                    <br />
                    <br />

                    Currently, I'm focused on building projects with React, TypeScript, and Tailwind CSS while deepening my knowledge of modern front-end technologies. My goal is to create clean, intuitive, and visually engaging digital experiences.
                    <br />
                    <br />
                    I'm always looking for new challenges, opportunities to grow, and ways to become a better developer every day.
                </p>

                

                <img className="m-auto mt-10 w-[180px] h-[20px] sm:w-[180px] sm:h-[12px] lg:w-[280px] lg:h-[22px]" src="/separatorBlack.png" alt="separatorblack"/>

                
        </section>
    )
}

export default About