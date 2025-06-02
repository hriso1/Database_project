import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});
app.listen(8000, () => {
  console.log("Connected to backend!!");
});
app.get("/", (req, res) => {
  res.json("hello this is the backend");
});

///////////// Numere de telefon
app.get("/numere_telefon", (req, res) => {
  const q = "SELECT * FROM numere_telefon";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
///////////// Contracte
app.get("/contracte", (req, res) => {
  const q = "SELECT * FROM contracte";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
///////////// clienti
app.get("/clienti", (req, res) => {
  const q = "SELECT * FROM clienti";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
///////////// Facturi
app.get("/facturi", (req, res) => {
  const q = "SELECT * FROM facturi";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
///////////// Abonamente
app.get("/abonamente", (req, res) => {
  const q = "SELECT * FROM abonamente";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
///////////// Tarife
app.get("/tarife", (req, res) => {
  const q = "SELECT * FROM tarife";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
///////////// cartele
app.get("/cartele", (req, res) => {
  const q = "SELECT * FROM cartele";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
///////////// Servicii
app.get("/servicii", (req, res) => {
  const q = "SELECT * FROM servicii";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
