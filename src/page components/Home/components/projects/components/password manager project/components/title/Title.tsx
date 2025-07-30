import "./title.css";

import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export default function Title() {

    const isTheme = useSelector((state:any) => state.isTheme);

    const [actualTheme, setActualTheme] = useState("titleDark");

    useEffect(() => {
        if (isTheme === "dark") {
            setActualTheme("titleLight");
        } else {
            setActualTheme("titleDark");
        }
    }, [isTheme])

    return (
        <>
            <div className={actualTheme}>
                <p>Password Manager</p >
            </div>
        </>
    )
}