import { PrismaClient } from "@prisma/client";

const getRecipeById = async (id) => {
  const prisma = new PrismaClient();

  const uniqueRecipe = await prisma.recipe.findUnique({
    where: {
      id: id,
    },
  });
  if (!uniqueRecipe) {
    console.log(`Recipe with id ${id} cannot be found!`);
  }

  return uniqueRecipe;
};

export default getRecipeById;
