import "./weatherAppMain.css";

import {useEffect, useState} from "react";

import Title from "../title/Title.tsx";
import Description from "../description/Description.tsx";
import Slider from "../../../../../UI components/slider/Slider.tsx";

export default function WeatherAppMain({isTheme}:{isTheme:string}) {

    const [actualTheme, setActualTheme] = useState("weatherAppMainLight");

    useEffect(() => {
        if (isTheme === "light") {
            setActualTheme("weatherAppMainDark");
        } else {
            setActualTheme("weatherAppMainLight");
        }
        console.log(isTheme);
    }, [])

    const imgForSlider = [
        {src: "src/page components/Home/components/projects/components/weather app project/imgs/img1.png", description: "password manager"},
        {src: "src/page components/Home/components/projects/components/weather app project/imgs/img2.png", description: "password manager"},
        {src: "src/page components/Home/components/projects/components/weather app project/imgs/img3.png", description: "password manager"},
    ];

    return (
        <>
            <div className={actualTheme}>
                <Title isTheme={isTheme}/>
                <Slider imgForSlider={imgForSlider}/>
                <Description isTheme={isTheme}/>
            </div>
        </>
    )
}