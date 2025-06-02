import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from "react";
import '../App.css'
const Abonati = () => {
    const [abonati, setAbonati] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get("http://localhost:8800/abonati")
                setAbonati(res.data)
                console.log(res)
            } catch(err){
                console.log(err)
            }
        }
        fetchData();
    },[])

    return (
    <div className='whole-table' >
      <h2>Tabelul cu Abonati</h2>
      <table>
        <thead>
          <tr>
            <th>IdAbonat</th>
            <th>Nume</th>
            <th>Prenume</th>
            <th>CNP</th>
          </tr>
        </thead>
        <tbody>
          {abonati.map((abonat) => (
            <tr key={abonat.IdAbonat}>
              <td>{abonat.IdAbonat}</td>
              <td>{abonat.Nume}</td>
              <td>{abonat.Prenume}</td>
              <td>{abonat.CNP}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
    


export default Abonati;