import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const taskApi = createApi({
  reducerPath: "tasks",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),

  endpoints: (builder) => ({}),
});

export default {} = taskApi;
const studentApi = createApi({
  reducerPath: "students",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),

  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => "/students",
      providesTags: ["Students"],
    }),
    getStudent: builder.query({
      query: (id) => `/students/${id}`,
      providesTags: ["Students"],
    }),
    addStudent: builder.mutation({
      query: (data) => ({
        url: `/student/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Students"],
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useGetStudentQuery,
  useAddStudentMutation,
} = studentApi;
