import "./projects.css";

import ProjectsMain from "../components/projects main/ProjectsMain.tsx";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export default function Projects({projectsRef}:{projectsRef:any}) {

    const isTheme = useSelector((state:any) => state.isTheme);

    const [actualTheme, setActualTheme] = useState("projectsDark")

    useEffect(() => {
        if (isTheme === "dark") {
            setActualTheme("projectsLight");
        } else {
            setActualTheme("projectsDark");
        }
    }, [isTheme])

    return (
        <>
            <div className={actualTheme}>
                <div ref={projectsRef}>
                    <p className="separator">
                        ____
                    </p>
                </div>
                <ProjectsMain/>
            </div>
        </>
    )
}
