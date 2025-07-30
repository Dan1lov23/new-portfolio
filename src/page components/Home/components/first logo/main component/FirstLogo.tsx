import FirstLogoMain from "../components/first logo main/FirstLogoMain.tsx";

export default function FirstLogo({aboutMeRef}:{aboutMeRef:any}) {
    return (
        <>
            <div className="firtsLogo">
                <FirstLogoMain aboutMeRef={aboutMeRef}/>
            </div>
        </>
    )
}