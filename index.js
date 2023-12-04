import express from "express";
import "dotenv/config";

import recipeRouter from "./back-end/src/routes/recipes.js";
import errorHandler from "./back-end/src/middleware/errorHandler.js";

const app = express();

// Main body of app
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/recipies", recipeRouter);

// Error handling
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is listening on port 3000, yay");
});
