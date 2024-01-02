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
  endpoints: (builder) => ({}),
});

export default apiSlice;
