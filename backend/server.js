const express = require("express");
const cors = require("cors");
const { resetDatabase, createElement, getAllElements, getElementById, updateElement, deleteElement } = require("@sorin9125/utils-ac");
const { database, studenti_inscrisi } = require("./config");
const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://127.0.0.1:5500",
    credentials: true,
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Access-Control-Allow-Methods",
        "Access-Control-Request-Headers",
        "Access-Control-Allow-Origin"
    ],
    methods: [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE",
    ]
})
);


app.get("/", (req, res) => {
    res.status(200).send("Succes");
})

app.get("/resetdb", async (req,res) => {
    await resetDatabase(database);
    res.status(200).send("Baza de date resetata cu succes.");
})

app.post("/addstud", async (req,res) => {
    const stud_data = req.body;

    if(!/^[a-zA-Z\s]+$/.test(stud_data.Nume_Complet)){
        return res.status(400).send("Nume invalid.");
    }
    if(!/^[0-9\+]+$/.test(stud_data.Nr_telefon)){
        return res.status(400).send("Numar de telefon invalid.");
    }
    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(stud_data.eMAIL)){
        return res.status(400).send("eMAIL invalid.");
    }
    if(!/^[a-zA-Z\s]+$/.test(stud_data.Universitate)){
        return res.status(400).send("Nume de universitate invalid.");
    }
    if(!/^[a-zA-Z\s]+$/.test(stud_data.Facultate)){
        return res.status(400).send("Nume de facultate invalid.");
    }
    if(typeof stud_data.An_de_Studiu != 'number' || stud_data.An_de_Studiu > 6 || stud_data.An_de_Studiu < 1){
        return res.status(400).send("An de studiu invalid.");
    }

   const Create = await createElement(studenti_inscrisi, stud_data);

    res.status(201).json(Create);
})

app.listen(1234, () => {
    console.log("Server is running on http://localhost:1234");
})
