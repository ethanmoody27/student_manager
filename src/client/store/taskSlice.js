import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const taskApi = createApi({
  reducerPath: "tasks",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),

  endpoints: (builder) => ({
    addStudent: builder.mutation({
      query: (data) => ({
        url: `/student/`,
        method: "POST",
        body: { data },
      }),
    }),
  }),
});

export default { useAddTaskMutation } = taskApi;
