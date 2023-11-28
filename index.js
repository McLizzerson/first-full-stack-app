import express from "express";
import "dotenv/config";

import recipeRouter from "./back-end/src/routes/recipes.js";

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/recipies", recipeRouter);

app.listen(3000, () => {
  console.log("Server is listening on port 3000, yay");
});
