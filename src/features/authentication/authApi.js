import apiSlice from "../../store/api/apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (newUser) => ({
        url: "/register",
        method: "POST",
        body: newUser,
      }),

      onQueryStarted: async (newUser, { queryFulfilled }) => {
        try {
          console.log(getState());
          const data = await queryFulfilled;
          console.log(data);
          localStorage.setItem("user", JSON.stringify(data.data.user));
        } catch (err) {
          console.error(err);
        }
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
  authApi;
