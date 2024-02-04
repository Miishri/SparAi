import {Route, Routes, useLocation} from "react-router-dom";
import LoginPage from "../login/LoginPage.jsx";

import {AnimatePresence} from 'framer-motion';
import InformationForms from "../forms/InformationForms.jsx";

export default function Routers() {
    const location = useLocation()

    return (
        <AnimatePresence mode={"wait"}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<LoginPage />} />
                <Route path="/gettingstarted" element={<InformationForms />}/>
            </Routes>
        </AnimatePresence>
    )
}