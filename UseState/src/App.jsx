import { useState } from "react"

const App = () => {
  const [value, setValue] = useState(0); //initialValue
  //value - readOnly , setValue - writeOnly
  const [userName, setUserName] = useState('Rushikesh')
  const [users, setUsers] = useState([10,20,30])
  const btnClick = () => {
    setValue(value + 1)
    setUserName('Sayali')
    setUsers([30,40,50])
  }

  const [counter, setCounter] = useState(0);
  const increaseVal = ()=>{
    setCounter(counter + 1)
  }
  const decreaseVal = ()=>{
    setCounter(counter - 1)
  }
  return (
    <div>
      <h1>Value of a is {value}</h1>
      <h1>Value of name is {userName}</h1>
      <h1>{users}</h1>
      <button onClick={btnClick}>Click</button>
      <div>
        <h1>{counter}</h1>
        <button onClick={increaseVal}>Increase</button>
        <button onClick={decreaseVal}>Decrease</button>
      </div>
      
    </div>
  )
}

export default App