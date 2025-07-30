import "./projectsMain.css";

import ProjectsTitle from "../projects title/ProjectsTitle.tsx";
import PasswordManagerProject from "../password manager project/main component/PasswordMangaerProject.tsx"

export default function ProjectsMain() {
    return (
        <>
            <div className="projectsMain">
                <ProjectsTitle/>
                <PasswordManagerProject />
            </div>
        </>
    )
}