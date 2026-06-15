import { PortfolioContext } from "@/contexts/PortfolioContext";
import { useContext } from "react";
import { FaLinkedinIn, FaGithub, FaRegEnvelope } from "react-icons/fa6";

export default function Home() {

  const { projects, techSkills } = useContext(PortfolioContext);

  return (
    <div className="w-screen flex flex-col min-h-screen">
      <header className="bg-gradient-to-br from-slate-600 via-slate-800 to-slate-500 text-slate-100 w-full h-[50vh] flex justify-center items-center relative">
        <div className="flex flex-col items-center text-center gap-8">
          <h1 className="font-bold text-4xl md:text-5xl">Jenny Digné</h1>
          <p className="text-xl w-4/5 md:w-1/2">Frontend developer student from Stockholm who enjoys turning ideas into reality through code and creating great user experiences</p>
        </div>
      </header>
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-4 bg-slate-200 lg:p-5">
        <div className="p-5 md:p-10 lg:col-span-2">
          <h2 className="text-xl font-semibold mb-8 text-center md:text-left">Some of my projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 auto-rows-fr">
            {(projects ?? []).map((project, index) => (
              <div key={index} className="shadow-sm shadow-slate-400 hover:shadow-md hover:shadow-slate-400 transition-shadow h-full max-h-[500px] max-w-sm rounded-lg overflow-hidden flex flex-col mb-4 bg-white">
                <div className="p-4 flex flex-col h-2/3 justify-between">
                  <h3 className="font-semibold text-md mt-1 mb-2">{project.name}</h3>
                  <p className="text-sm mb-4">{project.description}</p>
                  <div className="mt-auto mb-1">
                    <p className="text-xs mb-1"><span className="font-semibold">Tech stack:</span> {project.stack}</p>
                    <div className="flex gap-2">
                      {project.page?.trim() && <a className="underline text-xs" href={project.page} target="_blank">View</a>}
                      <a className="underline text-xs" href={project.url} target="_blank">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col p-10">
          <h2 className="text-xl font-semibold mb-8 text-center md:text-left">Some technologies I've used</h2>
          <ul className="flex justify-center md:justify-start flex-wrap gap-6">
            {techSkills.map((skill, index) => (
              <li key={index} className="flex flex-col items-center w-20 rounded-md py-1 bg-white shadow-sm shadow-slate-400 hover:shadow-md hover:shadow-slate-400 transition-shadow">
                <img src={skill.image} alt={skill.name} className="h-12 w-12 object-contain mb-1" />
                <span className="text-xs font-semibold">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>

      </section>
      <footer className="bg-slate-800 w-full py-8 text-sm text-slate-100">
        <h2 className="text-center font-semibold text-base mb-4">Contact me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <FaRegEnvelope size={18} />
            <a className="hover:underline" href="mailto:jenny_digne@hotmail.com">jenny_digne@hotmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <FaGithub size={18} />
            <a className="hover:underline" href="https://github.com/jennydigne">github.com/jennydigne</a>
          </div>
          <div className="flex items-center gap-2">
            <FaLinkedinIn size={18} />
            <a className="hover:underline" href="https://www.linkedin.com/in/jenny-digne/">linkedin.com/in/jenny-digne</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
