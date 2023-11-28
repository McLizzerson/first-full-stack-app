import express from "express";

import getRecipes from "../services/recipes/getRecipes.js";
import getRecipeById from "../services/recipes/getRecipeById.js";
import createRecipe from "../services/recipes/createRecipe.js";

const recipeRouter = express.Router();

recipeRouter.get("/", async (req, res, next) => {
  try {
    const recipies = await getRecipes();
    res.status(200).json(recipies);
  } catch (error) {
    next(error);
  }
});

recipeRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const recipe = await getRecipeById(id);
    res.status(200).json(recipe);
  } catch (error) {
    next(error);
  }
});

recipeRouter.post("/", async (req, res, next) => {
  try {
    const { name, description, ingredients, image, source, category } =
      req.body;
    const recipeData = {
      name,
      description,
      ingredients,
      image,
      source,
      category,
    };
    const newRecipe = await createRecipe(recipeData);
    res.status(201).json(newRecipe);
  } catch (error) {
    next(error);
  }
});
export default recipeRouter;
