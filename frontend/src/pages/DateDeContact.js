import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "../App.css";

const DateDeContact = () => {
  const [date, setDate] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8800/datedecontact");
        setDate(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="whole-table">
      <h2>Tabelul cu Date de contact</h2>
      <table>
        <thead>
          <tr>
            <th>IdContact</th>
            <th>Adresa</th>
            <th>Email</th>
            <th>NumarTelefon</th>
            <th>IdAbonat</th>
          </tr>
        </thead>
        <tbody>
          {date.map((data) => (
            <tr key={data.IdContact}>
              <td>{data.IdContact}</td>
              <td>{data.Adresa}</td>
              <td>{data.Email}</td>
              <td>{data.NumarTelefon}</td>
              <td>{data.IdAbonat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DateDeContact;
