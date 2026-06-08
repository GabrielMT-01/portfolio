function Contact() {
    return (
        <section id="contact" className="bg-[#d7d7d7] ">
                
                <div className="pt-40">
                    <h2 className="flex justify-center items-center border-black border-10 px-4 py-2 m-auto w-[210px] text-black h-[68px]  lg:w-[410px] lg:h-[123px] lg:text-3xl font-montserrat font-bold tracking-[7px]">
                        CONTACT
                    </h2>
                    <p className="text-center pt-4 2xl:text-2xl">
                        Tem um projeto em mente ou quer trabalhar comigo?
                        <br />
                        Estou disponível para freelas, parcerias e oportunidades criativas.
                    </p>
                    <img className="m-auto mt-1 w-[280px] h-[50px] lg:w-[420px] lg:h-[75px]" src="/separatorBlackquality.png" alt="separatorblack"/>

                    <form action="https://formsubmit.co/bielmartsousa4@gmail.com" method="POST">
                        <input type="hidden" name="_captcha" value="false" />

                        <input
                        type="hidden"
                        name="_template"
                        value="table"
                        />

                        <input 
                            type="hidden"
                            name="_next"
                            value="http://localhost:5173" />

                        <div className="flex flex-col items-center gap-10 pt-20 font-bold">
                            <input
                                className="border-l-4 border-b-4 border-black pl-2 w-[70vw] lg:w-[40vw] h-12"
                                type="text"
                                name="name"
                                required
                                placeholder="ENTER YOUR NAME*"
                            />
                            <input
                                className="border-l-4 border-b-4 border-black pl-2 w-[70vw] lg:w-[40vw] h-12"
                                type="email"
                                name="email"
                                required
                                placeholder="ENTER YOUR EMAIL*"
                            />
                            <textarea 
                                className="border-l-4 border-b-4 border-black pl-2 pt-2 w-[70vw] lg:w-[40vw] h-32"
                                placeholder="YOUR MESSAGE*"
                                name="message"
                            />
                            <button type="submit" className="border-l-4 border-r-4 border-black cursor-pointer p-3 w-[45vw] lg:w-[10vw] mb-10 lg:hover:border-red-500 lg:hover:-translate-y-1 lg:hover:translate-x-1 transition-all duration-300">SUBMIT</button>
                        </div>
                    </form>
                </div>
                

        </section>
    )
}

export default Contact