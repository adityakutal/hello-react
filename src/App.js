import { useEffect, useState } from "react";

function App() {
  const [input, setInput] = useState("")
  function onInputChange(event) {
    setInput(event.target.value)
  }
  useEffect(() => {
    console.log('input: ', input);

  }, [input])



  return (
    <div>
      <input type="text" onChange={onInputChange} />
      <div>
      </div>
    </div>
  )
}
export default App;