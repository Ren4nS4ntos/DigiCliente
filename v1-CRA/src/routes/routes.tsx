import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Home from "../pages/Home";
import DigimonScreen from "../pages/screen-digimon";
import TamerScreen from "../pages/screen-tamer";
import TelaGeral from "../pages/geral";
import Footer from "../components/project-Components/footer";
import HeaderHome from "../components/home/header";
import HeaderTamer from "../components/Tamer/Header";
import HeaderDigimon from "../components/Digimon/Header";
import HeaderGeral from "../components/geral/header";
import { useState, useEffect } from "react";

export default function AppRotas() {

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
            <Route path="/geral" element={<TelaGeral />} />
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