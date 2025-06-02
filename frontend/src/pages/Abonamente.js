import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "../App.css";
const Abonamente = () => {
  const [abonamente, setAbonamente] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8800/abonamente");
        setAbonamente(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="whole-table">
      <h2>Tabelul cu Abonamente</h2>
      <table>
        <thead>
          <tr>
            <th>IdAbonament</th>
            <th>TipAbonament</th>
            <th>Cost</th>
            <th>IdServiciu</th>
            <th>IdTarif</th>
          </tr>
        </thead>
        <tbody>
          {abonamente.map((abonament) => (
            <tr key={abonament.IdSbonament}>
              <td>{abonament.IdAbonament}</td>
              <td>{abonament.TipAbonament}</td>
              <td>{abonament.Cost}</td>
              <td>{abonament.IdServiciu}</td>
              <td>{abonament.IdTarif}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Abonamente;
