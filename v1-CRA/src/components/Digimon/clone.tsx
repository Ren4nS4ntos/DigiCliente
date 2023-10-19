export default function Clonagem(){
    return(
        <main className="flex flex-col bg-gray-900 w-2/4 h-96 rounded-xl text-white ">
            <div className="flex h-1/6 justify-center items-center">
                <p className=" px-52 border-b">Digimon Enchant</p>
            </div>
            <div className="flex flex-row h-3/6 m-2">
                <div className="w-1/2 grid grid-cols-5 border border-blue-600 p-1">
                    <div className="col-span-3 col-start-2">
                        <input className="bg-slate-950" type="text" placeholder="Status Base"  />
                    </div>
                    <div className="col-span-3 col-start-2">
                        <input className="bg-slate-950 text-green-600" type="text" placeholder="Status Clone" />
                    </div>
                    
                    <div className="col-span-5 flex justify-center items-center space-x-2">
                        <div className="">
                            <select className="h-10 w-32 rounded-md text-sm bg-black" >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                                <option value={11}>11</option>
                                <option value={12}>12</option>
                                <option value={13}>13</option>
                                <option value={14}>14</option>
                                <option value={15}>15</option>
                            </select>
                        </div>
                        <div className="">
                            <div className="">
                                <button className="h-10 w-32 rounded-md text-sm bg-blue-900" >Calcular Clone</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="w-1/2 grid grid-cols-2 border-blue-950 border">
                    <div className="col-span-1 flex justify-center items-center">
                        <button className="rounded-sm px-14 h-7 border  border-lime-500 text-green-700">AT</button>
                    </div>
                    <div className="col-span-1 flex justify-center items-center">
                        <button className="rounded-sm px-14 h-7 border  border-gray-500 text-green-700">AT</button>
                    </div>
                    <div className="col-span-1 flex justify-center items-center">
                        <button className="rounded-sm px-14 h-7 border  border-gray-500 text-green-700">AT</button>
                    </div>
                    <div className="col-span-1 flex justify-center items-center">
                        <button className="rounded-sm px-14 h-7 border  border-gray-500 text-green-700">AT</button>
                    </div>
                    <div className="col-span-1 flex justify-center items-center">
                        <button className="rounded-sm px-14 h-7 border  border-gray-500 text-green-700">AT</button>
                    </div>
                    
                </div>
            </div>
            <div className="h-2/6 m-2">
                <div className="bg-black">
                    <p>teste</p>
                </div>
                <div className="bg-red-950">
                    <p>teste</p>
                </div>
            </div>
        </main>
    )
}

/*
<select className="flex justify-center items-center w-28 bg-slate-800 rounded-md" >
                            <option value={"AT"}>AT</option>
                            <option value={"CT"}>CT</option>
                            <option value={"BL"}>BL</option>
                            <option value={"EV"}>EV</option>
                            <option value={"HP"}>HP</option>
                        </select> */

/*<div>
                        
                    </div> */