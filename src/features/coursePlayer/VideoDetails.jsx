import { useParams } from "react-router-dom";
import {
  useGetAllVideosQuery,
  useGetAssignmentByVideoIdQuery,
  useGetQuizByVideoIdQuery,
  useGetVideoQuery,
} from "./coursePlayerApi";
import Modal from "../../ui/Modal";
import Heading from "../../ui/Heading";
import styled from "styled-components";
import Button from "../../ui/Button";
import Assignment from "./Assignment";

const Description = styled.p`
  font-size: 1.7rem;
`;

const Task = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

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
      <Heading as="h2">{initialTitle || title}</Heading>
      <Heading>
        Uploaded on{" "}
        {initialCreatedAt
          ? new Date(initialCreatedAt).getDate()
          : new Date(createdAt).getDate()}{" "}
        {initialCreatedAt
          ? new Date(initialCreatedAt).getMonth() + 1
          : new Date(createdAt).getMonth()}{" "}
        {initialCreatedAt
          ? new Date(initialCreatedAt).getFullYear()
          : new Date(createdAt).getFullYear()}
      </Heading>

      <Task>
        <Modal>
          {assignments[0]?.id && (
            <>
              <Modal.Open
                opens="assignment"
                render={({ onClick }) => (
                  <Button onClick={onClick}>এসাইনমেন্ট</Button>
                )}
              />

              <Modal.Window
                windowName="assignment"
                render={({ onClick }) => (
                  <Assignment assignment={assignments[0]} />
                )}
              />
            </>
          )}

          {quizzes?.[0].id && (
            <>
              <Modal.Open
                opens="quizzes"
                render={({ onClick }) => (
                  <Button onClick={onClick}>কুইজে অংশগ্রহণ করুন</Button>
                )}
              ></Modal.Open>

              <Modal.Window
                windowName={"quizzes"}
                render={({ onClick }) => <></>}
              />
            </>
          )}
        </Modal>
      </Task>

      <Description>{initialDescription || description}</Description>
    </div>
  );
}
