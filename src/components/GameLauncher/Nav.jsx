import "./Nav.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import profile from "../../assets/profile.png";
import target from "../../assets/target.png";

const buttons = [
  {
    id: 0,
    text: "PROFILE",
    route: "/profile",
    src: profile,
  },
  {
    id: 1,
    text: "GAMES",
    route: "/games",
    src: target,
  },
];

export default function Nav() {
  return (
    <div className="Nav">
      <Header text={"Aim Hub"} />
      {buttons.map((button) => {
        return (
          <Link key={button.id} to={button.route} style={{ textDecoration: "none" }}>
            <NavButton text={button.text} src={button.src} />
          </Link>
        );
      })}
    </div>
  );
}
