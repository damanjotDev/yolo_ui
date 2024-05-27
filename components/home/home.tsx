'use client'
import HomeCareousell  from "./careousel/careousel";
import dynamic from "next/dynamic";
import { AboutsModal, RoomsModal, ServicesModal} from "@/app/utils/modals";
import {HomeAbout} from "./about/about";
import { HomeRoom } from "./room/room";
import { HomeServices } from "./service/service";


const Home = ({abouts, rooms, services}:{abouts: AboutsModal, rooms: RoomsModal, services: ServicesModal}) => {

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
      </div>
  )
}

export { Home }
