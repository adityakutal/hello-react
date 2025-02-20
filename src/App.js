import { useState } from "react";

function App() {
  const [name, setName] = useState("Hello World!")
  function changeMessage() {
    setName("Good Morning")
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeMessage}>Change Message</button>
    </div>
  )
}
export default App;