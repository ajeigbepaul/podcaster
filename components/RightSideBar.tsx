'use client';

import { SignedIn, UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
// import Carousel from './Carousel';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useRouter } from 'next/navigation';
import LoaderSpinner from './LoaderSpinner';
import { cn } from '@/lib/utils';
import { useAudio } from '@/app/provider/AudioProvider';
import Header from './Header';
import EmblaCarousel from './Carousel';

const RightSidebar = () => {
  const { user } = useUser();
  const topPodcasters = useQuery(api.users.getTopUserByPodcastCount);
  const router = useRouter();

  const { audio } = useAudio();

  return (
    <section className={cn('right_sidebar h-[100vh] overflow-y-auto', {
      'h-[calc(100vh-140px)]': audio?.audioUrl
    })}>
      <div className="flex flex-col h-full pb-5 overflow-y-auto pr-1 no-scrollbar"> {/* Added this wrapper */}
      <SignedIn>
        <Link href={`/myprofile/${user?.id}`} className="flex gap-3 pb-12">
          <UserButton />
          <div className="flex w-full items-center justify-between">
            <h1 className="text-16 truncate font-semibold text-white-1">{user?.firstName} {user?.lastName}</h1>
            <Image 
              src="/icons/right-arrow.svg"
              alt="arrow"
              width={24}
              height={24}
            />
          </div>
        </Link>
      </SignedIn>
      <section>
        <Header headerTitle="Fans Like You" />
        <EmblaCarousel fansLikeDetail={topPodcasters!}/>
      </section>
      <section className="flex flex-col gap-8 pt-12">
        <Header headerTitle="Top Podcastrs" />
        <div className="flex flex-col gap-6">
          {topPodcasters?.slice(0, 3).map((podcaster) => (
            <div key={podcaster._id} className="flex cursor-pointer justify-between" onClick={() => router.push(`/myprofile/${podcaster.clerkId}`)}>
              <figure className="flex items-center gap-2">
                <Image
                  src={podcaster.imageUrl}
                  alt={podcaster.name}
                  width={44}
                  height={44}
                  className="aspect-square rounded-lg"
                />
                <h2 className="text-14 font-semibold text-white-1">{podcaster.name}</h2>
              </figure>
              <div className="flex items-center">
                <p className="text-12 font-normal text-white-1">{podcaster.totalPodcasts} podcasts</p>
              </div> 
            </div>
          ))}
        </div>
      </section>
      </div>
    </section>
  )
}

export default RightSidebar