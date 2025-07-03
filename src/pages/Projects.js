import { useState, useEffect } from "react";

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Simulate fetch from API
        setTimeout(() => {
            setProjects([
                { id: 1, title: "React Website" },
                { id: 2, title: "ToDo App" },
                { id: 3, title: "Weather App" },
            ]);
        }, 1000);
    }, []);

    return (
        <div>
            <h2>My Projects</h2>
            {projects.length === 0 ? (
                <p>Loading projects...</p>
            ) : (
                <ul>
                    {projects.map((proj) => (
                        <li key={proj.id}>{proj.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Projects;
