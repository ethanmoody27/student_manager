const prisma = require("../prisma");

const seed = async () => {
  const studentsCount = 20;

  for (let i = 1; i <= studentsCount; i++) {
    const gpa = parseFloat((Math.random() * 4).toFixed(2));

    const user = await prisma.user.create({
      data: {
        username: `user${i}`,
        password: "your_password",
        student: {
          create: {
            firstName: `FirstName${i}`,
            lastName: `LastName${i}`,
            email: `user${i}@example.com`,
            imageUrl: `https://example.com/image${i}.jpg`,
            gpa,
          },
        },
      },
      include: {
        student: true,
      },
    });

    console.log(`Seeded user with ID: ${user.id} and student with ID: ${user.student.id}`);
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