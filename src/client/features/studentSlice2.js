import { createSlice } from "@reduxjs/toolkit";

const mockData = [
  {
    student: true,
    firstName: "Amy",
    lastName: "Winters",
    done: true,
  },
  {
    student: true,
    firstName: "Todrick",
    lastName: "Summer",
    done: true,
  },
  {
    student: false,
    firstName: "Chris",
    lastName: "Spring",
    done: false,
  },
  {
    student: true,
    firstName: "August",
    lastName: "Jones",
    done: false,
  },
]

const studentSlice = createSlice({
  name: 'students',
  initialState: [],
  reducers: {
    addStudent: (state, {payload}) => {
      return state.concat([{student: payload, done: false}])
    }
  }
})

export const {addStudent} = studentSlice.actions

export default studentSlice.reducer