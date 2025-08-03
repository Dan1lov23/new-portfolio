import "./title.css";

import {useEffect, useState} from "react";

export default function Title({isTheme}:{isTheme:string}) {

    const [actualTheme, setActualTheme] = useState("weatherAppProjectPageTitleDark");

    useEffect(() => {
        if (isTheme === "light") {
            setActualTheme("weatherAppProjectPageTitleDark");
        } else {
            setActualTheme("weatherAppProjectPageTitleLight");
        }
    }, [])

    return (
        <>
            <div className={actualTheme}>
                <h1>Weather App</h1>
            </div>
        </>
    )
}
