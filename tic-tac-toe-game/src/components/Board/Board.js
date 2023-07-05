import React, { useState } from 'react'
import Square from '../Square/Square'
import './Board.css'

const Board = () => {
    const [square,setSquare] = useState(Array(9).fill(null))
    const [isX,setIsx] = useState(true)
    const handleClick = (i)=>{
        const newSquares =  square.slice()

        if(square[i]){
            alert("This box is already filled")
            return
        }
        if(Winner){
            return 
        }
        if(isX) {
            newSquares[i] = 'X'
        } else {
            newSquares[i] = 'O'
        }
        setSquare(newSquares)
        setIsx(!isX)
    }
  function winner (square){
    let lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i=0;i<lines.length;i++){
        const [a,b,c] = lines[i]
        if(square[a]&&square[a]===square[b]&&square[a]===square[c]){
            return square[a]
        }
    }
    return null
  }
  const Winner = winner(square)
  return (
    <div className='board'>
        <h1>Winner:  {Winner}</h1>
        <div className="lines">
            <Square value={square[0]} onSquareClick = {()=>handleClick(0)} />
            <Square value={square[1]} onSquareClick = {()=>handleClick(1)} />
            <Square value={square[2]} onSquareClick = {()=>handleClick(2)} />
        </div>
        <div className="lines">
            <Square value={square[3]} onSquareClick = {()=>handleClick(3)} />
            <Square value={square[4]} onSquareClick = {()=>handleClick(4)} />
            <Square value={square[5]} onSquareClick = {()=>handleClick(5)} />
        </div>
        <div className="lines">
            <Square value={square[6]} onSquareClick = {()=>handleClick(6)} />
            <Square value={square[7]} onSquareClick = {()=>handleClick(7)} />
            <Square value={square[8]} onSquareClick = {()=>handleClick(8)} />
        </div>
    </div>
  )
}

export default Board