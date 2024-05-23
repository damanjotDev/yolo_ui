'use client'
import { usePathname } from "next/navigation";
import {useScroll} from "@/app/hooks";
import { motion } from "@/app/utils/animation";
import { useTypedSelector } from "@/app/store/store";
import { HomeCareousell } from "./careousell";
import { useEffect } from "react";



const Home = () => {

  const pathname  = usePathname();
  const {scrolled} = useScroll();
  return (
      <div className={`
          h-[calc(100vh)]
          w-full
          flex
          flex-col`}>
            <HomeCareousell/>
      </div>
  )
}

export { Home }
