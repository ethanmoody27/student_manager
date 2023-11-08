import api from "../../store/api";

const studentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => "/students",
      providesTags: ["Students"],
    }),
    getStudent: builder.query({
      query: (id) => `/students/${id}`,
      providesTags: ["Students"],
    }),
  }),
});

export const { useGetStudentsQuery, useGetStudentQuery } = studentApi;
