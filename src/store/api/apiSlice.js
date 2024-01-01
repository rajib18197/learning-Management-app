import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//   http://localhost:9000/users
//   http://localhost:9000/videos
//   http://localhost:9000/assignments
//   http://localhost:9000/quizzes
//   http://localhost:9000/assignmentMark
//   http://localhost:9000/quizMark

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (newUserData) => ({
        url: "/register",
        body: newUserData,
        method: "POST",
      }),

      onQueryStarted: async (newUserData, { getState, queryFulfilled }) => {
        console.log(getState());
        const data = await queryFulfilled;
        console.log(data);
        localStorage.setItem("user", JSON.stringify(data.data.user));
      },
    }),

    login: builder.mutation({
      query: (user) => ({ url: `/login`, body: user, method: "POST" }),

      onQueryStarted: async (user, { queryFulfilled }) => {
        try {
          const result = await queryFulfilled;
          console.log(result);
          localStorage.setItem("user", JSON.stringify(result.data.user));
        } catch {
          console.error(err);
        }
      },
    }),

    getCurrentUser: builder.query({
      query: (id) => ({ url: `/users/${id}`, method: "GET" }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useGetCurrentUserQuery } =
  apiSlice;

export default apiSlice;
