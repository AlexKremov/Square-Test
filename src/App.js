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
  ]);
  const [start, setStart] = React.useState(getRandomInt(1, 10));
  const [end, setEnd] = React.useState(start);
  const rows = [];

  return (
    <div className="body">
      <div className="container">
        {items.map((el) => {
          return <Square id={el.id} />;
        })}
      </div>
      <button
        onClick={(e) => {
          setStart(1, 10);
          for (let i = 0; i < 10; i++) {
            let possibleMovies = items[start].moves;
            setEnd(start + Math.floor(Math.random() * possibleMovies.length));
          }
        }}
      >
        <div></div>
        START
      </button>
    </div>
  );
}

export default App;
