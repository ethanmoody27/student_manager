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

/** Seeds the database with a user and some tasks */
const seed = async () => {
  await prisma.user.create({
    data: {
      username: "foo",
      password: "bar",
      tasks: {
        create: [
          { description: "task 1" },
          { description: "task 2" },
          { description: "task 3" },
        ],
      },
    },
  });
  for (const data of mockData) {
    await prisma.student.create({
      data: {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        imageUrl: data.imageUrl,
        gpa: data.gpa,
      },
    });
  }
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
