import { PortfolioContext } from "@/contexts/PortfolioContext";
import { useContext } from "react";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaRegEnvelope } from "react-icons/fa6";


export default function Home() {

  const { projects, techSkills } = useContext(PortfolioContext);

  return (
    <div className="w-screen">
      <header className="bg-gradient-to-b from-slate-300 via-slate-100 to-slate-300 w-full h-[70vh] md:h-[90vh] flex justify-center items-center relative">
        <Link href="/admin">
          <button className="border border-black rounded-md px-2 py-1 text-sm text-blue-950 bg-blue-400 absolute top-4 left-4 hover:bg-blue-600">Admin</button>
        </Link>
        <div className="flex flex-col items-center text-center gap-8">
          <h1 className="font-bold text-3xl md:text-5xl">Jenny Digné</h1>
          <p className="text-xl w-1/2">Front-end developer student from Stockholm who enjoys turning ideas into reality through code and creating great user experiences</p>
        </div>
      </header>
      <section className="min-h-screen">
        <div className="flex flex-col gap-2 my-10 mx-5">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mx-8 md:mx-28">
            {projects.map((project, index) => (
              <div key={index} className="shadow-[-1px_-2px_16px_-3px_#adadad] rounded-lg overflow-hidden">
                <img src={project.image} alt={project.name} className="h-32 object-cover w-full" />
                <div className="p-3">
                  <h3 className="font-semibold text-sm my-1">{project.name}</h3>
                  <p className="text-xs mb-2">{project.description}</p>
                  <a className="underline text-xs" href={project.url}>View on GitHub</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="bg-slate-200 w-full h-20 flex relative bottom-0 items-center justify-around">
        <p className="flex items-center gap-1"><FaRegEnvelope size={20} /><a className="underline" href="jenny_digne@hotmail.com">E-mail</a></p>
        <p className="flex items-center gap-1"><FaGithub size={20} /><a className="underline" href="https://github.com/jennydigne">Github</a></p>
        <p className="flex items-center gap-1"><FaLinkedinIn size={20} /><a className="underline" href="https://www.linkedin.com/in/jenny-digne/">Linkedin</a></p>
      </footer>
    </div>
  );
}
