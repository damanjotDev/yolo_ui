'use client'
import HomeCareousell from "../common/careousel";
import dynamic from "next/dynamic";
import { AboutsModal, ExperiencesModal, ReviewsModal, RoomsModal, ServicesModal } from "@/app/utils/modals";
import { HomeAbout } from "./about/about";
import { HomeRoom } from "./room/room";
import { HomeServices } from "./service/service";
import { HomeExperience } from "./experience/experience";
import { HomeReviews } from "./review/reviews";
import { HomeBlog } from "./blog/blog";

import image1 from "@/app/assets/images/home1.jpg"
import image2 from "@/app/assets/images/home2.jpeg"
import image3 from "@/app/assets/images/home3.jpg"


const imageData = [
  {
    id: 1,
    title: 'Discover',
    description: 'Oasis Hotel Prasonisi',
    imageUrl: image1
  },
  {
    id: 2,
    title: 'Escape to Prasonisi',
    description: 'Book your escape today',
    imageUrl: image2
  },
  {
    id: 3,
    title: 'Beachfront Hotel',
    description: 'Best price Guarantee!',
    imageUrl: image3
  }
]

const Home = (
  {
    abouts,
    rooms,
    services,
    experiences,
    reviews
  }:
    {
      abouts: AboutsModal,
      rooms: RoomsModal,
      services: ServicesModal,
      experiences: ExperiencesModal,
      reviews: ReviewsModal
    }) => {

  return (
    <div className={`
          h-full
          w-full
          flex
          flex-col
          gap-20`}>
      <HomeCareousell imageData={imageData}/>
      <HomeAbout abouts={abouts} />
      <HomeRoom rooms={rooms} />
      <HomeServices services={services} />
      <HomeExperience experiences={experiences} />
      <HomeReviews reviews={reviews} />
      <HomeBlog />
    </div>
  )
}

export { Home }
