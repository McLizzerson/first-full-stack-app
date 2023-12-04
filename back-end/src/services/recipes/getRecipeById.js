import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../utils/notFoundError.js";

const getRecipeById = async (id) => {
  const prisma = new PrismaClient();

  const uniqueRecipe = await prisma.recipe.findUnique({
    where: {
      id: id,
    },
  });
  if (!uniqueRecipe) {
    throw new NotFoundError("recipe", id);
  }

  return uniqueRecipe;
};

export default getRecipeById;
