import {Route, Routes, useLocation} from "react-router-dom";
import LoginPage from "../login/LoginPage.jsx";

import {AnimatePresence} from 'framer-motion';
import InformationForms from "../forms/InformationForms.jsx";
import AssistantBot from "../home/AssistantBot.jsx";
import Dashboard from "../home/Dashboard.jsx";
import RecordDetails from "../forms/RecordDetails.jsx";

export default function Routers() {
    const location = useLocation()

    return (
        <AnimatePresence mode={"wait"}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<LoginPage />} />
                <Route path="/gettingstarted" element={<InformationForms />}/>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/chatbot" element={<AssistantBot />}/>
                <Route path="/record-details" element={<RecordDetails />}/>
            </Routes>
        </AnimatePresence>
    )
}