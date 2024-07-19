// Import Prisma Client
import { PrismaClient } from "@prisma/client";

// Initialize Prisma Client
const prisma = new PrismaClient();

/**
 * Run the `npm run seed` to execute this migration
 */
async function main() {
  // Create a new page in the database using Prisma Client
  const pages = await prisma.page.createMany({
    data: [
      {
        title: "Welcome page",
        description: "This is a welcome page for your new website",
      },
      {
        title: "Products page",
        description:
          "This is a page that contains a list of all of your products for sale",
      },
      {
        title: "Blog",
        description:
          "This is a page that contains all of your blog entries, visible to your customers",
      },
    ],
  });

  // Output the email of the newly created page
  console.log(`Created ${pages.count} pages`);
}

// Execute the main function and handle disconnection and errors
main()
  .then(async () => await prisma.$disconnect()) // Disconnect from the database on successful completion
  .catch(async (e) => {
    console.error(e); // Log any errors
    await prisma.$disconnect(); // Ensure disconnection even if an error occurs
    process.exit(1); // Exit the process with an error code
  });
