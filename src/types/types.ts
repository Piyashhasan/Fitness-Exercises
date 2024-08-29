export interface Exercise {
  id: string;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  instructions: string[];
  name: string;
  secondaryMuscles: string;
  target: string;
}

export interface YoutubeVideo {
  video: {
    id: number;
    channelId: string;
    channelName: string;
    description: string;
    lengthText: string;
    publishedTimeText: string;
    thumbnails: {
      height: number;
      url: string;
      width: number;
    }[];
    title: string;
    videoId: string;
    viewCountText: string;
  };
}
