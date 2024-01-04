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

    getAssignmentMark: builder.query({
      query: (assignmentId) => ({
        url: `assignmentMark?assignment_id=${assignmentId}`,
        method: "GET",
      }),
    }),

    addAssignmentMark: builder.mutation({
      query: (assignmentMark) => ({
        url: `assignmentMark`,
        method: "POST",
        body: assignmentMark,
      }),

      onQueryStarted: async function (
        assignmentMark,
        { dispatch, queryFulfilled }
      ) {
        try {
          // const patchResult = dispatch(
          //   apiSlice.util.updateQueryData("getAssignmentMark")
          // );
          // const result = await queryFulfilled;
        } catch (err) {}
      },
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
  useGetAssignmentMarkQuery,
} = coursePlayerApi;
