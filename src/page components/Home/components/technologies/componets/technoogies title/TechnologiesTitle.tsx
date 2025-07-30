import "./technologiesTitle.css";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export default function TechnologiesTitle() {

    const isTheme = useSelector((state:any) => state.isTheme);

    const [actualTheme, setActualTheme] = useState("tecnologiesTitleDark");

    useEffect(() => {
        if (isTheme === "dark") {
            setActualTheme("tecnologiesTitleLight");
        } else {
            setActualTheme("tecnologiesTitleDark");
        }
    }, [isTheme])

    return (
        <>
            <div className={actualTheme}>
                <h1>Technologies</h1>
            </div>
        </>
    )
}