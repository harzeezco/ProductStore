import { PrismaClient } from '@prisma/client';
import { BEST_SELLING_PRODUCTS } from '../products-data';
const prisma = new PrismaClient();

async function main() {
  try {
    const result = await prisma.product.createMany({
      data: BEST_SELLING_PRODUCTS,
    });

    console.log('Seed successful', result);
  } catch (error) {
    console.log('error during seed', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
