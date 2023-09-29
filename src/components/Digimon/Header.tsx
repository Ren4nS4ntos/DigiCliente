import { Link } from "react-router-dom";
import CardHeader from "../project-Components/cardheader";

import cover from "../../images/card.jpg"
import title from "../../images/Digimon Masters Logo.png";
import character from "../../images/agumon.png";

export default function HeaderDigimon(){

    function click(){
      console.log('clicado')
    }
    return(
      <div className="w-full h-full flex justify-center items-center pt-14">
        <button onClick={click}><CardHeader coverimg={cover} title={title} character={character}/></button>
        <button onClick={click}><CardHeader coverimg={cover} title={title} character={character}/></button>
        <button onClick={click}><CardHeader coverimg={cover} title={title} character={character}/></button>
      </div>
    )
}