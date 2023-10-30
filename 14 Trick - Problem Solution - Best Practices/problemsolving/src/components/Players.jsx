import { useState } from "react";

const Players = (props) => {
  // eslint-disable-next-line react/prop-types
  const { name } = props;
  const [score, setScore] = useState(0);
  const decrCount = () => {
    setScore((score) => score - 1);
    setScore((score) => score - 1);
  };

  return (
    <div>
      <h3>{name}</h3>
      <div>
        <button onClick={decrCount} title={`Dec by 2 ${decrCount}`}>
          -
        </button>
        <span>{score}</span>
        <button onClick={() => setScore((score) => score + 1)}>+</button>
      </div>
    </div>
  );
};

export default Players;
