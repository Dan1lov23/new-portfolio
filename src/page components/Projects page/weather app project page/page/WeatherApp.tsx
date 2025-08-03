import "./weatherApp.css";

import {useEffect, useState} from "react";

import WeatherAppMain from "../components/weather app main/WeatherAppMain.tsx"

export default function WeatherApp({isTheme}:{isTheme:string}) {

    const [actualTheme, setActualTheme] = useState("weatherAppDark");

    useEffect(() => {
        if (isTheme === "light") {
            setActualTheme("weatherAppDark");
        } else {
            setActualTheme("weatherAppLight");
        }
        console.log(isTheme);
    }, [])

    return (
        <>
            <div className={actualTheme}>
                <WeatherAppMain isTheme={isTheme} />
            </div>
        </>
    )
}