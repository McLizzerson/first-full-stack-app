import { PrismaClient } from "@prisma/client";

const getRecipes = async () => {
  const prisma = new PrismaClient();

  return prisma.recipe.findMany();
};

export default getRecipes;
