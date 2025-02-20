import { useState } from "react";

function App() {
  const [number, setNumber] = useState("")
  function checkevenorodd() {
    if(Number(number) % 2==0)
    {
      setNumber(number + " is even")
    }
    else{
      setNumber(number + " is odd")

    }
  }
  return (
    <div>
      <input type="text" onChange={(e)=>{setNumber(e.target.value)}}/>
      <button onClick={checkevenorodd}>Change the number even or odd</button>
      <div>
        {number}
      </div>
    </div>
  )
}
export default App;