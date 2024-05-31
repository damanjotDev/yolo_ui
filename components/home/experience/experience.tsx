'use client'
import { usePathname, useRouter } from "next/navigation";
import { motion } from "@/app/utils/animation";
import { useAppDispatch, useTypedSelector } from "@/app/store/store";
import { useEffect } from "react";
import { AboutActions } from "@/app/reducers";

import { TypographyH1, TypographyH2, TypographyH4, TypographyH5, TypographyP } from "../../ui/Typography";
import { GoArrowRight, RoutesName, Tilt } from "@/app/utils";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ExperiencesModal } from "@/app/utils/modals";

import image3 from "@/app/assets/images/home3.jpg"
import Link from "next/link";



const HomeExperience = ({ experiences }: { experiences: ExperiencesModal }) => {

  const pathname = usePathname();
  const navigate = useRouter();

  return (
    <div className="
        w-full
        px-5
        py-5
        md:p-10">
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
          <TypographyH2 title="DISCOVER HIMACHAL" />
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
          <TypographyH4 className="font-bold" title="Places you must explore this summer" />
        </motion.div>
      </div>

      <div className="
      md:mt-[60px]
      mt-10
      w-full
      grid
      grid-cols-1
      md:gap-10
      gap-5">
        {experiences?.rows?.map((ele, index) => experiences?.count % 4 === 0 ?
          (
            <motion.div
              key={ele?.id}
              className={
                cn("flex items-center justify-center h-[400px] md:h-[750px]")}
              initial={(index + 1) % 2 === 1 ? { y: -200, opacity: 0 } : { x: 200, opacity: 0 }}
              whileInView={(index + 1) % 2 === 1 ? { y: 0, opacity: 100 } : { x: 0, opacity: 100 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={1}
                tiltMaxAngleY={1}
                transitionSpeed={250}
                className="
                w-full
                h-full
                ">
                <motion.div 
                className="
                w-full
                h-full
                relative
                group"
                initial="rest"
                whileHover="hover"
                animate="rest">
                  <img src={ele.images?.[0]?.imageUrl} className="w-full object-cover h-full" alt="" />

                  <div className="
                  absolute 
                  top-0
                  left-0
                  bottom-0
                  right-0
                  p-4
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-2
                  text-background
                  bg-black
                  opacity-10"/>

                  <div className="
                  absolute 
                  top-0
                  left-0
                  bottom-0
                  right-0
                  p-4
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-1
                  text-background">
                    <motion.div 
                    className="
                    flex 
                    items-center 
                    justify-center"
                    initial={{ y: 100}}
                    whileInView={{ y: 0}}
                    transition={{ duration: 0.8, ease: 'linear' }}
                    viewport={{once: true}}>
                      <TypographyH2
                        className="font-[200] text-center"
                        title={ele.title} />
                    </motion.div>

                    <motion.div
                    className="
                    mt-10
                    flex
                    items-center
                    justify-center
                    text-foreground"
                    initial={{ y: 100}}
                    whileInView={{ y: 0}}
                    transition={{ duration: 0.8, ease: 'linear' }}
                    viewport={{once: true}}>
                      <Link 
                      className="
                      flex
                      items-center
                      md:py-3
                      md:px-6
                      py-2
                      px-3
                      gap-3
                      rounded-md
                      group
                      text-background
                      transition-all
                      duration-200
                      bg-primary"
                        href={RoutesName.Experiences}>
                        <TypographyP
                          className="
                          font-[600]" 
                          title="DISCOVER OUR EXPERIENCES" />
                        <GoArrowRight
                          size={20}
                          className="
                          transition-all
                          duration-300
                          rotate-[-45deg]
                          group-hover:rotate-0"/>
                      </Link>
                   </motion.div>
                  </div>

                </motion.div>
              </Tilt>
            </motion.div>
          ) :
          null)}
      </div>
    </div>
  )
}

export { HomeExperience } 