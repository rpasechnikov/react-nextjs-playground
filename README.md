This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Running the project

- `npm run dev`
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Creating the DB

To create a new DB with Prisma ORM, based on `schema.prisma` and `.env` config.

- `npx prisma migrate dev --name init`

### Seeding the DB

To seed the DB, removing any and all data and re-creating only the data in `prisma/seed.ts`

- `npm run seed`

### Creating new Prisma DB migrations

This is the command that needs to be executed to create a new migration, AFTER the db schema in `schema.prisma` is updated.

- `npx prisma migrate dev --name <name-of-the-migration>`

### To view the DB schema / data either:

- Use `pgAdmin 4` application that comes with PostgreSQL installattion
- Use the `npx prisma studio` to use the web-based DB client

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Libraries used

### Tailwind CSS

https://tailwindcss.com/docs

### Zustand State Management

https://docs.pmnd.rs/zustand/getting-started/introduction

### Ant Design UX library

https://ant.design/components/button

### PostgreSQL DB

https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

### Prisma ORM

Object Relational Mapping tool for PostgreSQL, similar to what Entity Framework is in .NET for SQL Express and LocalDB.

https://www.prisma.io/docs/getting-started/quickstart
