const prisma = require("../prisma");
const mockData = [
  {
    id: 1,
    firstname: "Noah",
    lastname: "Raine",
    email: "Noah2154@gmail.com",
    imageUrl:
      "https://i.kym-cdn.com/photos/images/original/002/673/967/908.jpg",
    gpa: 3.57,
  },
  {
    id: 2,
    firstname: "Olivia",
    lastname: "Lance",
    email: "LanceOOO@yahoo.com",
    imageUrl:
      "https://i.kym-cdn.com/photos/images/original/002/673/966/d10.jpg",
    gpa: 3.27,
  },
  {
    id: 3,
    firstname: "Henry",
    lastname: "Turner",
    email: "Henry95123454@hotmail.com",
    imageUrl:
      "https://i.kym-cdn.com/photos/images/newsfeed/002/673/963/f45.jpg",
    gpa: 3.33,
  },
  {
    id: 4,
    firstname: "Ella",
    lastname: "Wayne",
    email: "wella4141@gmail.com",
    imageUrl:
      "https://i.kym-cdn.com/photos/images/original/002/673/969/793.jpg",
    gpa: 3.44,
  },
  {
    id: 5,
    firstname: "Bernie",
    lastname: "Morgan",
    email: "benmorgan124565@outline.com",
    imageUrl:
      "https://i.kym-cdn.com/photos/images/original/002/673/959/f4f.jpg",
    gpa: 3.55,
  },
];

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
