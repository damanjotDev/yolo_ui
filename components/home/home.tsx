'use client'
import { usePathname } from "next/navigation";
import {useScroll} from "@/app/hooks";
import { motion } from "@/app/utils/animation";
import { useTypedSelector } from "@/app/store/store";
import { HomeCareousell } from "./careousel/careousel";
import { useEffect } from "react";
import { HomeAbout } from "./about/about";



const Home = () => {

  const pathname  = usePathname();
  const {scrolled} = useScroll();
  return (
      <div className={`
          h-full
          w-full
          flex
          flex-col
          gap-20`}>
            <HomeCareousell/>
            <HomeAbout/>
      </div>
  )
}

export { Home }
