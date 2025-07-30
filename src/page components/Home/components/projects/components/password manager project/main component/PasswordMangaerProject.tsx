import "./passwordManagerProject.css";

import Title from "../components/title/Title.tsx";
import Slider from "../../../../../../../UI components/slider/Slider.tsx"
import DescriptionMain from "../components/description main password manager/DescriptionMain.tsx";

export default function PasswordManagerProject() {

    const imgForSlider = [
        {src: "src/page components/Home/components/projects/components/password manager project/imgs/img1.png", description: "password manager"},
        {src: "src/page components/Home/components/projects/components/password manager project/imgs/img2.png", description: "password manager"},
        {src: "src/page components/Home/components/projects/components/password manager project/imgs/img3.png", description: "password manager"},
    ];

    return (
        <>
            <div className="passwordManagerProject">
                <div className="title">
                    <Title />
                    <Slider imgForSlider={imgForSlider} />
                    <DescriptionMain />
                </div>
            </div>
        </>
    )
}