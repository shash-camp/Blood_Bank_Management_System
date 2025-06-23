// const express = require("express");
// const dotenv = require("dotenv");
// const colors = require("colors");
// const morgan = require("morgan");
// const cors = require("cors");
// const connectDB = require("./config/db");


// dotenv.config();
// connectDB();
// const app = express();

// // Middlewares
// app.use(express.json());
// app.use(cors());
// app.use(morgan("dev"));

// app.get("/", (req, res) => {
//   res.send("Blood Bank API is Running");
// });
// // Routes
// app.use("/api/v1/test", require("./routes/testRoutes"));
// app.use("/api/v1/auth", require("./routes/authRoutes"));
// app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
// app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
// app.use("/api/v1/admin", require("./routes/adminRoutes"));


// // Optional error handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send({ success: false, message: "Something broke!" });
// });

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(
//     `Node Server Running In ${process.env.DEV_MODE} Mode On Port ${PORT}`.bgBlue.white
//   );
// });

const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");


dotenv.config();
connectDB();
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Blood Bank API is Running");
});
// Routes
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

// Serve static files from the React build
app.use(express.static(path.join(__dirname, "client", "dist")));

// Catch-all route to serve the index.html for any other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});


// Optional error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ success: false, message: "Something broke!" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} Mode On Port ${PORT}`.bgBlue.white
  );
});


