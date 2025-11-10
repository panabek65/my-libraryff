const express = require("express");
const mongoose = require("mongoose");
const booksRouter = require("./routes/books"); // путь к файлу с маршрутами

const app = express();
app.use(express.json()); // важно для POST-запросов с JSON

mongoose.connect(
  "mongodb+srv://shotoshinju1_db_user:Takahashi1Hana.123@cluster0.czadq8f.mongodb.net/library?retryWrites=true&w=majority"
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// тестовый маршрут
app.get("/", (req, res) => res.send("работает!"));

// подключаем маршрут книг
app.use("/books", booksRouter);  // <-- это должно быть обязательно

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
