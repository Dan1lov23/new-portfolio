import TechnologiesMain from "../componets/technologies main/TechnologiesMain.tsx";

export default function Technologies({technologiesRef}:{technologiesRef:any}) {
    return (
        <div className="technologiesMain">
            <TechnologiesMain technologiesRef={technologiesRef}/>
        </div>
    )
}