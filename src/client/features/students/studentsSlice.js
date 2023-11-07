import { createSlice } from "@reduxjs/toolkit";
const mockData = [
  {
    firstname: "Student",
    lastname: "(1)",
    email: "fullstack",
    imageUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fprofile-icon&psig=AOvVaw3P7ixLZjt0TFm5vrCeafUg&ust=1699467207494000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCODYy_C-soIDFQAAAAAdAAAAABAh",
    gpa: "3.57",
  },
  {
    firstname: "Student",
    lastname: "(2)",
    email: "Gmail",
    imageUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fprofile-icon&psig=AOvVaw3P7ixLZjt0TFm5vrCeafUg&ust=1699467207494000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCODYy_C-soIDFQAAAAAdAAAAABAh",
    gpa: "3.27",
  },
  {
    firstname: "Student",
    lastname: "(3)",
    email: "hotmail",
    imageUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fprofile-icon&psig=AOvVaw3P7ixLZjt0TFm5vrCeafUg&ust=1699467207494000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCODYy_C-soIDFQAAAAAdAAAAABAh",
    gpa: "3.33",
  },
  {
    firstname: "Student",
    lastname: "(4)",
    email: "yahoo",
    imageUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fprofile-icon&psig=AOvVaw3P7ixLZjt0TFm5vrCeafUg&ust=1699467207494000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCODYy_C-soIDFQAAAAAdAAAAABAh",
    gpa: "3.44",
  },
  {
    firstname: "Student",
    lastname: "(5)",
    email: "bring",
    imageUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fprofile-icon&psig=AOvVaw3P7ixLZjt0TFm5vrCeafUg&ust=1699467207494000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCODYy_C-soIDFQAAAAAdAAAAABAh",
    gpa: "3.55",
  },
];

const studentsSlice = createSlice({
  name: "students",
  initialState: mockData,
  reducers: {
    addStudent: (state, { payload }) => {
      return state.concat([
        { firstname: payload, lastname: payload, email: payload, gpa: payload },
      ]);
    },
  },
});

export const { addStudent } = studentsSlice.actions;
export default studentsSlice.reducer;
