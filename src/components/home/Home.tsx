import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./Home.css";

function Home() {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);
  const [secsLeft, setSecsLeft] = useState(2);
  const scores = [0];

  const changeActive = () => {
    setActive(!active);
  };

  function handleStart() {
    Swal.fire({
      title: "Preparados",
      timer: 1000,
      timerProgressBar: true,
      showConfirmButton: false,
    })
      .then(() =>
        Swal.fire({
          title: "Listos",
          timer: 1000,
          timerProgressBar: true,
          showConfirmButton: false,
        })
      )
      .then(() =>
        Swal.fire({
          title: "Ya!",
          timer: 1000,
          timerProgressBar: true,
          showConfirmButton: false,
        })
      )
      .then(() => {
        changeActive();
      });
  }

  useEffect(() => {
    if (active == true)
      secsLeft > 0 && setTimeout(() => setSecsLeft(secsLeft - 1), 1000);
    if (secsLeft == 0) {
      setActive(false);
    }
  }, [handleStart]);

  return (
    <>
      <h1 className="title">Bulk clicker</h1>
      <h4>Tienes 5 seg para clickear cuantas veces puedas</h4>
      <div>
        <button disabled={active || secsLeft <= 0} onClick={handleStart}>
          Start
        </button>
        <button
          disabled={!active}
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <button
          className="restart_button"
          disabled={active}
          onClick={
            () => {
              [...scores,count];
              setSecsLeft(5);
              setActive(false);
              setCount(0);
              console.log(scores);
            }
            // window.location.reload()
          }
        >
          Restart
        </button>
        {scores.map((score) => (
          <a key={score}> <p> {score}</p></a>
        ))}
      </div>
      <h2>{secsLeft}</h2>
    </>
  );
}

export default Home;
