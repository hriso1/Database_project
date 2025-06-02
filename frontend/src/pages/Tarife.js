import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "../App.css";

const Tarife = () => {
  const [tarife, setTarife] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8800/tarife");
        setTarife(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="whole-table">
      <h2>Tabelul cu Tarife</h2>
      <table>
        <thead>
          <tr>
            <th>IdTarif</th>
            <th>ApeluriRetea</th>
            <th>ApeluriExtraRetea</th>
            <th>SMSRetea</th>
            <th>SMSExtraRetea</th>
            <th>MMSRetea</th>
            <th>MMSExtraRetea</th>
            <th>TraficIntern</th>
          </tr>
        </thead>
        <tbody>
          {tarife.map((tarif) => (
            <tr key={tarif.IdTarif}>
              <td>{tarif.IdTarif}</td>
              <td>{tarif.ApeluriRetea}</td>
              <td>{tarif.ApeluriExtraRetea}</td>
              <td>{tarif.SMSRetea}</td>
              <td>{tarif.SMSExtraRetea}</td>
              <td>{tarif.MMSRetea}</td>
              <td>{tarif.MMSExtraRetea}</td>
              <td>{tarif.TraficIntern}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tarife;
