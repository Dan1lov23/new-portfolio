import "./slider.css";

import {useEffect, useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux";

export default function Slider({imgForSlider}:{imgForSlider:any}) {

    const [currentImg, setCurrentImg] = useState(imgForSlider[0].src);

    const switchImg = (buttonType:string) => {
        for (let a = 0; a < imgForSlider.length; a++) {
            if (buttonType === "next") {
                if (imgForSlider[a].src === currentImg && a + 1 === imgForSlider.length) {
                    setCurrentImg(imgForSlider[0].src);
                } else if (imgForSlider[a].src === currentImg) {
                    setCurrentImg(imgForSlider[a + 1].src);
                }
            } else if (buttonType === "past") {
                if (imgForSlider[a].src === currentImg && a === 0) {
                    const length = imgForSlider.length - 1;
                    setCurrentImg(imgForSlider[length].src);
                } else if (imgForSlider[a].src === currentImg) {
                    setCurrentImg(imgForSlider[a - 1].src);
                }
            }
        }
    }

    const isTheme = useSelector((state:any) => state.isTheme);

    const [actualTheme, setActualTheme] = useState("sliderDark");

    useEffect(() => {
        if (isTheme === "dark") {
            setActualTheme("sliderLight");
        } else {
            setActualTheme("sliderDark");
        }
    }, [isTheme])

    return (
        <>
            <div className={actualTheme}>
                <div className="imgAndButtons">
                    <div className="arrowButton">
                        <p onClick={() => switchImg("past")}>
                            <FontAwesomeIcon icon={faArrowLeft}/>
                        </p>
                    </div>
                    <div className="img">
                        <img src={currentImg}/>
                    </div>
                    <div className="arrowButton">
                        <p onClick={() => switchImg("next")}>
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </p>
                    </div>
                </div>
                <div className="switchButtonsForMobile">
                    <div className="mobileArrowButtonOne">
                        <p onClick={() => switchImg("past")}>
                            <FontAwesomeIcon icon={faArrowLeft}/>
                        </p>
                    </div>
                    <div className="mobileArrowButtonTwo">
                        <p onClick={() => switchImg("next")}>
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}