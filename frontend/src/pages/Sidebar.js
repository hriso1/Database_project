import { Link } from 'react-router-dom';
import './Sidebar.css';


function Sidebar() {
return(
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">Abonati</Link>
        </li>
        <li>
          <Link to="/abonamente">Abonamante</Link>
        </li>
        <li>
          <Link to="/carteleprepay">Cartele Prepay</Link>
        </li>
        <li>
          <Link to="/contracte">Contracte</Link>
        </li>
        <li>
          <Link to="/datedecontact">Date de contact</Link>
        </li>
        <li>
          <Link to="/facturi">Facturi</Link>
        </li>
        <li>
          <Link to="/numeredetelefon">Numere de telefon</Link>
        </li>
        <li>
          <Link to="/servicii">Servicii</Link>
        </li>
        <li>
          <Link to="/tarife">Tarife</Link>
        </li>
      </ul>
    </div>
)
}

export default Sidebar