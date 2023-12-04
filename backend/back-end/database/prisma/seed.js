import recipeData from "../data/recipes.json" assert { type: "json" };
import sourceData from "../data/sources.json" assert { type: "json" };
import categoryData from "../data/categories.json" assert { type: "json" };
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query", "info", "warn", "error"] });

async function main() {
  const { recipes } = recipeData;
  const { sources } = sourceData;
  const { categories } = categoryData;

  for (const recipe of recipes) {
    await prisma.recipe.upsert({
      where: { id: recipe.id },
      update: {},
      create: recipe,
    });
  }

  for (const source of sources) {
    await prisma.source.upsert({
      where: { id: source.id },
      update: {},
      create: source,
    });
  }

  for (const category of categories) {
    await prisma.category.upsert({
      where: { id: category.id },
      update: {},
      create: category,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
