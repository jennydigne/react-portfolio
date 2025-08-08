import { useState, createContext, useEffect } from "react";

export const PortfolioContext = createContext();

export default function PortfolioProvider({ children }) {
    const baseProjects = [{
        name: "Radioplayer",
        description: "In this project I created a working radio player by using Sveriges Radio's API to fetch information about the radio channels and playable audio stream urls.",
        url: "https://github.com/jennydigne/radioplayer",
        stack: "HTML, CSS, JS",
        page: "https://radioplayer-chi.vercel.app/"
    },
    {
        name: "Component Library",
        description: "In this project I created a component library with reusable components, such as buttons and cards, in React.",
        url: "https://github.com/jennydigne/component-library",
        stack: "HTML, CSS, JS, React, Vite",
        page: "https://component-library-peach.vercel.app/"
    },
    {
        name: "Todo App",
        description: "In this project I created a todo app in React, where users can add todo items, mark items as done and delete items.",
        url: "https://github.com/jennydigne/react-todoapp",
        stack: "HTML, CSS, JS, React, Vite",
        page: "https://react-todoapp-iota-seven.vercel.app/"
    },
    {
        name: "Quiz Site",
        description: "In this group project my team and I created an interactive quiz site using Context API for global state management.",
        url: "https://github.com/jennydigne/quiz-group-task",
        stack: "HTML, CSS, JS, React, Next.js",
        page: "https://quiz-group-task-xi.vercel.app/quiz"
    },
    {
        name: "React Native Todo App",
        description: "In this project I created a todo app in React Native and Expo, where users can add todo items, mark items as done and delete items.",
        url: "https://github.com/jennydigne/quiz-group-task",
        stack: "JS, React Native, Expo",
    },
    {
        name: "Weather App",
        description: "In this project I created a weather app using React and Next.js, where users can get the local weather or search for a specific city or area.",
        url: "https://github.com/jennydigne/weather-app",
        stack: "JavaScript, CSS, React, Next.js",
        page: "https://weather-app-five-tau-92.vercel.app/"
    }
    ];

    const baseSkills = [
        { name: "HTML", image: "html-logo.svg" },
        { name: "CSS", image: "css-logo.svg" },
        { name: "JavaScript", image: "js-logo.svg" },
        { name: "Tailwind", image: "tailwind-logo.svg" },
        { name: "VS Code", image: "vscode-logo.svg" },
        { name: "GitHub", image: "github-logo.svg" },
        { name: "GitLab", image: "gitlab-logo.svg" },
        { name: "Vite", image: "vite-logo.svg" },
        { name: "Next", image: "next-logo.svg" },
        { name: "React", image: "react-logo.svg" },
        { name: "React Native", image: "react-logo.svg" },
        { name: "Firebase", image: "firebase-logo.svg" }
    ];
    const [projects, setProjects] = useState(baseProjects);
    const [techSkills, setTechSkills] = useState(baseSkills);


    useEffect(() => {
        const savedProjects = localStorage.getItem("projects");
        const savedSkills = localStorage.getItem("techSkills");

        if (savedProjects) {
            const parsed = JSON.parse(savedProjects);
            if (parsed.length >= baseProjects.length) {
                setProjects(parsed);
            } else {
                setProjects(baseProjects);
            }
        }

        if (savedSkills) {
            const parsed = JSON.parse(savedSkills);
            if (parsed.length >= baseSkills.length) {
                setTechSkills(parsed);
            } else {
                setTechSkills(baseSkills);
            }
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


