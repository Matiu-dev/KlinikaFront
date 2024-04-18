import logo from "../img/logo.jpg";
import './Navbar.css';

const Navbar = () => {
    return  <nav className="nav">
                
                <ul>
                    <li>
                        <a href="/lista-pacjentow">Przegląd listy pacjentów</a>
                    </li>
                    <li>
                        <a href="/zarzadzanie-wizytami">Zarządzanie wizytami</a>
                    </li>
                    <li>
                        <a href="/karta-pacjenta">Przegląd karty pacjenta</a>
                    </li>
                    <li>
                        <a href="/zarzadzanie-pacjentami">Zarządzanie pacjentami</a>
                    </li>
                    <li>
                        <a href="/kod-pacjenta">Generuj kod pacjenta</a>
                    </li>
                </ul>
            </nav>
}

export default Navbar;

{/* <BrowserRouter>
<Routes>
  <Route path="/" element={<Login />}>
  <Route path="blogs" element={<Login />} />
  <Route path="contact" element={<Login />} />
  <Route path="*" element={<Login />} />
  </Route>
</Routes>
</BrowserRouter> */}