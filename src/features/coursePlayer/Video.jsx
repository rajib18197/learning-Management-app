import { useParams } from "react-router-dom";
import { useGetAllVideosQuery, useGetVideoQuery } from "./coursePlayerApi";

export default function Video() {
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

  if (isInitialLoading) return <h2>Loading initial video</h2>;
  if (isLoading) return <h2>Loading video ${id}</h2>;

  if (isInitialError) return <h2>{initialError || "Error!"}</h2>;
  if (isError) return <h2>{error || "Error!"}</h2>;

  console.log(video);
  console.log(videos);
  return (
    <iframe
      width="100%"
      className="aspect-video"
      src={videos?.[0]?.url || video.url}
      title={videos?.[0]?.title || video.title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
