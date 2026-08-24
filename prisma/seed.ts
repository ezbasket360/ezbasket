import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Sample Product One",
        slug: "sample-product-one",
        description:
          "A placeholder product to test the shop while the real catalog is finalized.",
        price: 9.99,
        imageUrl: null,
        category: "General",
      },
      {
        name: "Sample Product Two",
        slug: "sample-product-two",
        description: "Another placeholder product.",
        price: 14.5,
        imageUrl: null,
        category: "General",
      },
      {
        name: "Sample Product Three",
        slug: "sample-product-three",
        description:
          "A third placeholder product to see the grid layout with multiple items.",
        price: 4.25,
        imageUrl: null,
        category: "General",
      },
    ],
    skipDuplicates: true,
  });
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
