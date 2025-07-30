import "./header.css";

import ThemeSwitch from "../theme switch/ThemeSwitch.tsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import {useSelector} from "react-redux";

import {useState, useEffect} from "react";

interface HeaderProps {
    aboutMeRef: any,
    technologiesRef: any,
    projectsRef: any,
    contactsRef:any,
}

export default function Header({ aboutMeRef, technologiesRef, projectsRef, contactsRef} : HeaderProps) {

    const scrollToTarget = (targetRef: React.RefObject<HTMLElement>) => {
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const isTheme = useSelector((state:any) => state.isTheme);

    const [actualTheme, setActualTheme] = useState("headerDark");

    useEffect(() => {
        if (isTheme === "dark") {
            setActualTheme("headerLight");
        } else {
            setActualTheme("headerDark");
        }
    }, [isTheme])

    return (
        <div className={actualTheme}>
            <div className="logo">
                <p>
                    <FontAwesomeIcon icon={faCode} />
                </p>
            </div>
            <div className="links">
                <div className="link">
                    <p onClick={() => scrollToTarget(aboutMeRef)}>About me</p>
                </div>
                <div className="link">
                    <p onClick={() => scrollToTarget(technologiesRef)}>Technologies</p>
                </div>
                <div className="link">
                    <p onClick={() => scrollToTarget(projectsRef)}>Projects</p>
                </div>
                <div className="link">
                    <p onClick={() => scrollToTarget(contactsRef)}>Contacts</p>
                </div>
            </div>
            <div className="themeSwitch">
                <ThemeSwitch />
            </div>
        </div>
    );
}
