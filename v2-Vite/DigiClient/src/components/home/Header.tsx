import { Link } from "react-router-dom";
import CardHeader from "../common/CardHeader";

import cover from "../../images/card.jpg";
import title from "../../images/Digimon Masters Logo.png";
import character from "../../images/agumon.png";

export default function HeaderHome() {
    return (
        <div className="w-full h-full flex justify-center items-center pt-14">
            <Link to="/digimon" className="flex flex-col items-center"><CardHeader coverimg={cover} title={title} character={character} />digimon</Link>
            <Link to="/tamer" className="flex flex-col items-center"><CardHeader coverimg={cover} title={title} character={character} />Tamer</Link>
            <Link to="/geral" className="flex flex-col items-center"><CardHeader coverimg={cover} title={title} character={character} />geral</Link>
        </div>
    )
}