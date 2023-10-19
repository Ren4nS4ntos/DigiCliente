import CardHeader from "../common/CardHeader.jsx";

import cover from "../../images/card.jpg"
import character from "../../images/agumon.png"
import title from "../../images/Digimon Masters Logo.png";

function HeaderTamer() {
    function click() {
        console.log('clicado')
    }
    return (
        <div className="w-full h-full flex justify-center items-center pt-14">
            <button onClick={click}><CardHeader coverimg={cover} title={title} character={character} /></button>
            <button onClick={click}><CardHeader coverimg={cover} title={title} character={character} /></button>
            <button onClick={click}><CardHeader coverimg={cover} title={title} character={character} /></button>
        </div>
    );
}

export default HeaderTamer;