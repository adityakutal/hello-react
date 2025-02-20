import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)
  function countNumber() {
    setCount(count + 1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={countNumber}>Count Number</button>
    </div>
  )
}
export default App;