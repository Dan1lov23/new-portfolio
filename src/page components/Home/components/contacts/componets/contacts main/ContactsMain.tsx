import "./contactsMain.css";

import ContactsTitle from "../Contacts title/ContactsTitle.tsx";
import ContactsCart from "../contacts cart/ContactsCart.tsx";

import {faGithub, faLinkedin, faTelegram, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import type {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export default function ContactsMain() {


    const contactsArray = [
        {cartLabel: "github", link: "../", icon: faGithub},
        {cartLabel: "linkedin", link: "../", icon: faLinkedin},
        {cartLabel: "twitter", link: "../", icon: faXTwitter},
        {cartLabel: "telegram", link: "../", icon: faTelegram},
    ];

    interface Contact {
        cartLabel: string,
        link: string,
        icon: IconDefinition,
    }

    const isTheme = useSelector((state:any) => state.isTheme);

    const [actualTheme, setActualTheme] = useState("contactsMainDark");

    useEffect(() => {
        if (isTheme === "dark") {
            setActualTheme("contactsMainLight");
        } else {
            setActualTheme("contactsMainDark");
        }
    }, [isTheme])

    return (
        <>
            <div className={actualTheme}>
                <div className="title">
                    <ContactsTitle />
                </div>
                <div className="contactsList">
                    {contactsArray.map((contact:Contact, index:number) => (
                        <div key={index} className="contact">
                            <ContactsCart cartLabel={contact.cartLabel} link={contact.link} icon={contact.icon} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
