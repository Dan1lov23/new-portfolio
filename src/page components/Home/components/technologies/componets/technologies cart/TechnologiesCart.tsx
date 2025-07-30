import "./technologiesCart.css";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export default function TechnologiesCart({technology}:{technology:any}) {

    const isTheme = useSelector((state:any) => state.isTheme);

    const [actualTheme, setActualTheme] = useState("tecnologiesCartDark");

    useEffect(() => {
        if (isTheme === "dark") {
            setActualTheme("tecnologiesCartLight");
        } else {
            setActualTheme("tecnologiesCartDark");
        }
    }, [isTheme])

    return (
        <>
            <div className={actualTheme}>
                <div className="tech">
                    <img src={technology.iconSrc}/>
                    <p>{technology.name}</p>
                </div>
            </div>
        </>
    )
}