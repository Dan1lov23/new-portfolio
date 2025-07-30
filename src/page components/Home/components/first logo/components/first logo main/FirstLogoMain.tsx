import "./firstLogoMain.css";

import {motion} from "framer-motion";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode} from "@fortawesome/free-solid-svg-icons";

import {useSelector} from "react-redux";

import {useEffect, useState} from "react";

export default function FirstLogoMain({aboutMeRef}:{aboutMeRef:any}) {

    const isTheme = useSelector((state:any) => state.isTheme);

    const [actualTheme, setActualTheme] = useState("firstLogoLight")

    useEffect(() => {
        if (isTheme === "dark") {
            setActualTheme("firstLogoLight");
        } else {
            setActualTheme("firstLogoDark");
        }
    }, [isTheme])

    return (
        <>
            <div className={actualTheme} ref={aboutMeRef}>
                <motion.div
                    className="firtsMotionDiv"
                    initial={{ opacity: 0, x: -150 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    style={{
                        width: '100%',
                        height: 710,
                        borderRadius: 10,
                        display: "flex",
                        fontSize: "35px",
                        fontFamily: "PIXEL",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        fontWeight: "bold",
                        textShadow: "2px 2px 4px rgba(100, 100, 100, 100.5)"
                    }}
                >
                    <div className="firstLogo">
                        <div className='title'>
                            <p>Hi there! I'm Svatoslav.</p>
                        </div>
                        <div className="main">
                            <p>a Frontend Engineer. I help startups launch and grow their products.</p>
                        </div>
                        <div className='description'>
                            <p>
                                I am a software engineer with more than four years of experience. Recognized as a practical and effective developer, experienced in leading cross-functional teams in a time-pressured setting to complete projects on schedule and within budget.
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 150 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="secondMotionDiv"
                    style={{
                        width: '100%',
                        height: 710,
                        borderRadius: 10,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        fontWeight: "bold",
                        fontFamily: "PIXEL",
                        textShadow: "2px 2px 4px rgba(100, 100, 100, 100.5)"
                    }}
                >
                    <div className="logoDiv">
                        <p style={{fontSize: "165px"}}>
                            <FontAwesomeIcon icon={faCode}/>
                        </p>
                    </div>
                </motion.div>
            </div>
        </>
    )
}
