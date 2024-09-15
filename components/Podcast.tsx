"use client"

import { podcastData } from "@/app/constants"
import PodcastCard from "./PodcastCard"
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { PodcastCardProps } from "@/types";

import LoaderSpinner from "@/components/LoaderSpinner";
const Podcast = () => {
  const trendingPodcasts = useQuery(api?.podcasts?.getTrendingPodcasts);

  if(!trendingPodcasts) return <LoaderSpinner />
//   const tasks = useQuery(api.tasks.get);
//   console.log("Sample Task",tasks)
// { _id, podcastTitle, podcastDescription, imageUrl }
  return (
    <div className="podcast_grid">
    {trendingPodcasts?.map(
      ({ _id, podcastTitle, podcastDescription, imageUrl }) => (
        <PodcastCard
          key={_id}
          imgUrl={imageUrl as string}
          title={podcastTitle}
          description={podcastDescription}
          id={_id}
        />
      )
    )}
  </div>
  )
}

export default Podcast