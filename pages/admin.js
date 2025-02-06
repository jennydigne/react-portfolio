import { useState, useContext } from "react";
import { PortfolioContext } from "@/contexts/PortfolioContext";
import Link from "next/link";

export default function Admin() {
  const { projects, setProjects, techSkills, setTechSkills } = useContext(PortfolioContext);

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectImage, setProjectImage] = useState("");
  const [projectUrl, setProjectUrl] = useState("");

  const [skillName, setSkillName] = useState("");
  const [skillImage, setSkillImage] = useState("");

  function handleLogin() {
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
    if (username === "admin" && password === adminPassword) {
      setLoggedIn(true);
    } else {
      alert("Invalid login");
    }
  }

  const logout = () => {
    setLoggedIn(false);
  };

  function handleCreateProject() {
    if (projectName && projectDescription && projectImage && projectUrl) {
      const newProject = {
        name: projectName,
        description: projectDescription,
        image: projectImage,
        url: projectUrl,
      };

      setProjects([...projects, newProject]);
      setProjectName("");
      setProjectDescription("");
      setProjectImage("");
      setProjectUrl("");
    }
  }

  function handleCreateTechSkill() {
    if (skillName && skillImage) {
      const newSkill = {
        name: skillName,
        image: skillImage,
      }

      setTechSkills([...techSkills, newSkill]);
      setSkillName("");
      setSkillImage("");
    }
  }

  function deleteTechSkill(index) {
    const updatedSkills = techSkills.filter((_, i) => i !== index);
    setTechSkills(updatedSkills);
  }

  function updateProject(index, updatedFields) {
    const updatedProjects = projects.map((project, i) => {
      if (i === index) {
        return {
          ...project,
          ...updatedFields,
        };
      }
      return project;
    });
    setProjects(updatedProjects);
  }

  function deleteProject(index) {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  }

  if (!loggedIn) {
    return (
      <div>
        <Link href="/">
          <button className="border border-slate-800 rounded-md px-2 py-1 text-sm text-blue-950 bg-blue-400 hover:bg-blue-600 mt-4 ml-4 active:scale-95">Home</button>
        </Link>
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-4 bg-slate-200 border border-slate-600 rounded-md p-8 md:w-1/4 mt-20">
            <h1 className="font-semibold">Log in to access admin page</h1>
            <div className="flex flex-col gap-2">
              <input className="border border-slate-600 rounded-sm p-1 text-sm" type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
              <input className="border border-slate-600 rounded-sm p-1 text-sm" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="border border-slate-800 rounded-md px-2 py-1 text-sm text-blue-950 max-w-fit bg-blue-400 hover:bg-blue-600 active:scale-95" onClick={handleLogin}>Log in</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen">
      <header className="bg-slate-200 h-48 min-w-screen flex justify-center items-center relative">
        <div className="absolute top-4 left-4 flex gap-4">
          <Link href="/">
            <button className="border border-slate-800 rounded-md px-2 py-1 text-sm text-blue-950 bg-blue-400 hover:bg-blue-600 active:scale-95"> Home</button>
          </Link>
          <button className="border border-slate-800 rounded-md px-2 py-1 text-sm text-blue-950 bg-blue-400 hover:bg-blue-600 active:scale-95" onClick={logout}>Log out</button>
        </div>
        <h1 className="text-2xl font-semibold text-center">Admin page</h1>
      </header>
      <div className="p-10">
        <h2 className="text-lg font-semibold mb-4">Add new project</h2>
        <div className="grid grid-cols-2 md:w-80 gap-2 mb-6">
          <label className="text-sm font-semibold">Project title:</label>
          <input className="border border-slate-600 rounded-sm text-sm p-1"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <label className="text-sm font-semibold">Description:</label>
          <textarea className="border border-slate-600 rounded-sm text-sm p-1"
            type="text"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          />
          <label className="text-sm font-semibold">Image:</label>
          <input className="border border-slate-600 rounded-sm text-sm p-1"
            value={projectImage}
            onChange={(e) => setProjectImage(e.target.value)}
          />
          <label className="text-sm font-semibold">URL:</label>
          <input className="border border-slate-600 rounded-sm text-sm p-1"
            value={projectUrl}
            onChange={(e) => setProjectUrl(e.target.value)}
          />
        </div>
        <button className="border border-slate-800 rounded-md px-2 py-1 text-sm text-green-950 bg-green-400 hover:bg-green-600 active:scale-95" onClick={handleCreateProject}>Add project</button>
      </div>
      <hr />
      <div className="px-10 pb-10">
        <h2 className="text-lg font-semibold mt-8 mb-4">My projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <div className="flex flex-col gap-2 border border-slate-600 rounded-md p-4" key={index}>
              <h3 className="font-semibold">{project.name}</h3>
              <label className="text-sm font-semibold">Title:</label>
              <input
                className="border border-slate-600 rounded-sm text-sm p-1"
                type="text"
                value={project.name}
                onChange={(e) => updateProject(index, { name: e.target.value })}
              />
              <img src={project.image} alt={project.name} className="h-32 object-cover w-full" />
              <label className="text-sm font-semibold">Description:</label>
              <textarea
                className="border border-slate-600 rounded-sm text-sm p-1"
                type="text"
                value={project.description}
                onChange={(e) => updateProject(index, { description: e.target.value })}
              />

              <label className="text-sm font-semibold">URL:</label>
              <input
                className="border border-slate-600 rounded-sm text-xs p-1"
                type="text"
                value={project.url}
                onChange={(e) => updateProject(index, { url: e.target.value })}
              />
              <button
                className="mt-2 px-2 py-1 text-sm max-w-fit border border-slate-800 rounded-md text-red-950 bg-red-400 hover:bg-red-600 active:scale-95"
                onClick={() => deleteProject(index)}
              >Delete project
              </button>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="px-10 pb-10">
        <h2 className="text-lg font-semibold mt-8 mb-4">Add new tech skill</h2>
        <div className="grid grid-cols-2 md:w-80 gap-2 mb-6">
          <label className="text-sm font-semibold">Name:</label>
          <input className="border border-slate-600 rounded-sm text-sm p-1" value={skillName} onChange={(e) => setSkillName(e.target.value)} />
          <label className="text-sm font-semibold">Logo:</label>
          <input className="border border-slate-600 rounded-sm text-sm p-1" value={skillImage} onChange={(e) => setSkillImage(e.target.value)} />
        </div>
        <button className="border border-slate-800 rounded-md px-2 py-1 text-sm text-green-950 bg-green-400 hover:bg-green-600 active:scale-95" onClick={handleCreateTechSkill}>Add skill</button>
      </div>
      <hr />
      <div className="px-10 pb-10 flex flex-col">
        <h2 className="text-lg font-semibold mt-8 mb-4">My tech skills</h2>
        <div className="flex gap-4 flex-wrap mb-8">
          {techSkills.map((skill, index) => (
            <div key={index} className="border border-slate-600 rounded-md p-8 md:p-4 flex flex-col items-center">
              <img src={skill.image} alt={skill.name} className="h-16 w-16 object-contain" />
              <p className="font-semibold">{skill.name}</p>
              <button
                className="mt-2 px-2 py-1 text-sm border border-slate-800 rounded-md text-red-950 bg-red-400 hover:bg-red-600 active:scale-95"
                onClick={() => deleteTechSkill(index)}
              >Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-slate-200 w-full h-20">
      </div>
    </div>
  );
}