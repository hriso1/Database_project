import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "../App.css";

const CartelePrepay = () => {
  const [cartele, setCartelePrepay] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8800/carteleprepay");
        setCartelePrepay(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="whole-table">
      <h2>Tabelul cu CartelePrepay</h2>
      <table>
        <thead>
          <tr>
            <th>IdPrepay</th>
            <th>Suma Disponibila</th>
            <th>Valabilitate</th>
            <th>IdServiciu</th>
          </tr>
        </thead>
        <tbody>
          {cartele.map((cartela) => (
            <tr key={cartela.IdPrepay}>
              <td>{cartela.IdPrepay}</td>
              <td>{cartela.SumaDisponibila}</td>
              <td>{cartela.Valabilitate}</td>
              <td>{cartela.IdServiciu}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartelePrepay;
