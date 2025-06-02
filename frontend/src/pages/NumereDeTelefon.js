import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "../App.css";

const NumereDeTelefon = () => {
  const [numere, setNumere] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8800/numeredetelefon");
        setNumere(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="whole-table">
      <h2>Tabelul cu Numere De Telefon</h2>
      <table>
        <thead>
          <tr>
            <th>NumarTelefon</th>
            <th>IdAbonat</th>
            <th>IdAbonament</th>
            <th>IdPrepay</th>
          </tr>
        </thead>
        <tbody>
          {numere.map((numar) => (
            <tr key={numar.NumarTelefon}>
              <td>{numar.NumarTelefon}</td>
              <td>{numar.IdAbonat}</td>
              <td>{numar.IdAbonament}</td>
              <td>{numar.IdPrepay}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NumereDeTelefon;
