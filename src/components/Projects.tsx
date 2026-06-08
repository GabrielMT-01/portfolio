
function Projects() {
    return(
        <section id="projects" className="bg-[#1A1A1A] scroll-mt-20">
            
                <div className="pt-20">
                    <h2 className="flex justify-center items-center border-white border-10 px-4 py-2 m-auto w-[210px] text-white h-[68px]  lg:w-[410px] lg:h-[123px] lg:text-3xl font-montserrat font-bold tracking-[7px]">PROJECTS</h2>
                    <img className="m-auto mt-10 w-[180px] h-[30px] lg:w-[330px] lg:h-[55px]" src="/separatorWhitequality.png" alt="separatorwhite"/>
                </div>
            
            <div>
                <h2 className="text-2xl lg:text-4xl text-center pt-30 font-bold tracking-[10px] text-white">KANBAN APP</h2>
                <img className="w-[95%] lg:w-[80%]  m-auto pt-10" src="kanbanimg.jpeg" alt="kanban-img" />
                <p className="max-w-[900px]
                    mx-auto
                    text-center
                    text-lg
                    lg:text-lg
                    lg:w-[60%]
                    text-white
                    font-montserrat
                    leading-relaxed
                    px-6
                    pt-5">Kanban board application built with React, TypeScript and Tailwind CSS.
                <br />Features drag-and-drop task management and responsive design.</p>
                <div className="flex justify-center gap-3 mt-4 flex-wrap">
                    <span className="bg-red-200 text-black px-4 py-2 rounded-full lg:hover:bg-red-500 lg:hover:text-white transition-all duration-300">React</span>
                    <span className="bg-red-200 text-black px-4 py-2 rounded-full lg:hover:bg-red-500 lg:hover:text-white transition-all duration-300">TypeScript</span>
                    <span className="bg-red-200 text-black px-4 py-2 rounded-full lg:hover:bg-red-500 lg:hover:text-white transition-all duration-300">Tailwind</span>
                </div>
                <div className="flex justify-center mt-5 text-white font-bold gap-7">
                    <a className="border-r-4 border-l-4 px-2 text-[1.2em] lg:text-2xl lg:hover:border-red-500 lg:hover:-translate-y-1 lg:hover:translate-x-1 transition-all duration-300" href="https://mykanbanproject.netlify.app" target="_blank">Live Demo</a>

                    <a href="https://github.com/GabrielMT-01/Kanban-Project" className="border-r-4 border-l-4 px-2 text-[1.2em] lg:text-2xl lg:hover:border-red-500 lg:hover:-translate-y-1 lg:hover:translate-x-1 transition-all duration-300" target="_blank">Github</a>
                </div>

                <h2 className="text-2xl lg:text-4xl text-center pt-30 font-bold tracking-[10px] text-white">TO-DO LIST</h2>
                <img className="w-[95%] lg:w-[80%]  m-auto pt-10" src="todo-listimg.jpeg" alt="todolistimg" />
                <p className="max-w-[900px]
                    mx-auto
                    text-center
                    text-lg
                    lg:text-lg
                    lg:w-[60%]
                    text-white
                    font-montserrat
                    leading-relaxed
                    px-6
                    pt-5">To-do list application built with React, TypeScript and Tailwind CSS.
                <br />Features a clean and intuitive interface for managing tasks, drag-and-drop functionality and responsive design.</p>
                <div className="flex justify-center gap-3 mt-4 flex-wrap">
                    <span className="bg-red-200 text-black px-4 py-2 rounded-full lg:hover:bg-red-500 lg:hover:text-white transition-all duration-300">React</span>
                    <span className="bg-red-200 text-black px-4 py-2 rounded-full lg:hover:bg-red-500 lg:hover:text-white transition-all duration-300">TypeScript</span>
                    <span className="bg-red-200 text-black px-4 py-2 rounded-full lg:hover:bg-red-500 lg:hover:text-white transition-all duration-300">Tailwind</span>
                </div>
                <div className="flex justify-center mt-5 pb-10 text-white font-bold gap-7">
                    <a className="border-r-4 border-l-4 px-2 text-[1.2em] lg:text-2xl lg:hover:border-red-500 lg:hover:-translate-y-1 lg:hover:translate-x-1 transition-all duration-300" href="https://gabrieltodolist.netlify.app" target="_blank">Live Demo</a>

                    <a href="https://github.com/GabrielMT-01/todo-list" className="border-r-4 border-l-4 px-2 text-[1.2em] lg:text-2xl lg:hover:border-red-500 lg:hover:-translate-y-1 lg:hover:translate-x-1 transition-all duration-300" target="_blank">Github</a>
                </div>
            </div>
        </section>
    )
}

export default Projects
    