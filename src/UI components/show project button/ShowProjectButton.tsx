import "./showProjectButton.css";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export default function ShowProjectButton() {

    const isTheme = useSelector((state:any) => state.isTheme);

    const [actualTheme, setActualTheme] = useState("showProjectButtonDark");

    useEffect(() => {
        if (isTheme === "dark") {
            setActualTheme("showProjectButtonLight");
        } else {
            setActualTheme("showProjectButtonDark");
        }
    }, [isTheme])

    return (
        <>
            <div className={actualTheme}>
                <button>
                    <FontAwesomeIcon icon={faEye} />
                </button>
            </div>
        </>
    )
}