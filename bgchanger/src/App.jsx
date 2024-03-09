import { useState } from "react"
function App() {
  const [color,setColor] = useState("olive")
  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            <button className="shadow-lg outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
            <button className="shadow-lg outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"Green"}} onClick={()=>setColor("green")}>Green</button>
            <button className="shadow-lg outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"Blue"}} onClick={()=>setColor("blue")}>Blue</button>
            <button className="shadow-lg outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>Purple</button>
            <button className="shadow-lg outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"Yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
