import navIcon from "../images/navIcon.png"
import de from "../images/de.png"
import {Link} from "react-router-dom";

export default function Navbar(){
    return(<div className="nav-container">
    
    <Link to="/" sx={{textDecoration: "none"}}>
    <div className="nav-left">
    <img src={navIcon} height={60}/>
    <p style={{marginTop: "20px", fontSize: "20px"}}>Langpie</p>
    </div>
    </Link>
    <div className="nav-right">
    <img src={de} height={40} style={{marginTop: "15px", marginRight: "10px"}}/>
    </div>
    </div>)
}