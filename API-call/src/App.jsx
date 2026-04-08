import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  const getData = async() => {
    // FEtch Example
    // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // console.log(await response.json())

    const {data} = await axios.get('https://picsum.photos/v2/list')
    console.log(data)
    setData(data)
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map((elem, idx) => {
          return <h3 key={idx}>Hello {elem.author} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App