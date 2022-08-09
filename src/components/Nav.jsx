import './Nav.css';
import Header from './Header'
import { NavLink } from 'react-router-dom'
export default function Nav() {
  return (
    <div className='Nav'>
      <Header text={'Aim Hub'}/>
      <NavLink to={'/games'} className={({ isActive }) => isActive ? 'active' : 'null'}>GAMES</NavLink>
    </div>
  );
}
