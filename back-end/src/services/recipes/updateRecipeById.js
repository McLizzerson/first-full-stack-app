// How to incoroporate an update of categories, not sure yet!

import { PrismaClient } from "@prisma/client";

const updateRecipeById = async (id, recipeData) => {
  const prisma = new PrismaClient();
  const { name, description, ingredients, image, source, categories } =
    recipeData;

  const updatedRecipe = await prisma.recipe.updateMany({
    where: {
      id: id,
    },
    data: {
      name,
      description,
      ingredients,
      image,
      source,
      categories,
      //   categories: {
      //     set: categories.map((category) => {
      //       return { name: category };
      //     }),
      //   },
    },
  });

  if (!updatedRecipe || updatedRecipe.count === 0) {
    console.log(`Oh no, recipe with id${id} could not be found`);
  }

  return {
    message: `Recipe with id: ${id}, was updated succesfully!`,
  };
};

export default updateRecipeById;
