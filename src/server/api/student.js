const router = require("express").Router();
module.exports = router;

const mockData = [
  {
    id: 1,
    firstname: "Noah",
    lastname: "(1)",
    email: "fullstack",
    imageUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fprofile-icon&psig=AOvVaw3P7ixLZjt0TFm5vrCeafUg&ust=1699467207494000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCODYy_C-soIDFQAAAAAdAAAAABAh",
    gpa: "3.57",
  },
  {
    id: 2,
    firstname: "Olivia",
    lastname: "(2)",
    email: "Gmail",
    imageUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fprofile-icon&psig=AOvVaw3P7ixLZjt0TFm5vrCeafUg&ust=1699467207494000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCODYy_C-soIDFQAAAAAdAAAAABAh",
    gpa: "3.27",
  },
  {
    id: 3,
    firstname: "Henry",
    lastname: "(3)",
    email: "hotmail",
    imageUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fprofile-icon&psig=AOvVaw3P7ixLZjt0TFm5vrCeafUg&ust=1699467207494000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCODYy_C-soIDFQAAAAAdAAAAABAh",
    gpa: "3.33",
  },
  {
    id: 4,
    firstname: "Ella",
    lastname: "(4)",
    email: "yahoo",
    imageUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fprofile-icon&psig=AOvVaw3P7ixLZjt0TFm5vrCeafUg&ust=1699467207494000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCODYy_C-soIDFQAAAAAdAAAAABAh",
    gpa: "3.44",
  },
  {
    id: 5,
    firstname: "Ben",
    lastname: "(5)",
    email: "bring",
    imageUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fprofile-icon&psig=AOvVaw3P7ixLZjt0TFm5vrCeafUg&ust=1699467207494000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCODYy_C-soIDFQAAAAAdAAAAABAh",
    gpa: "3.55",
  },
];

//get all students
router.get("/", async (req, res, next) => {
  try {
    res.send(mockData);
  } catch (err) {
    next(err);
  }
});

//get select single student
router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const result = mockData.find((Student) => Student.id === id);
    res.send(result);
  } catch (err) {
    next(err);
  }
});
