import "./descriptionMain.css";

import DescriptionTitle from "../description title manager/DescriptionTitle.tsx";
import ShowProjectCodeButton from "../../../../../../../../UI components/show code button/ShowProjectCodeButton.tsx";
import ShowProjectButton from "../../../../../../../../UI components/show project button/ShowProjectButton.tsx";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export default function DescriptionMain() {

    const isTheme = useSelector((state:any) => state.isTheme);

    const [actualTheme, setActualTheme] = useState("descriptionMainDark")

    useEffect(() => {
        if (isTheme === "dark") {
            setActualTheme("descriptionMainLight");
        } else {
            setActualTheme("descriptionMainDark");
        }
    }, [isTheme])

    return (
        <>
            <div className={actualTheme}>
                <DescriptionTitle />
                <div className="descriptionMainText">
                    <div className="descriptionStart">
                        <p>This is password manager app.
                        In this application, you can create pass -
                        words, add passwords to your favorites,
                        delete and change them. All information is stored locally in a database on your computer.
                        The frontend of the application is react, using TSX, CSS, redux as a state manager and fontawesome.</p>
                    </div>
                    <div className="stackTitle">
                        <h1>Technology stack</h1>
                    </div>
                    <div className="twoSteps">
                        <div className="step">
                            <h2>Frontend:</h2>
                            <p>React (TSX)</p>
                            <p>CSS</p>
                            <p>Fontawesome</p>
                            <p>Redux</p>
                        </div>
                        <div className="step">
                            <h2>Backend:</h2>
                            <p>Express (JS)</p>
                            <p>BcryptJs</p>
                            <p>JsonWebToken</p>
                            <p>Cors</p>
                            <p>SQLite</p>
                        </div>
                    </div>
                    <div className="linksButtons">
                        <ShowProjectButton/>
                        <ShowProjectCodeButton/>
                    </div>
                </div>
            </div>
        </>
    )
}