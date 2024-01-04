import styled from "styled-components";
import VideoItem from "./VideoItem";
import { useGetAllVideosQuery } from "./coursePlayerApi";

const StyledVideosList = styled.div`
  height: 57rem;
  overflow-y: auto;
  background-color: var(--color-silver-100);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;

export default function VideosList() {
  const { data: videos, isLoading, isError, error } = useGetAllVideosQuery();

  if (isLoading) return <h2>Loading</h2>;
  if (isError) return <h2>{error || "Error while loading videos!"}</h2>;

  return (
    <StyledVideosList>
      {videos.map((video) => (
        <VideoItem video={video} key={video.id} />
      ))}
    </StyledVideosList>
  );
}
