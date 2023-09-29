import { useEffect, useState } from "react";
import { Tamers } from "./interfaces/Tamers";
import axios from "axios"


function App() {
  const [data, setData] = useState<Tamers[]>([]);

  useEffect(() => {
    axios.get("https://digiapi2023-u7m5-dev.fl0.io/tamer")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  },[]);

  return (
    <div className="w-full h-full bg-white">
      
    </div>
  );
}

export default App;
     {/* <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}{item.at}</li>
          ))}
        </ul> */}