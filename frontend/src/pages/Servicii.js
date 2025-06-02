import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "../App.css";

const Servicii = () => {
  const [servicii, setServicii] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8800/servicii");
        setServicii(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="whole-table">
      <h2>Tabelul cu Servicii</h2>
      <table>
        <thead>
          <tr>
            <th>IdServiciu</th>
            <th>MinuteGratuite</th>
            <th>SMSGratuite</th>
            <th>MMSGratuite</th>
            <th>VideoCall</th>
            <th>Roaming</th>
          </tr>
        </thead>
        <tbody>
          {servicii.map((serviciu) => (
            <tr key={serviciu.IdServiciu}>
              <td>{serviciu.IdServiciu}</td>
              <td>{serviciu.MinuteGratuite}</td>
              <td>{serviciu.SMSGratuite}</td>
              <td>{serviciu.MMSGratuite}</td>
              <td>{serviciu.VideoCall}</td>
              <td>{serviciu.Roaming}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Servicii;
