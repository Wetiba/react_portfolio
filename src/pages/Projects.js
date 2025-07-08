function Projects() {
    const projects = [
        {
            id: 1,
            title: "eMobility Monitoring System",
            stack: "ReactJS, Django, WebSockets",
            image: "/projects/monitoring.png",
            description: "Real-time tracking for 200+ vehicles with live camera feeds and diagnostics.",
        },
        {
            id: 2,
            title: "SmartSchool Platform",
            stack: "ReactJS, Django REST, Firebase",
            image: "/projects/school.png",
            description: "A full school management system with grading, attendance, and notifications.",
        },
        {
            id: 3,
            title: "AI Resume Matcher",
            stack: "React, Django, OpenAI",
            image: "/projects/ai-resume.png",
            description: "Matches CVs to job descriptions using AI and NLP, increasing hiring efficiency.",
        },
        {
            id: 4,
            title: "CodeMaster LMS",
            stack: "React, Django, Stripe",
            image: "/projects/training.png",
            description: "An online training platform with secure payments and live course tracking.",
        },
    ];

    return (
        <div>
            <h2>Featured Projects</h2>
            {projects.map((proj) => (
                <div key={proj.id} style={{ marginBottom: "2rem" }}>
                    <img src={proj.image} alt={proj.title} width="100%" style={{ maxWidth: "400px" }} />
                    <h3>{proj.title}</h3>
                    <p><strong>Stack:</strong> {proj.stack}</p>
                    <p>{proj.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Projects;
