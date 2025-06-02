import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Abonamente from "./pages/Abonamente";
import Abonati from "./pages/Abonati";
import Sidebar from "./pages/Sidebar";
import CartelePrepay from "./pages/CartelePrepay";
import Contracte from "./pages/Contracte"
import DateDeContact from "./pages/DateDeContact";
import Facturi from "./pages/Facturi";
import NumereDeTelefon from "./pages/NumereDeTelefon";
import Servicii from "./pages/Servicii";
import Tarife from "./pages/Tarife";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Abonati />} />
          <Route path="/abonamente" element={<Abonamente />} />
          <Route path="/carteleprepay" element={<CartelePrepay />} />
          <Route path="/contracte" element={<Contracte />} />
          <Route path="/datedecontact" element={<DateDeContact />} />
          <Route path="/facturi" element={<Facturi />} />
          <Route path="/numeredetelefon" element={<NumereDeTelefon />} />
          <Route path="/servicii" element={<Servicii />} />
          <Route path="/tarife" element={<Tarife />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
