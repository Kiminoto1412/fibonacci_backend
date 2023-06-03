const express = require("express");
const cors = require("cors");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 8080;
const notFoundMiddleware = require("./middlewares/notFound");

const fibonacciRouter = require("./routes/fibonacciRoutes");

app.use(cors());
app.use(express.json());

app.use("/fibonacci", fibonacciRouter);

app.use(notFoundMiddleware);

app.listen(port, () => console.log(`\n\n\nRunning port ${port}`));

