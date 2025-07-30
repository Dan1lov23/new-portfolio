import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "../../page components/Home/page/Home.tsx"

export default function App() {
    return (
        <>
            <div className="app">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}