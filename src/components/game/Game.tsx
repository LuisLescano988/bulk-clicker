import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./Game.css";
import { oneSecondAlert } from "../../utils/alerts";

type GameProps = {
  secondsToClick: number;
}

function Game({secondsToClick}: GameProps) {
  let highestScoreFromLocalStorage = Number(localStorage.getItem('highestScore')) || 0;

  const [count, setCount] = useState<number>(0);
  const [active, setActive] = useState<boolean>(false);
  const [secsLeft, setSecsLeft] = useState<number>(secondsToClick);
  const [highestScore, setHighestScore] = useState<number>(highestScoreFromLocalStorage);


  const handleStart = () => {
    setCount(0);
    setSecsLeft(secondsToClick);
    oneSecondAlert('Preparados')
    .then(() => oneSecondAlert('Listos'))
    .then(() => oneSecondAlert('Ya!'))
    .then(() => {
      setActive(true);
    });
  }

  const promptScoreToUser = () => {
    Swal.fire({
      title: `Clickeaste ${count} veces`,
      showConfirmButton: true,
      confirmButtonText: 'Intentar de nuevo',
      confirmButtonColor: 'rgb(66, 185, 2)'
    })
    .then((alert) => {
      alert.isConfirmed && handleStart()
    })
  }

  useEffect(() => {
    if (active == true)
      secsLeft > 0 && setTimeout(() => setSecsLeft(secsLeft - 1), 1000);
    if (secsLeft == 0) {
      setActive(false);
    }
  }, [handleStart]);

  useEffect(() => {
    if(!active && count > 0) { 
      promptScoreToUser();
      if(count > highestScore) {
        localStorage.setItem('highestScore', `${count}`);
        setHighestScore(count);
      }
    }
  }, [active])

  return (
    <div>
      {active ? (
        <>
          <h1>Clickeado {count} veces</h1>
          <div>
            <button className="click-button" onClick={() => setCount((count) => count + 1)}>
              <h3>CLICK</h3>
            </button>
            <p>Te quedan {secsLeft} segundos</p>
          </div>
        </>
      ) : (
        <>
          <h1>Bulk clicker</h1>
          <p>Tienes {secondsToClick} segundos para clickear cuantas veces puedas</p>
          <div>
            <button className="start-button" disabled={active} onClick={handleStart}>
              Empezar
            </button>
          </div>
        </>
      )}
      {highestScore > 0 && (
        <p className="highest-score">
          Puntaje mas alto: {highestScore}
        </p>
      )}
    </div>
  );
}

export default Game;
