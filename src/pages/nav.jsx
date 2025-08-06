import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProfileContext } from "../context/profilecontext";

function Navbar(){
  const {name, setName} = useContext(ProfileContext);
  return(
    <nav>
      <Link to={'/'}>Home</Link> |
      <Link to={'/cat'}>Cat</Link> |
      <Link to={'/counter'}>Counter</Link> |
      <Link to={'/contact'}>Contact</Link> |
      <Link to={'/about'}> About</Link> |
      <Link to={'/profile'}>Profile</Link>
      <span style={{marginLeft:'30px'}}>{name}</span>
    </nav>)
}

export default Navbar;