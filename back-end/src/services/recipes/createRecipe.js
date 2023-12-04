import { PrismaClient } from "@prisma/client";

const createRecipe = async (recipeData) => {
  const prisma = new PrismaClient();

  return prisma.recipe.create({
    data: {
      name: recipeData.name,
      description: recipeData.description,
      ingredients: recipeData.ingredients,
      image: recipeData.image,
      source: recipeData.source,
      category: recipeData.category,
    },
  });
};

export default createRecipe;
