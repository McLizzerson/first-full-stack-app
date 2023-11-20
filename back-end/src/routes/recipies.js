import express from "express";

import getRecipes from "../services/recipes/getRecipes.js";

const recipeRouter = express.Router();

recipeRouter.get("/", async (req, res, next) => {
  try {
    const recipies = await getRecipes();
    res.status(200).json(recipies);
  } catch (error) {
    next(error);
  }
});

export default recipeRouter;
