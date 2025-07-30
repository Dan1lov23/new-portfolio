import "./contactsCart.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export default function ContactsCart({cartLabel, link, icon}:{cartLabel:string, link:string, icon:any}) {

    const isTheme = useSelector((state:any) => state.isTheme);

    const [actualTheme, setActualTheme] = useState("contactCartDark");

    useEffect(() => {
        if (isTheme === "dark") {
            setActualTheme("contactCartLight");
        } else {
            setActualTheme("contactCartDark");
        }
    }, [isTheme])

    return (
        <>
        <div className={actualTheme}>
            <a href={link}>
                <div className="label">
                    <p className="linkServiceName"> {cartLabel}</p>
                    <FontAwesomeIcon icon={icon} fontSize="65px" className="linkServiceIcon"/>
                </div>
            </a>
        </div>
        </>
    )
}