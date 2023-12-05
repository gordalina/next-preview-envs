const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const todos = [
  {
    title: "Buy groceries",
  },
  {
    title: "Walk the dog",
  },
  {
    title: "Do laundry",
  },
];

prisma.todo
  .createMany({ data: todos })
  .then(() => console.log("Seeded database"));
