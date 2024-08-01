import React, { useState } from 'react'

function App() {
  const [a1, setA1] = useState("")
  const [a2, setA2] = useState("")
  const [a3, setA3] = useState("")
  const [a4, setA4] = useState("")
  const [a5, setA5] = useState("")
  const [a6, setA6] = useState("")
  const [a7, setA7] = useState("")
  const [a8, setA8] = useState("")
  const [a9, setA9] = useState("")
  const [turn, setTurn] = useState(1)
  const block1Fn = () => {
      if (turn == 1 && a1 == "") {
          setA1("X")
          setTurn(2)
      }
      else if (turn == 2 && a1 == "") {
          setA1("O")
          setTurn(1)
      }
  }

  const block2Fn = () => {
      if (turn == 1 && a2 == "") {
          setA2("X")
          setTurn(2)
      }
      else if (turn == 2 && a2 == "") {
          setA2("O")
          setTurn(1)

      }
  }
  const block3Fn = () => {
      if (turn == 1 && a3 == "") {
          setA3("X")
          setTurn(2)
      }
      else if (turn == 2 && a3 == ""){
          setA3("O")
      setTurn(1)
  }
}
  const block4Fn = () => {
      if (turn == 1 && a4 == "") {
          setA4("X")
          setTurn(2)
      }
      else if (turn == 2 && a4 == ""){
          setA4("O")
      setTurn(1)}
  }
  const block5Fn = () => {
      if (turn == 1 && a5 == "") {
          setA5("X")
          setTurn(2)
      }
      else if (turn == 2 && a5 == ""){
          setA5("O")
      setTurn(1)}
  }
  const block6Fn = () => {
      if (turn == 1 && a6 == "") {
          setA6("X")
          setTurn(2)
      }
      else if (turn == 2 && a6 == ""){
          setA6("O")
      setTurn(1)}
  }
  const block7Fn = () => {
      if (turn == 1 && a7 == "") {
          setA7("X")
          setTurn(2)
      }
      else if (turn == 2 && a7 == ""){
          setA7("O")
      setTurn(1)}
  }
  const block8Fn = () => {
      if (turn == 1 && a8 == "") {
          setA8("X")
          setTurn(2)
      }
      else if (turn == 2 && a8 == ""){
          setA8("O")
      setTurn(1)}
  }
  const block9Fn = () => {
      if (turn == 1 && a9 == "") {
          setA9("X")
          setTurn(2)
      }
      else if (turn == 2 && a9 == ""){
          setA9("O")
      setTurn(1)}
  }
  return (
    <div className='background'>
            {a1=="X" && a2=="X" && a3==="X"? setTimeout(()=>{alert("Congratulatin Player 1 won")},100):null}
            {a4=="X" && a5=="X" && a6=="X" ? setTimeout(()=>{alert("Congratulatin player 1 won")},100): null}
            {a7=="X" && a8=="X" && a9=="X" ? setTimeout(()=>{alert("Congratulatin player 1 won")},100):null}
            {a1=="X" && a4=="X" && a7=="X" ? setTimeout(()=>{alert("Congratulatin player 1 won")},100):null}
            {a2=="X" && a5=="X" && a8=="X" ? setTimeout(()=>{alert("Congratulatin player 1 won")},100):null}
            {a3=="X" && a6=="X" && a9=="X" ? setTimeout(()=>{alert("Congratulatin player 1 won")},100):null}
            {a1=="X" && a5=="X" && a9=="X" ? setTimeout(()=>{alert("Congratulatin player 1 won")},100):null}
            {a3=="X" && a5=="X" && a7=="X" ? setTimeout(()=>{alert("Congratulatin player 1 won")},100):null}

            {a1=="O" && a2=="O" && a3=="O" ? setTimeout(()=>{alert("Congratulatin Player 2 won")},100) : null}
            {a4=="O" && a5=="O" && a6=="O" ? setTimeout(()=>{alert("Congratulatin player 2 won")},100): null}
            {a7=="O" && a8=="O" && a9=="O" ? setTimeout(()=>{alert("Congratulatin player 2 won")},100):null}
            {a1=="O" && a4=="O" && a7=="O" ? setTimeout(()=>{alert("Congratulatin player 2 won")},100):null}
            {a2=="O" && a5=="O" && a8=="O" ? setTimeout(()=>{alert("Congratulatin player 2 won")},100):null}
            {a3=="O" && a6=="O" && a9=="O" ? setTimeout(()=>{alert("Congratulatin player 2 won")},100):null}
            {a1=="O" && a5=="O" && a9=="O" ? setTimeout(()=>{alert("Congratulatin player 2 won")},100):null}
            {a3=="O" && a5=="O" && a7=="O" ? setTimeout(()=>{alert("Congratulatin player 2 won")},100):null}


      Turn = {turn}player
      <div className='ttt-board'>
        <div style={{color: a1=="X" ? "red" : "yellow"}} onClick={() => block1Fn()} className='ttt-box'>{a1} </div>
        <div style={{color: a2=="X" ? "red" : "yellow"}} onClick={() => block2Fn()} className='ttt-box'>{a2} </div>
        <div style={{color: a3=="X" ? "red" : "yellow"}} onClick={() => block3Fn()} className='ttt-box'>{a3} </div>
        <div style={{color: a4=="X" ? "red" : "yellow"}} onClick={() => block4Fn()} className='ttt-box'>{a4} </div>
        <div style={{color: a5=="X" ? "red" : "yellow"}} onClick={() => block5Fn()} className='ttt-box'>{a5} </div>
        <div style={{color: a6=="X" ? "red" : "yellow"}} onClick={() => block6Fn()} className='ttt-box'>{a6} </div>
        <div style={{color: a7=="X" ? "red" : "yellow"}} onClick={() => block7Fn()} className='ttt-box'>{a7} </div>
        <div style={{color: a8=="X" ? "red" : "yellow"}} onClick={() => block8Fn()} className='ttt-box'>{a8} </div>
        <div style={{color: a9=="X" ? "red" : "yellow"}} onClick={() => block9Fn()} className='ttt-box'>{a9} </div>
      </div>
      <div className='info'>
      <div className='player'>Player1 = X</div>
      <div className='player'>Player2 = O</div>
      </div>

    </div>
  )
}

export default App
