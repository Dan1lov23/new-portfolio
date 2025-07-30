import "./contactsTitle.css";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export default function ContactsTitle() {

    const isTheme = useSelector((state:any) => state.isTheme);

    const [actualTheme, setActualTheme] = useState("contactsTitleDark");

    useEffect(() => {
        if (isTheme === "dark") {
            setActualTheme("contactsTitleLight");
        } else {
            setActualTheme("contactsTitleDark");
        }
    }, [isTheme])

    return (
        <>
            <div className={actualTheme}>
                <h1>Contacts</h1>
            </div>
        </>
    )
}