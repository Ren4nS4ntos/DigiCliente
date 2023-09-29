
import '../../styles/card.css'

export default function CardHeader(props: any) {

  return (
    <div className="card" >
      <div className="wrapper">
        <img className="cover-image" src={props.coverimg}/>
      </div>
      <img className="title" src={props.title}/>
      <img className="character" src={props.chrcter}/>
    </div>
  );
}
