// const prisma = require("../prisma");

/** Seeds the database with a user and some tasks */
// const seed = async () => {
//   await prisma.user.create({
//     data: {
//       username: "foo",
//       password: "bar",
//       tasks: {
//         create: [
//           { description: "task 1" },
//           { description: "task 2" },
//           { description: "task 3" },
//         ],
//       },
//     },
//   });
// };

// seed()
//   .then(async () => await prisma.$disconnect())
//   .catch(async (err) => {
//     console.error(err);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

const prisma = require("../prisma");

const seed = async () => {
  const studentsCount = 20;

  for (let i = 1; i <= studentsCount; i++) {
    const gpa = parseFloat((Math.random() * 4).toFixed(2));
    
    const student = await prisma.student.create({
      data: {
        username: `student${i}`,
        password: "your_password",
        information: {
          create: {
            firstName: `FirstName${i}`,
            lastName: `LastName${i}`,
            email: `student${i}@example.com`,
            imageUrl: `https://example.com/image${i}.jpg`,
            gpa,
          },
        },
      },
    });

    console.log(`Seeded student with ID: ${student.id}`);
  }
};

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
