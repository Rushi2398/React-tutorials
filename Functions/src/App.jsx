import React from 'react'

const App = () => {

  const btnClicked = () => {
    console.log("Button is Clicked")
  }

  const inputChanging = (str) => {
    console.log("User Typing", str)
  }

  const pageScroll = (speed) => {
    console.log("scrolling speed", speed)
  }
  return (
    <div>
      <h1>Hello, Rushikesh</h1>
      <button onClick={btnClicked}>Change User</button>

      <input onChange={(elem)=>{
        inputChanging(elem.target.value)
      }} type='text' placeholder='Enter Name'></input>

      <div onMouseMove={(elem) => {
        console.log(elem.clientY)
      }} className='box'></div>

      <div onWheel={(elem) => {
        pageScroll(elem.deltaY)
      }}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>

    </div>
  )
}

export default App