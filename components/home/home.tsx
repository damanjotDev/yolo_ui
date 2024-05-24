'use client'
import { HomeCareousell } from "./careousel/careousel";
import dynamic from "next/dynamic";
import { AboutsModal} from "@/app/utils/modals";
import {HomeAbout} from "./about/about";


const Home = ({abouts}:{abouts: AboutsModal}) => {

  return (
      <div className={`
          h-full
          w-full
          flex
          flex-col
          gap-20`}>
            <HomeCareousell/>
            <HomeAbout  abouts={abouts}/>
      </div>
  )
}

export { Home }
