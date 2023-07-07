import { NavLink } from "react-router-dom"
import "./Landing.css"


function Landing() {    
  
    return (
      <>
        <NavLink className="nav_button" to={"/home"}>
         <button>Go to the game</button>
        </NavLink>
        <h2>Prepare to click fast!</h2>
      </>
    )
}

export default Landing