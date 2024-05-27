'use client'
import HomeCareousell  from "./careousel/careousel";
import dynamic from "next/dynamic";
import { AboutsModal, ExperiencesModal, ReviewsModal, RoomsModal, ServicesModal} from "@/app/utils/modals";
import {HomeAbout} from "./about/about";
import { HomeRoom } from "./room/room";
import { HomeServices } from "./service/service";
import { HomeExperience } from "./experience/experience";
import { HomeReviews } from "./review/reviews";


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
            <HomeCareousell/>
            <HomeAbout  abouts={abouts}/>
            <HomeRoom rooms = {rooms}/>
            <HomeServices services = {services}/>
            <HomeExperience experiences={experiences}/>
            <HomeReviews reviews={reviews}/>
      </div>
  )
}

export { Home }
