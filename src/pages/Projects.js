function Projects() {
    const projects = [
        {
            id: 1,
            title: "eMobility Monitoring System",
            stack: "ReactJS, Django, PostgreSQL, WebSockets",
            description:
                "A real-time vehicle monitoring platform for tracking location, camera feeds, and diagnostics for over 200 cars. Designed scalable backend and responsive UI dashboard.",
        },
        {
            id: 2,
            title: "SmartSchool Management Platform",
            stack: "Django REST, React, Firebase",
            description:
                "An integrated solution for managing school operations – admissions, staff, students, grading and communication. Used JWT auth and API versioning for maintainability.",
        },
        {
            id: 3,
            title: "AI Resume Matcher",
            stack: "React, Django, OpenAI LLMs",
            description:
                "Built an AI-powered tool to match applicant CVs with job descriptions using NLP and large language models. Improved hiring accuracy by over 40%.",
        },
        {
            id: 4,
            title: "CodeMaster Training Portal",
            stack: "React, Django, Stripe",
            description:
                "Developed an e-learning platform for CodeMaster Institute with user dashboards, real-time feedback, and secure payments. Used Django Admin for content control.",
        },
    ];

    return (
        <div>
            <h2>Featured Projects</h2>
            {projects.map((proj) => (
                <div key={proj.id} style={{ marginBottom: "1rem" }}>
                    <h3>{proj.title}</h3>
                    <p><strong>Tech Stack:</strong> {proj.stack}</p>
                    <p>{proj.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Projects;
