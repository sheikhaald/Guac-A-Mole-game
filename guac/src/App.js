import "./App.css";
import { useEffect, useState } from "react";
import Circle from "./components/Circle";
import img1 from "./guac.mole.png";

function App() {
  const [timer, setTimer] = useState(60);
  const [score, setScore] = useState(0);
  const timercount = () => {
    setTimer(Math.floor((timer / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => setTimer((timer) => timer - 1), 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (value) => {
    if (value) {
      setScore(score + 20);
    } else {
      setScore(score - 100);
    }
  };

  const [appear, setAppear] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const randomizeGuac = () => {
    const random = Math.floor(Math.random() * 6);

    const newArray = appear.map((x, index) => {
      if (index == random) {
        return true;
      }
      return false;
    });

    setAppear(newArray);
  };

  useEffect(() => {
    setInterval(() => {
      randomizeGuac();
    }, 1000);
  }, []);

  if (timer <= 0) {
    return (
      <div>
        <h1>GAME OVER: YOUR SCORE IS: {score}</h1>
      </div>
    );
  }
  return (
    <div className="logo">
      {" "}
      <img src={img1} width={"150px"}></img>
      <div className="App">
        <h1>GUAC-A-MOLE</h1>
        <div className="timer">
          <div>
            <h2> timer:</h2>
            {timer}
          </div>
          <div>
            <h2>score:</h2>
            {score}
          </div>
          {/* <button onClick={randomizeGuac}>random</button> */}
          <div className="game">
            <Circle handleClick={handleClick} appear={appear[0]} />
            <Circle handleClick={handleClick} appear={appear[1]} />
            <Circle handleClick={handleClick} appear={appear[2]} />
            <Circle handleClick={handleClick} appear={appear[3]} />
            <Circle handleClick={handleClick} appear={appear[4]} />
            <Circle handleClick={handleClick} appear={appear[5]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
