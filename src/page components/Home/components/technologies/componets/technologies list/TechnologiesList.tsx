import "./technologiesList.css";

import TechnologiesCart from "../technologies cart/TechnologiesCart.tsx";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export default function TechnologiesList() {

    const technologiesList = [
        {name: "HTML", iconSrc: "https://cdn-icons-png.flaticon.com/128/174/174854.png  "},
        {name: "CSS", iconSrc: "https://cdn-icons-png.flaticon.com/128/732/732190.png"},
        {name: "JS", iconSrc: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png"},
        {name: "TS", iconSrc: "https://cdn-icons-png.flaticon.com/128/5968/5968381.png"},
        {name: "React", iconSrc: "https://cdn-icons-png.flaticon.com/128/15484/15484268.png"},
        {name: "Redux", iconSrc: "https://cdn.iconscout.com/icon/free/png-256/free-redux-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-10-pack-icons-283024.png?f=webp"},
        {name: "MUI", iconSrc: "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9iYjEzYWViNTFjNTQ0MjFhN2E1NTQwYTcxMzI4OTVkYz9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.FnWJxluT5VvnfpnQsm2K2I1GK-k0_NAmWtu3G-u3fE0"},
        {name: "SASS", iconSrc: "https://cdn-icons-png.flaticon.com/128/919/919831.png"},
        {name: "npm", iconSrc: "https://cdn-icons-png.flaticon.com/128/15484/15484297.png"},
        {name: "Vite", iconSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png"},

        {name: "Node", iconSrc: "https://cdn-icons-png.flaticon.com/128/919/919825.png"},
        {name: "Express", iconSrc: "https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png"},
        {name: "SQLite", iconSrc: "https://cdn-icons-png.flaticon.com/128/4248/4248443.png"},
        {name: "MongoDB", iconSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXf-xZMRVO-B6xuN1L9kM39lVwRbVSdHYSA&s"},
        {name: "WebPack", iconSrc: "https://habrastorage.org/webt/k-/tm/2g/k-tm2gvbb_ky6gdrd-tzqrzjkf4.png"},
        {name: "Git", iconSrc: "https://cdn-icons-png.flaticon.com/128/11518/11518876.png"},
        {name: "Github", iconSrc: "https://cdn-icons-png.flaticon.com/128/733/733553.png"},
        {name: "Gitlab", iconSrc: "https://cdn-icons-png.flaticon.com/128/5968/5968853.png"},
        {name: "CI/CD", iconSrc: "https://cdn-icons-png.flaticon.com/128/5687/5687273.png"},
        {name: "Docker", iconSrc: "https://cdn-icons-png.flaticon.com/128/919/919853.png"},
    ];

    interface Technology {
        name: string,
        iconSrc:string,
    }

    const isTheme = useSelector((state:any) => state.isTheme);

    const [actualTheme, setActualTheme] = useState("tecnologiesListDark");

    useEffect(() => {
        if (isTheme === "dark") {
            setActualTheme("tecnologiesListLight");
        } else {
            setActualTheme("tecnologiesListDark");
        }
    }, [isTheme])

    return (
        <>
            <div className={actualTheme}>
                {technologiesList.map((technology:Technology, index:number) => (
                    <div className="technologies" key={index}>
                        <TechnologiesCart technology={technology}/>
                    </div>
                ))}
            </div>
        </>
    )
}