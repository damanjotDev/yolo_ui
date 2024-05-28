'use client'
import { usePathname, useRouter } from "next/navigation";
import { motion } from "@/app/utils/animation";
import { useAppDispatch, useTypedSelector } from "@/app/store/store";
import { useEffect } from "react";
import { AboutActions } from "@/app/reducers";

import { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyP } from "../../ui/Typography";
import { GoArrowRight, RoutesName, Tilt } from "@/app/utils";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ExperiencesModal } from "@/app/utils/modals";

import image3 from "@/app/assets/images/home3.jpg"



const HomeBlog = () => {

  const pathname = usePathname();
  const navigate = useRouter();

  return (
    <div className="
    w-full
    lg:mx-auto
    lg:w-[70%]
    px-5
    py-5">
      <div 
      className="
      w-full
      flex
      flex-col
      gap-2
      items-center
      justify-center">
        <motion.div 
        className="
        flex
        items-center
        justify-center"
        initial={{ x: 200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        viewport={{ once: true }}>
          <TypographyH2 title="LATEST READS" />
        </motion.div>
        <motion.div 
        className="
        flex
        items-center
        justify-center
        font-roboto-condensed "
        initial={{ x: 200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        viewport={{ once: true }}>
          <TypographyH4 className="font-bold" title="Check out our latest blogs!" />
        </motion.div>
      </div>

      <div className="
      md:mt-[60px]
      mt-10
      w-full
      grid
      grid-cols-1
      md:grid-cols-3
      md:gap-10
      gap-5">
        {Array.from({length: 3})?.map((ele,index)=>(
          <motion.div 
          key={index+1}
          className="
          flex
          flex-col
          items-start
          justify-center
          font-roboto-condensed"
          initial={{y: -100, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.4, delay: 0.4*index, ease: 'linear'}}
          viewport={{once: true}}>

            <div className="
            w-full
            flex
            items-center
            justify-center
            h-[250px]">
              <Image src={image3} alt="image" className="w-full h-full object-cover"/>
            </div>

            <div className="
            flex
            flex-col
            gap-5
            p-5
            border-destructive
            border-[1px]
            border-t-[0px]">
              <div className="
              flex
              items-center
              justify-between">
                <TypographyH4 className="font-semibold" title={"10 Reasons Why Himachal Pradesh Should Be on Your Bucket List: A Guide for Budget Travelers"} />
              </div>

              <div className="
              flex
              items-center
              justify-between">
                <TypographyH5 title={"Are you a backpacker looking for your next adventure? Do you dream of exploring the..."} />
              </div>

              <div className="
              flex
              items-center
              justify-between
              text-gray-500">
                <TypographyH5 title={"COMMENTS"} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export { HomeBlog } 