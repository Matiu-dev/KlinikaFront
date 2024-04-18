import Navbar from "./compo/Navbar.tsx";
import {Routes, Route} from "react-router-dom";
import ListaPacjentow from "./compo/ListaPacjentow.tsx";
import ZarzadzanieWizytami from "./compo/ZarzadzanieWizytami.tsx";
import KartaPacjenta from "./compo/KartaPacjenta.tsx";
import ZarzadzaniePacjentami from "./compo/ZarzadzaniePacjentami.tsx";
import KodPacjenta from "./compo/KodPacjenta.tsx";
import Main from "./compo/Main.tsx";

import logo from "./img/logo.jpg";

import './App.css';

function App() {

  let component;

  switch (window.location.pathname) {
    case "/":
      console.log(window.location.pathname);
      component=<Main />;
      break;
    case "/lista-pacjentow":
      component = <ListaPacjentow />;
      break;
    case "/zarzadzanie-wizytami":
      component = <ZarzadzanieWizytami />;
      break;
    case "/karta-pacjenta":
      component = <KartaPacjenta/>;
      break;
    case "/zarzadzanie-pacjentami":
      component = <ZarzadzaniePacjentami />;
      break;
    case "/kod-pacjenta":
      component = <KodPacjenta />;
      break;
  
    default:
      break;
  }
  
  return (
    <div className="App">
      <div class="header">
      <a href="/">
        <img src={logo} class="logo"></img>
      </a>
      <h1>Przychodnia Białystok</h1>
      </div>

      <Navbar/>

      {component}
    </div>

  );

}

export default App;
