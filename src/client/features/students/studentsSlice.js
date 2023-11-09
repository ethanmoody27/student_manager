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
      invalidatesTags: ["Update"],
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
    updateInfo: builder.mutation({
      query: (data) => ({
        url: `/students/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Students"],
      providesTags: ["Update"],
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useGetStudentQuery,
  useAddStudentMutation,
  useDeleteStudentMutation,
  useUpdateInfoMutation,
} = studentApi;
