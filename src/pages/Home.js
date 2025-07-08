import { FaReact, FaPython, FaLinkedin, FaGithub } from "react-icons/fa";

function Home() {
    return (
        <div style={{ textAlign: "center" }}>
            <img src="/eric.jpeg" alt="Erick Wetiba Were" width="150" style={{ borderRadius: "50%" }} />
            <h1>Erick Wetiba Were</h1>
            <p>
                <FaReact color="#61DBFB" /> ReactJS | <FaPython color="#306998" /> Django | Full-Stack Dev
            </p>
            <p>
                I’m a Senior Software Engineer with 7+ years of experience building scalable web apps and APIs.
                I lead software teams, mentor devs, and craft enterprise-grade solutions.
            </p>
            <div style={{ fontSize: "1.5rem" }}>
                <a href="https://linkedin.com/in/erickwere" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                </a>{" "}
                <a href="https://github.com/erickwere" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
            </div>
        </div>
    );
}

export default Home;
