import React from "react";
import "./index.css";
import { Square } from "./components/Square";

const [up, down, left, right] = [-3, +3, -1, +1];
const items = [
  { id: 1, moves: [down, right] },
  { id: 2, moves: [down, right, left] },
  { id: 3, moves: [down, left] },
  { id: 4, moves: [up, down, right] },
  { id: 5, moves: [up, down, right, left] },
  { id: 6, moves: [up, down, left] },
  { id: 7, moves: [up, right] },
  { id: 8, moves: [up, right, left] },
  { id: 9, moves: [up, left] },
];

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

function App() {
  const [end, setEnd] = React.useState(getRandomInt(1, 10));
  return (
    <div className="body">
      <div className="container">
        {items.map((el) => {
          return <Square id={el.id} />;
        })}
      </div>
      <button
        onClick={(e) => {
          setEnd(getRandomInt(1, 10));
        }}
      >
        START
      </button>
    </div>
  );
}

export default App;
