'use client'
import { usePathname, useRouter } from "next/navigation";
import { motion } from "@/app/utils/animation";

import { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyP } from "../../ui/Typography";
import { FaStar, GoArrowRight, RoutesName, Tilt } from "@/app/utils";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ReviewsModal } from "@/app/utils/modals";




const HomeReviews = ({ reviews }: { reviews: ReviewsModal }) => {



  return (
    <div className="
    w-full 
    bg-accent
    px-5
    md:py-20
    py-10">
      <div className="
      w-full
      lg:mx-auto
      lg:w-[70%]">
        <div className="
        w-full
        flex
        md:flex-row
        flex-col
        items-center
        justify-between">

          <div className="
          flex
          flex-col
          gap-2
          items-start
          justify-center">
            <motion.div className="
            flex
            items-center
            justify-center"
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8, ease: 'linear' }}
            viewport={{ once: true }}>
              <TypographyH2 title="OUR GUESTS LOVE US" />
            </motion.div>
            <motion.div className="
            flex
            items-center
            justify-center
            font-roboto-condensed "
            initial={{ y: -100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, ease: 'linear' }}
            viewport={{ once: true }}>
              <TypographyH4 className="font-bold" title="What our guests are saying about us" />
            </motion.div>
          </div>

          <motion.div
          className="
          mt-10
          flex
          items-center
          justify-center
          text-foreground"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut'}}
          viewport={{ once: true }}>
                <button className="
                w-auto
                flex
                items-center
                md:py-3
                md:px-6
                py-2
                px-3
                gap-3
                rounded-md
                group
                text-white
                transition-all
                duration-200
                hover:bg-primary"
                onClick={() => {}}>
                    <TypographyP
                    className="
                    font-[600] 
                    text-primary
                    group-hover:text-background" title="VIEW ALL REVIEWS" />
                    <GoArrowRight
                        size={20}
                        className="
                        transition-all
                        duration-300
                        rotate-[-45deg]
                        text-primary
                        group-hover:rotate-0
                        group-hover:text-background"/>
                </button>
            </motion.div>
        </div>

        <div className="
        mt-5
        md:mt-10
        w-full
        grid
        grid-cols-1
        md:grid-cols-3
        gap-5
        md:gap-5">
          {reviews?.rows?.map((ele, index)=>(
            <motion.div 
            key={ele.id}
            className="
            flex 
            flex-col 
            gap-10  
            font-roboto-condensed"
            initial={{scale: 0.8, opacity: 0}}
            whileInView={{scale: 1, opacity: 1}}
            transition={{duration: 0.8, ease: 'linear'}}
            viewport={{once: true}}>

              <div className="
              hover:shadow-lg
              hover:scale-[1.01]
              transition-transform
              duration-500
              bg-background
              rounded-md
              p-10
              flex
              flex-col
              items-center
              justify-center
              gap-5
              h-[330px]">
                <div className="
                flex
                items-center
                justify-center">
                  <TypographyH3 title={ele?.title} />
                </div>

                <div className="
                    flex
                    items-center
                    justify-center
                    gap-2">
                      {Array.from({length: 5}).map((_, index)=>(
                        <FaStar 
                        key={index} 
                        size={20} 
                        className={cn("border-0",index+1<=ele?.rating?"text-yellow-500":"transparent")}/>
                      ))}
                </div>
              
                <div className="
                flex
                text-center
                max-h-[200px]
                overflow-auto">
                    <TypographyH4 className="text-sm"  title={ele?.description}/>
                </div>
              </div>

              <div className="
              w-full
              flex
              items-center
              justify-center
              gap-3">
                <div className="
                flex
                items-center
                justify-center">
                  <img 
                  src={ele?.user?.image?.imageUrl} 
                  alt="no image"
                  className="h-[80px] w-[80px] rounded-full"/>
                </div>

                <div className="
                flex
                flex-col
                gap-2">

                 <div className="flex w-[70%] text-[30px]">
                   <TypographyH4 className="font-bold" title={ele?.user?.name}/>
                 </div>
                </div>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </div>
  )
}

export { HomeReviews } 