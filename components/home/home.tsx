'use client'
import HomeCareousell  from "./careousel/careousel";
import dynamic from "next/dynamic";
import { AboutsModal, RoomsModal} from "@/app/utils/modals";
import {HomeAbout} from "./about/about";
import { HomeRoom } from "./room/room";


const Home = ({abouts, rooms}:{abouts: AboutsModal, rooms: RoomsModal}) => {

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
      </div>
  )
}

export { Home }
