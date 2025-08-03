import "./description.css";

import {useEffect, useState} from "react";

export default function Description({isTheme}:{isTheme:string}) {

    const [actualTheme, setActualTheme] = useState("weatherAppProjectPageDescriptionDark");

    useEffect(() => {
        if (isTheme === "light") {
            setActualTheme("weatherAppProjectPageDescriptionDark");
        } else {
            setActualTheme("weatherAppProjectPageDescriptionLight");
        }
    }, [])

    return (
        <>
            <div className={actualTheme}>
                <div className="projectDescription">
                    <p>This is a frontend weather app on React.</p>
                    <p>Application for getting weather forecast by city name.</p>
                    <p>The application has a function for changing the color theme.</p>
                    <p>Frontend: React (tsx), CSS, Fontawesome.</p>
                </div>
                <div className="links">
                    <a>Show project</a>
                    <a>Show project code on GitHub</a>
                </div>
            </div>
        </>
    )
}