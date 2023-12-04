// How to incoroporate an update of categories, not sure yet!

import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../utils/notFoundError.js";

const updateRecipeById = async (id, recipeData) => {
  const prisma = new PrismaClient();
  const { name, description, ingredients, image, source, category } =
    recipeData;

  const updatedRecipe = await prisma.recipe.updateMany({
    where: {
      id: id,
    },
    data: {
      name: name,
      description: description,
      ingredients: ingredients,
      image: image,
      source: source,
      category: category,
    },
  });

  if (!updatedRecipe || updatedRecipe.count === 0) {
    throw new NotFoundError("recipe", id);
  }

  return {
    message: `Recipe with id: ${id}, was updated succesfully!`,
  };
};

export default updateRecipeById;
