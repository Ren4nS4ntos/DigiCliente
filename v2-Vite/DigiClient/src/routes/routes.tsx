import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "../pages/Home";
import Main from "../pages/Main";
import Footer from "../components/common/Footer";

import TamerScreen from "../pages/screens/TamerScreen";
import DigimonScreen from "../pages/screens/DigimonScreen";

import HeaderHome from "../components/home/Header";
import HeaderTamer from "../components/tamer/Header";
import HeaderDigimon from "../components/digimon/Header";
import HeaderGeral from "../pages/MainHeader";
import { useState, useEffect } from "react";

export default function CustomRoutes() {

    const [headerPrincipal, SetHeaderPrincipal] = useState<any>(<HeaderHome />)

    useEffect(() => {
        const currentPath = window.location.pathname;

        switch (currentPath) {
            case '/':
                SetHeaderPrincipal(<HeaderHome />);
                break;
            case '/digimon':
                SetHeaderPrincipal(<HeaderDigimon />);
                break;
            case '/tamer':
                SetHeaderPrincipal(<HeaderTamer />);
                break;
            case '/geral':
                SetHeaderPrincipal(<HeaderGeral />);
                break;
            default:
                SetHeaderPrincipal(<HeaderHome />);
        }
    },)

    return (
        <Router>
            <main className="w-full h-screen bg-white">
                <div className="flex absolute left-24 top-1/4"><Link to={"/"}>voltar</Link></div>
                <div className="w-full h-3/6 bg-red-600">{headerPrincipal}</div>
                <div className="w-full h-screen bg-blue-500">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/digimon" element={<DigimonScreen />} />
                        <Route path="/tamer" element={<TamerScreen />} />
                        <Route path="/geral" element={<Main />} />
                    </Routes>
                </div>
                <div className="w-full h-2/6 bg-orange-500">
                    <Footer></Footer>
                </div>
            </main>
        </Router>
    );
}

{
    /*  */
}