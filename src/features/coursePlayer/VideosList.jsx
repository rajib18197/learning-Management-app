import VideoItem from "./VideoItem";
import { useGetAllVideosQuery } from "./coursePlayerApi";

export default function VideosList() {
  const { data: videos, isLoading, isError, error } = useGetAllVideosQuery();

  if (isLoading) return <h2>Loading</h2>;
  if (isError) return <h2>{error || "Error while loading videos!"}</h2>;

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto bg-secondary p-4 rounded-md border border-slate-50/10 divide-y divide-slate-600/30">
      {videos.map((video) => (
        <VideoItem video={video} key={video.id} />
      ))}
    </div>
  );
}
