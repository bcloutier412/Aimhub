import "./Nav.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import profile from '../assets/profile.png'

export default function Nav() {
  return (
    <div className="Nav">
      <Header text={"Aim Hub"} />
      <Link to={"/profile"} style={{ textDecoration: "none" }}>
        <NavButton
          text={"PROFILE"}
          src={profile}
        />
      </Link>
      <Link to={"/games"} style={{ textDecoration: "none" }}>
        <NavButton text={"GAMES"} src="https://cdn-icons-png.flaticon.com/512/39/39736.png"/>
      </Link>
    </div>
  );
}
