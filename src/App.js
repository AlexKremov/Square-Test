import React from "react";
import "./index.css";
import { Square } from "./components/Square";
import { Test } from "./components/Test";

const [up, down, left, right] = [-3, +3, -1, +1];


const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

function App() {
  const [items, setItems] = React.useState([
    { id: 1, moves: [down, right] },
    { id: 2, moves: [down, right, left] },
    { id: 3, moves: [down, left] },
    { id: 4, moves: [up, down, right] },
    { id: 5, moves: [up, down, right, left] },
    { id: 6, moves: [up, down, left] },
    { id: 7, moves: [up, right] },
    { id: 8, moves: [up, right, left] },
    { id: 9, moves: [up, left] },
  ])
  const [end, setEnd] = React.useState(getRandomInt(1, 10));
  const [rows, setRows] = React.useState(items);
  return (
    <div className="body">
      <div className="container">
        {items.map((el) => {
          return <Square id={el.id} />;
        })}
      </div>
      <button
        onClick={(e) => {
          setRows(1, 10);


        }}
      >
        <div>
          {items.map((el) => {
           console.log(el.id)
          })}
        </div>
        START
      </button>
      <div>123</div>
    </div>
  );
}

export default App;
