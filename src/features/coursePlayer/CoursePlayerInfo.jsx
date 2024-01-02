import Video from "./Video";
import VideoDetails from "./VideoDetails";
import VideosList from "./VideosList";

export default function CoursePlayerInfo() {
  return (
    <div className="grid grid-cols-3 gap-2 lg:gap-8">
      <div className="col-span-full w-full space-y-8 lg:col-span-2">
        <Video />
        <VideoDetails />
      </div>

      <VideosList />
    </div>
  );
}
