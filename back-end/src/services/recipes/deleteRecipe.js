import { PrismaClient } from "@prisma/client";

const deleteRecipe = async (id) => {
  const prisma = new PrismaClient();

  const deletedRecipe = await prisma.recipe.deleteMany({
    where: {
      id: id,
    },
  });

  if (!deletedRecipe || deletedRecipe.count === 0) {
    console.log(`uh oh, recipe with id ${id} was not found`);
  }

  return id;
};

export default deleteRecipe;
