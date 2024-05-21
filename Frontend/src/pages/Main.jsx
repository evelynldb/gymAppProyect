import { Link, Outlet } from "react-router-dom"
import './Main.css'; 
import "./Nav.css"
import { About, ActivitiesHomeCard } from "../components";

export const Main = () =>{
    return (
      <>
        <div className="nav-container">
          <nav className="navbar">
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <Link to="/muro">Muro</Link>
              </li>
              <li>
                <Link to="/contacto">Contacto</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/actividades">Actividades</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="main-container">
          <main className="main-content">
            <About />
            <ActivitiesHomeCard />
          </main>
        </div>
        <div className="footer-container">
          <footer className="footer">
            <p>&copy; 2024 My Website. All rights reserved.</p>
          </footer>
        </div>
      </>
    );
}