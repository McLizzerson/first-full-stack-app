import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../utils/notFoundError.js";

const deleteRecipe = async (id) => {
  const prisma = new PrismaClient();

  const deletedRecipe = await prisma.recipe.deleteMany({
    where: {
      id: id,
    },
  });

  if (!deletedRecipe || deletedRecipe.count === 0) {
    throw new NotFoundError("recipe", id);
  }

  return id;
};

export default deleteRecipe;
