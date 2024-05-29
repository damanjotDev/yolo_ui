'use client'
import { ExperienceModal, RoomModal, RoomsModal } from "@/app/utils/modals";
import PageInfromation from "../common/pageInfromation";
import roomBackground from "@/app/assets/images/roomBackground.webp"
import { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyP } from "../ui/Typography";
import { GoArrowRight, RoutesName, motion } from "@/app/utils"
import { useRouter } from "next/navigation";

import Careousell from "../common/careousel";


const ExperienceDeatils = ({experienceDetails}:{experienceDetails: ExperienceModal}) => {

  const navigate = useRouter();

  const ImageData = experienceDetails?.images?.map((ele, index)=>({id:index+1,title: experienceDetails?.title, imageUrl: ele?.imageUrl}))

  return (
      <div className={`
          h-full
          w-full
          flex
          flex-col
          md:gap-20
          gap-10`}>

            <Careousell imageData = {ImageData}/>

            <motion.div className="
            flex
            items-center
            justify-center
            text-primary"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'linear' }}
            viewport={{ once: true }}>
              <TypographyH2 title="EXPERIENCES DETAILS" />
            </motion.div>

            <div className="
            md:p-10
            p-5
            w-full
            lg:mx-auto
            lg:w-[70%]
            font-roboto-condensed
            flex
            md:flex-row
            flex-col
            shadow-lg">
                <div className="
                 flex
                 items-start">
                    <motion.div
                    className="
                    font-roboto-condensed 
                    text-sm 
                    tracking-wider
                    font-[300]"
                    dangerouslySetInnerHTML={{ __html: experienceDetails?.description || "loading" }} 
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'linear', delay: 0.2 }}
                    viewport={{ once: true }}/>
                </div>
            </div>

      </div>
  )
}

export { ExperienceDeatils }
