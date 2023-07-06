import { NavLink } from "react-router-dom"
import "./Landing.css"


function Landing() {    
  
    return (
      <>
        <NavLink className="nav_button" to={"/home"}>
        <button>Click to Start</button>
        </NavLink>
        <h2>Prepare to click fast!</h2>
      </>
    )
}

export default Landing