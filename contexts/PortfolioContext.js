import { useState, createContext, useEffect } from "react";

export const PortfolioContext = createContext();

export default function PortfolioProvider({ children }) {
    const [projects, setProjects] = useState([]);
    const [techSkills, setTechSkills] = useState([]);

    useEffect(() => {
        const savedProjects = localStorage.getItem("projects");
        const savedSkills = localStorage.getItem("techSkills");

        if (savedProjects) {
            setProjects(JSON.parse(savedProjects));
        }
        if (savedSkills) {
            setTechSkills(JSON.parse(savedSkills));
        }

    }, []);

    useEffect(() => {
        localStorage.setItem("projects", JSON.stringify(projects));
        localStorage.setItem("techSkills", JSON.stringify(techSkills));
    }, [projects, techSkills]);

    return (
        <PortfolioContext.Provider value={{ projects, setProjects, techSkills, setTechSkills }}>
            {children}
        </PortfolioContext.Provider>
    )
}


