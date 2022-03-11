import express from "express";

const PORT = 5000;
const app = express();

const URL_logger = (req, res, next) => {
  console.log(`Path : ${req.path}`);
  next();
};
const Time_logger = (req, res, next) => {
  const time = new Date().toLocaleDateString();
  console.log(time);
  next();
};
const Security_logger = (req, res, next) => {
  console.log(req.protocol);
  if (req.protocol === "https") {
    console.log("secure");
  } else {
    console.log("insecure");
  }
  next();
};
const Protect_logger = (req, res) => {
  return res.end();
};
app.use(URL_logger);
app.use(Time_logger);
app.use(Security_logger);
app.use("/protected", Protect_logger);

app.get("/", (req, res) => res.send("<h1>Home</h1>"));
app.get("/protected", (req, res) => res.send("<h1>Protected</h1>"));

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);
app.listen(PORT, handleListening);
