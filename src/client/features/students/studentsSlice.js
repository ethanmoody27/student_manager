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
    addStudent: builder.mutation({
      query: (data) => ({
        url: `/students`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Students"],
    }),
    deleteStudent: builder.mutation({
      query: (id) => ({
        url: `/students/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Students"],
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useGetStudentQuery,
  useAddStudentMutation,
  useDeleteStudentMutation,
} = studentApi;
