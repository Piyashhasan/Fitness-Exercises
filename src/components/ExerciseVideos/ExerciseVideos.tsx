"use client";
import { useSuggestVideosQuery } from "@/redux/services/youTubeApi";
import { YoutubeVideo } from "@/types/types";
import ExerciseItemSkeleton from "@/shared/Skeleton/ExerciseItemSkeleton";

interface Props {
  name: string;
  loading: boolean;
}

const ExerciseVideos = ({ name, loading }: Props) => {
  const { data, isLoading } = useSuggestVideosQuery(name, {
    skip: !name,
  });

  return (
    <div className="py-10">
      <h2 className="text-black text-[32px] font-semibold">
        Watch <span className="text-[#FF2625]">{name}</span> exercise videos
      </h2>

      {loading || isLoading ? (
        <div className="grid grid-cols-1 gap-8 mt-10 mb-6 sm:grid-cols-3 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="shadow-lg p-5 rounded-tl-[30px] rounded-br-[30px] min-h-[380px]">
              <ExerciseItemSkeleton key={index} />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mt-10 mb-6">
          {data?.contents
            ?.slice(0, 3)
            .map((item: YoutubeVideo, index: number) => {
              return (
                <a
                  key={index}
                  href={`https://www.youtube.com/watch?v=${item?.video?.videoId}`}
                  target="_blank"
                >
                  <div className="shadow-lg p-5 rounded-tl-[30px] rounded-br-[30px] bg-[#FFF7F7] min-h-[380px]">
                    <div className="w-full object-cover object-top">
                      <img
                        className="w-full h-[200px] object-cover object-center rounded-[10px]"
                        src={item.video.thumbnails[0].url}
                        alt=""
                      />
                    </div>
                    <div className="mt-5">
                      <p className="text-[20px] text-black font-semibold">
                        {item.video.title}
                      </p>
                      <p className="text-black text-[14px] mt-5">
                        {item.video.channelName}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default ExerciseVideos;
