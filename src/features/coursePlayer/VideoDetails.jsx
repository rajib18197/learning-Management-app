import { useParams } from "react-router-dom";
import {
  useGetAllVideosQuery,
  useGetAssignmentByVideoIdQuery,
  useGetQuizByVideoIdQuery,
  useGetVideoQuery,
} from "./coursePlayerApi";
import Modal from "../../ui/Modal";

export default function VideoDetails() {
  const { id } = useParams();

  const {
    data: videos,
    isLoading: isInitialLoading,
    isError: isInitialError,
    error: initialError,
  } = useGetAllVideosQuery(undefined, { skip: id });

  const {
    data: video,
    isLoading,
    isError,
    error,
  } = useGetVideoQuery(id, { skip: !id });

  const { data: assignments, isLoading: isAssignmentsLoading } =
    useGetAssignmentByVideoIdQuery(id || 1);

  const { data: quizzes, isLoading: isQuizzesLoading } =
    useGetQuizByVideoIdQuery(id || 1);

  if (isInitialLoading || isAssignmentsLoading || isQuizzesLoading || isLoading)
    return <h2>Loading initial video</h2>;

  if (isError || isInitialError)
    return <h2>{error || initialError || "Error!"}</h2>;

  const {
    id: videoId,
    title,
    description,
    url,
    views,
    duration,
    createdAt,
  } = video || {};

  const {
    id: initialVideoId,
    title: initialTitle,
    description: initialDescription,
    url: initialUrl,
    views: initialViews,
    duration: initialDuration,
    createdAt: initialCreatedAt,
  } = videos?.[0] || {};

  console.log(quizzes);

  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-100">
        {initialTitle || title}
      </h1>
      <h2 className=" pb-4 text-sm leading-[1.7142857] text-slate-400">
        Uploaded on{" "}
        {initialCreatedAt
          ? new Date(initialCreatedAt).getDate()
          : new Date(createdAt).getDate()}{" "}
        {initialCreatedAt
          ? new Date(initialCreatedAt).getMonth()
          : new Date(createdAt).getMonth()}{" "}
        {initialCreatedAt
          ? new Date(initialCreatedAt).getFullYear()
          : new Date(createdAt).getFullYear()}
      </h2>

      <div className="flex gap-4">
        {assignments[0]?.id && (
          <Modal>
            <Modal.Open
              opens="assignment"
              render={({ onClick }) => (
                <button
                  className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
                  onClick={onClick}
                >
                  এসাইনমেন্ট
                </button>
              )}
            />

            <Modal.Window
              windowName="assignment"
              render={({ onClick }) => <h2 onClick={onClick}>Modal</h2>}
            />
          </Modal>
        )}

        {quizzes?.[0].id && (
          <a
            href="./Quiz.html"
            className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
          >
            কুইজে অংশগ্রহণ করুন
          </a>
        )}
      </div>
      <p className="mt-4 text-sm text-slate-400 leading-6">
        {initialDescription || description}
      </p>
    </div>
  );
}
