# 🎓 Student Enrollment System
### *Backend-focused web application for managing student data*

---

## 📌 Project Overview
This project features a complete student enrollment workflow, integrating a custom frontend interface with a robust backend server. The primary focus is on **server-side data validation** and efficient database management using **Sequelize ORM**.

## 🛠️ Technical Implementation

### 1. Backend API (`server.js`)
Built with **Express.js**, the server handles the following core functionalities:
* **CORS Configuration**: Detailed setup to allow secure asynchronous requests from the frontend origin (`http://127.0.0.1:5500`).
* **Robust Input Validation**: Strict filtering using **Regular Expressions (Regex)** for Full Name, Phone Number, Email, and University/Faculty fields before database entry.
* **REST Endpoints**:
    * `GET /` - Health check for server status.
    * `GET /resetdb` - Resets and synchronizes the database structure.
    * `POST /addstud` - Validates the `req.body` and creates a new enrollment record.

### 2. Database Layer (`config.js`)
Data persistence is managed via **Sequelize** with a **SQLite** dialect:
* **Data Modeling**: Defined the `studenti_inscrisi` model with constraints like `autoIncrement` IDs and `allowNull: false`.
* **Local Storage**: Data is stored locally in a `db.sqlite` file, ensuring a portable and lightweight setup.

### 3. Frontend Integration (`script.js`)
The client-side interface communicates with the API through:
* **Event-Driven Logic**: Captures form data on `submit` and converts it into a JSON object.
* **Fetch API**: Executes `POST` requests, parsing numerical data (`An_de_Studiu`) and providing real-time feedback via browser alerts.

---

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
2. **Start the server:**
   ```bash
   npx nodemon server.js
3.Launch the application:
Open inscriere.html (or your main frontend file) in your browser. If you are using VS Code, it is recommended to use Live Server at http://127.0.0.1:5500.
