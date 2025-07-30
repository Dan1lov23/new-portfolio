import "./showProjectCodeButton.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export default function ShowProjectCodeButton() {

    const isTheme = useSelector((state:any) => state.isTheme);

    const [actualTheme, setActualTheme] = useState("showProjectCodeButtonDark");

    useEffect(() => {
        if (isTheme === "dark") {
            setActualTheme("showProjectCodeButtonLight");
        } else {
            setActualTheme("showProjectCodeButtonDark");
        }
    }, [isTheme])

    return (
        <>
            <div className={actualTheme}>
                <button>
                    <FontAwesomeIcon icon={faCode} />
                </button>
            </div>
        </>
    )
}