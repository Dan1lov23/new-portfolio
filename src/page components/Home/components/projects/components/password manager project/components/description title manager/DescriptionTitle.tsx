import "./descriptionTitle.css";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export default function DescriptionTitle() {

    const isTheme = useSelector((state:any) => state.isTheme);

    const [actualTheme, setActualTheme] = useState("descriptionTitleDark")

    useEffect(() => {
        if (isTheme === "dark") {
            setActualTheme("descriptionTitleLight");
        } else {
            setActualTheme("descriptionTitleDark");
        }
    }, [isTheme])

    return (
        <>
            <div className={actualTheme}>
                <h1>Description</h1>
            </div>
        </>
    )
}