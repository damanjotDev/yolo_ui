'use client'
import {  PropertyModal } from "@/app/utils/modals";
import PageInfromation from "../common/pageInfromation";
import roomBackground from "@/app/assets/images/roomBackground.webp"
import { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyP } from "../ui/Typography";
import { BsTelephoneFill, GoArrowRight, IoLocation, MdOutlineMarkEmailRead, RoutesName, motion } from "@/app/utils"
import { useRouter } from "next/navigation";

import Careousell from "../common/careousel";
import PropertyForm from "./property-form";


const PropertyDetails = ({propertyDetails}:{propertyDetails: PropertyModal}) => {

  const navigate = useRouter();
  const ImageData = propertyDetails?.images?.map((ele, index)=>({id:index+1,title: propertyDetails?.title, imageUrl: ele?.imageUrl}))

  return (
      <div className={`
          bg-accent
          h-full
          w-full
          flex
          flex-col
          md:gap-20
          gap-10
          pb-10`}>

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
              <TypographyH2 title="PROPERTY DETAILS" />
            </motion.div>

            <div className="
            md:p-10
            p-5
            w-full
            lg:mx-auto
            lg:w-[70%]
            flex
            md:flex-row
            flex-col
            md:gap-10
            gap-5">
                <div className="
                 flex
                 flex-col
                 md:w-[60%]
                 w-full
                 items-start
                 md:gap-10
                 gap-5">
                  <motion.div className="
                  flex
                  items-center
                  justify-center"
                  initial={{ x: -200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8,delay: 0.2, ease: 'linear' }}
                  viewport={{ once: true }}>
                    <TypographyH2 title={propertyDetails?.title} />
                  </motion.div>

                    <motion.div
                    className="
                    font-roboto-condensed 
                    text-sm 
                    tracking-wider
                    font-[300]"
                    dangerouslySetInnerHTML={{ __html: propertyDetails?.description || "loading" }} 
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'linear', delay: 0.2 }}
                    viewport={{ once: true }}/>

                    <div className="
                    flex
                    items-center
                    gap-5
                    font-roboto-condensed">
                      <div 
                      className="
                      flex
                      gap-2
                      transition-transform
                      duration-400
                      hover:text-primary">

                        <div className="
                        flex
                        items-center
                        justify-start">
                          <IoLocation size={20} className="-ml-1"/>
                        </div>

                        <div className="
                        flex
                        items-center 
                        justify-start">
                          <TypographyP title={propertyDetails?.coordinates?.address || ""}/>
                        </div>

                      </div>

                      <div 
                      className="
                      flex
                      gap-3
                      transition-transform
                      duration-400
                      hover:text-primary">

                        <div className="
                        flex
                        items-center
                        justify-start">
                          <BsTelephoneFill size={15}/>
                        </div>

                        <div className="
                        flex
                        items-center 
                        justify-start">
                          <TypographyP title={propertyDetails?.contactNo || 123456789}/>
                        </div>

                      </div>

                      <div 
                      className="
                      flex
                      gap-2
                      transition-transform
                      duration-400
                      hover:text-primary">

                        <div className="
                        flex
                        items-center
                        justify-start">
                          <MdOutlineMarkEmailRead size={20}/>
                        </div>

                        <div className="
                        flex
                        items-center 
                        justify-start">
                          <TypographyP title={propertyDetails?.email || ""}/>
                        </div>

                      </div>
                    </div>
                </div>
                <div className="
                flex
                md:w-[40%]
                w-full
                items-center
                justify-center">
                  <PropertyForm propertyDetails={propertyDetails}/>
                </div>
            </div>

      </div>
  )
}

export { PropertyDetails }
