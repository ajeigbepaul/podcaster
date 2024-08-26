"use client"

import { podcastData } from "@/app/constants"
import PodcastCard from "./PodcastCard"
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
const Podcast = () => {
//   const tasks = useQuery(api.tasks.get);
//   console.log("Sample Task",tasks)
  return (
    <div className="podcast_grid">
    {podcastData?.map(
      ({ id, title, description, imgURL }) => (
        <PodcastCard
          key={id}
          imgUrl={imgURL as string}
          title={title}
          description={description}
          podcastId={id}
        />
      )
    )}
  </div>
  )
}

export default Podcast