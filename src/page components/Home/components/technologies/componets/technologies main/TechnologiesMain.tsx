import "./technologiesMain.css";

import TechnologiesList from "../technologies list/TechnologiesList.tsx";
import TechnologiesTitle from "../technoogies title/TechnologiesTitle.tsx";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export default function TechnologiesMain({technologiesRef}:{technologiesRef:any}) {

    const isTheme = useSelector((state:any) => state.isTheme);

    const [actualTheme, setActualTheme] = useState("tecnologiesMainDark");

    useEffect(() => {
        if (isTheme === "dark") {
            setActualTheme("tecnologiesMainLight");
        } else {
            setActualTheme("tecnologiesMainDark");
        }
    }, [isTheme])

    return (
        <>
            <div className={actualTheme} ref={technologiesRef}>
                <TechnologiesTitle />
                <TechnologiesList/>
            </div>
        </>
    )
}