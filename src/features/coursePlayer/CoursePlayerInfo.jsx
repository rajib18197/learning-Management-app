import styled from "styled-components";
import Video from "./Video";
import VideoDetails from "./VideoDetails";
import VideosList from "./VideosList";

const StyledCoursePlayer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;

const VideoInfo = styled.div`
  grid-column: 1 / span 2;
`;

export default function CoursePlayerInfo() {
  return (
    <StyledCoursePlayer>
      <VideoInfo>
        <Video />
        <VideoDetails />
      </VideoInfo>

      <VideosList />
    </StyledCoursePlayer>
  );
}
