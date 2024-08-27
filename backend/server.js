const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const { check, validationResult } = require('express-validator');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup2"
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

// Signup endpoint
app.post('/signup', [
    check('name', 'Name is required').notEmpty(),
    check('password', 'Password should be at least 8 characters and include uppercase, lowercase, a number, and a special symbol').matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/)
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const sql = "INSERT INTO login (name, password) VALUES (?)";
    const values = [
        req.body.name,
        req.body.password
    ];

    db.query(sql, [values], (err, data) => {
        if (err) {
            console.error("Signup Error:", err);
            return res.status(500).json("Error");
        }
        return res.status(201).json(data);
    });
});

// Login endpoint
app.post('/login', [
    check('name', 'Name is required').notEmpty(),
    check('password', 'Password should be at least 8 characters and include uppercase, lowercase, a number, and a special symbol').matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/)
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const sql = "SELECT * FROM login WHERE name = ? AND password = ?";
    db.query(sql, [req.body.name, req.body.password], (err, data) => {
        if (err) {
            console.error("Login Error:", err);
            return res.status(500).json("Error");
        }
        if (data.length > 0) {
            return res.json("Success");
        } else {
            return res.status(401).json("Failed");
        }
    });
});

app.listen(4907, () => {
    console.log("Server is listening on port 4907");
});
