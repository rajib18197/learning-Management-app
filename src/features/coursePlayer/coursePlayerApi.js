import apiSlice from "../../store/api/apiSlice";

const coursePlayerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllVideos: builder.query({
      query: () => ({ url: "/videos", method: "GET" }),
    }),

    getVideo: builder.query({
      query: (id) => ({ url: `/videos/${id}`, method: "GET" }),
    }),

    getAssignmentByVideoId: builder.query({
      query: (videoId) => ({
        url: `/assignments?video_id=${videoId}`,
        method: "GET",
      }),
    }),

    getQuizByVideoId: builder.query({
      query: (videoId) => ({
        url: `/quizzes?video_id=${videoId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllVideosQuery,
  useGetVideoQuery,
  useGetAssignmentByVideoIdQuery,
  useGetQuizByVideoIdQuery,
} = coursePlayerApi;
