import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "../App.css";

const Facturi = () => {
  const [facturi, setFacturi] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8800/facturi");
        setFacturi(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="whole-table">
      <h2>Tabelul cu Facturi</h2>
      <table>
        <thead>
          <tr>
            <th>IdFactura</th>
            <th>DataFacturare</th>
            <th>DataScadenta</th>
            <th>TotalPlata</th>
            <th>IdAbonat</th>
          </tr>
        </thead>
        <tbody>
          {facturi.map((factura) => (
            <tr key={factura.IdFactura}>
              <td>{factura.IdFactura}</td>
              <td>{factura.DataFacturare}</td>
              <td>{factura.DataScadenta}</td>
              <td>{factura.TotalPlata}</td>
              <td>{factura.IdAbonat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Facturi;
