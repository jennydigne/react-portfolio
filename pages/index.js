import { PortfolioContext } from "@/contexts/PortfolioContext";
import { useContext } from "react";
import { FaLinkedinIn, FaGithub, FaRegEnvelope } from "react-icons/fa6";


export default function Home() {

  const { projects, techSkills } = useContext(PortfolioContext);

  return (
    <div className="w-screen">
      <header className="bg-slate-200 w-full h-[70vh] md:h-[90vh] flex justify-center items-center relative">
        <div className="flex flex-col items-center text-center gap-8">
          <h1 className="font-bold text-4xl md:text-5xl">Jenny Digné</h1>
          <p className="text-xl w-4/5 md:w-1/2">Front-end developer student from Stockholm who enjoys turning ideas into reality through code and creating great user experiences</p>
        </div>
      </header>
      <section className="min-h-screen">
        <div className="flex flex-col gap-2 my-10 mx-7">
          <h2 className="text-xl font-semibold text-center mb-3">Technologies I have worked with</h2>
          <ul className="flex flex-wrap gap-8 justify-center">
            {techSkills.map((skill, index) => (
              <li key={index} className="flex flex-col items-center">
                <img src={skill.image} alt={skill.name} className="h-14 w-14 object-contain mb-1" />
                <span className="text-sm font-semibold">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-12 mt-20">
          <h2 className="text-xl font-semibold text-center mb-6">Some of my recent projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mx-8 lg:mx-12 auto-rows-fr">
            {(projects ?? []).map((project, index) => (
              <div key={index} className="shadow-[-1px_-2px_16px_-3px_#adadad] h-full max-h-[400px] rounded-lg overflow-hidden flex flex-col mb-4">
                <img src={project.image} alt={project.name} className="h-1/3 object-cover w-full" />
                <div className="p-4 flex flex-col h-2/3 justify-between">
                  <h3 className="font-semibold text-md mt-1 mb-2">{project.name}</h3>
                  <p className="text-sm mb-4">{project.description}</p>
                  <div className="mt-auto mb-1">
                    <p className="text-xs mb-1"><span className="font-semibold">Tech stack:</span> {project.stack}</p>
                    <div className="flex gap-2">
                      <a className="underline text-xs" href={project.page} target="_blank">View project</a>
                      <a className="underline text-xs" href={project.url} target="_blank">Project repo</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="bg-slate-200 w-full h-20 flex relative bottom-0 items-center justify-around">
        <p className="flex items-center gap-1"><FaRegEnvelope size={20} /><a className="underline" href="mailto:jenny_digne@hotmail.com">E-mail</a></p>
        <p className="flex items-center gap-1"><FaGithub size={20} /><a className="underline" href="https://github.com/jennydigne">Github</a></p>
        <p className="flex items-center gap-1"><FaLinkedinIn size={20} /><a className="underline" href="https://www.linkedin.com/in/jenny-digne/">Linkedin</a></p>
      </footer>
    </div>
  );
}
