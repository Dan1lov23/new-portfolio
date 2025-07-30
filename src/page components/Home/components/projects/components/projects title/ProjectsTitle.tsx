import "./projectsTitle.css";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export default function ProjectsTitle() {

    const isTheme = useSelector((state:any) => state.isTheme);

    const [actualTheme, setActualTheme] = useState("projectTitleDark")

    useEffect(() => {
        if (isTheme === "dark") {
            setActualTheme("projectTitleLight");
        } else {
            setActualTheme("projectTitleDark");
        }
    }, [isTheme])

    return (
        <>
            <div className={actualTheme}>
                <h1>Projects</h1>
            </div>
        </>
    )
}