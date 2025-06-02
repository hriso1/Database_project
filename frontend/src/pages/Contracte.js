import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "../App.css";

const Contracte = () => {
  const [contracte, setContracte] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8800/contracte");
        setContracte(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="whole-table">
      <h2>Tabelul cu Contracte</h2>
      <table>
        <thead>
          <tr>
            <th>IdContract</th>
            <th>DataInceput</th>
            <th>DataSfarsit</th>
            <th>IdAbonat</th>
            <th>NumarTelefon</th>
          </tr>
        </thead>
        <tbody>
          {contracte.map((contract) => (
            <tr key={contract.IdContract}>
              <td>{contract.IdContract}</td>
              <td>{contract.DataInceput}</td>
              <td>{contract.DataSfarsit}</td>
              <td>{contract.IdAbonat}</td>
              <td>{contract.NumarTelefon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contracte;
