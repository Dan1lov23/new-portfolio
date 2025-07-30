import "./homeMain.css";

import Header from "../../../../UI components/header/Header.tsx"
import FirstLogo from "../first logo/main component/FirstLogo.tsx";
import Technologies from "../technologies/main component/Technologies.tsx";
import Projects from "../projects/main component/Projects.tsx";
import Contacts from "../contacts/main subcomponent/Contacts.tsx";

import {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";

export default function HomeMain() {

    const aboutMeRef = useRef<HTMLBodyElement>(null);
    const technologiesRef = useRef<HTMLBodyElement>(null);
    const projectsRef = useRef<HTMLBodyElement>(null);
    const contactsRef = useRef<HTMLBodyElement>(null);

    const isTheme = useSelector((state:any) => state.isTheme);

    const [actualTheme, setActualTheme] = useState("homeMainDark");

    useEffect(() => {
        if (isTheme === "dark") {
            setActualTheme("homeMainLight");
        } else {
            setActualTheme("homeMainDark");
        }
    }, [isTheme])

    return (
        <>
            <div className={actualTheme}>
                <div className="header">
                    <Header aboutMeRef={aboutMeRef} technologiesRef={technologiesRef} projectsRef={projectsRef} contactsRef={contactsRef}/>
                </div>
                <div className="firstLogo">
                    <FirstLogo aboutMeRef={aboutMeRef}/>
                </div>
                <div className="technologies">
                    <Technologies technologiesRef={technologiesRef}/>
                </div>
                <div className="projects">
                    <Projects projectsRef={projectsRef}/>
                </div>
                <div className="contacts">
                    <Contacts contactsRef={contactsRef}/>
                </div>
            </div>
        </>
    )
}