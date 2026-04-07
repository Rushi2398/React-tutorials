import { useState } from "react"

const App = () => {
  const [num, setNum] = useState({user: "Rushikesh", age: 27})
  const btnClick = () => {
    // setNum(num.age + 1) // this doesn't update on the screen

    //Solution 1
    // const newNum = {...num} //destructuring with arrays
    // newNum.user = 'Sayali'
    // newNum.age++
    // setNum(newNum)

    //Solution 2 - better pattern as previous pattern not safe with async updates
    setNum(prev => ({
      ...prev,
      user: 'Sayali',
      age: prev.age + 1
    }))
  }
  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClick}>Click</button>
    </div>
  )
}

export default App