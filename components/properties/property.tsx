'use client'
import {  PropertyModal, RoomModal } from "@/app/utils/modals";
import PageInfromation from "../common/pageInfromation";
import roomBackground from "@/app/assets/images/roomBackground.webp"
import { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyP } from "../ui/Typography";
import { BsTelephoneFill, GoArrowRight, IoLocation, MdOutlineMarkEmailRead, RoutesName, motion } from "@/app/utils"
import { useRouter } from "next/navigation";

import Careousell from "../common/careousel";
import PropertyForm from "./property-form";
import { useEffect, useState } from "react";
import { getRoomsWithServer } from "@/app/services";


const PropertyDetails = ({propertyDetails}:{propertyDetails: PropertyModal}) => {
  const navigate = useRouter();
  const [rooms, setRooms] = useState<null | RoomModal[]>(null);

  const ImageData = propertyDetails?.images?.map((ele, index)=>({id:index+1,title: propertyDetails?.title, image: ele}))

  useEffect(()=>{
    if(propertyDetails?.id){
      handleRoomsData(propertyDetails?.id)
    }
  },[propertyDetails?.id])

  const handleRoomsData = async(id: number)=>{
    try {
      const data = await getRoomsWithServer({property_id: id})
      setRooms(data?.rows)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
      <div className={`
          h-full
          w-full
          flex
          flex-col
          md:pb-10
          pb-5`}>

            <Careousell imageData = {ImageData}/>

            <div className="
            w-full
            bg-accent
            py-10">
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
                md:mt-10
                mt-5
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
                        md:flex-row
                        flex-col
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

             <motion.div className="
             md:mt-10
             mt-5
             md:p-10
             p-5
             flex
             items-center
             justify-center"
             initial={{ x: -200, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             transition={{ duration: 0.8, ease: 'linear' }}
             viewport={{ once: true }}>
              <TypographyH2 title={`Rooms of ${propertyDetails?.title}`} />
            </motion.div>

            <div className="
            md:mt-10
            mt-5
            p-5
            w-full
            lg:mx-auto
            lg:w-[70%]
            grid
            md:grid-cols-3
            grid-cols-1
            md:gap-10
            gap-5
            ">
              {rooms?.map((ele,index)=>(
                <motion.div className="
                shadow-lg
                rounded-lg
                flex
                flex-col"
                key={ele.id}
                initial={{scale: 0.8, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                transition={{duration: 0.8, ease: 'linear'}}
                viewport={{ once: true}}>

                  <div className="
                  relative 
                  group
                  w-full
                  flex
                  flex-col
                  items-center
                  justify-center
                  border-b-[1px]
                  border-black">
                    <img 
                    src={ele?.images?.[0]?.imageUrl} 
                    className="h-[300px] w-full object-cover"/>

                    <div 
                    className="
                    w-full
                    flex 
                    items-center 
                    justify-center
                    p-4">
                      <TypographyH3
                        className="
                        max-w-full 
                        font-[200] 
                        text-center 
                        tracking-wide 
                        truncate"
                        title={ele.title} />
                    </div>

                    {/* on hover div content */}
                    <motion.div className='
                    hidden
                    absolute
                    top-[0px]
                    left-0
                    right-0
                    bottom-[65px]
                    z-[16]
                    group-hover:flex
                    flex-col
                    items-center
                    justify-center
                    py-10
                    px-5
                    gap-5
                    bg-black'
                    initial={{opacity: 0}}
                    whileInView={{opacity: 0.6}}
                    transition={{duration: 0.8, ease: 'easeInOut'}}>
                      <div className="
                      w-full
                      h-full
                      relative">
                        <motion.div 
                        className="absolute h-12 w-[2px] bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        initial={{y: 100, opacity: 0}}
                        whileInView={{y: -23, opacity: 1}}
                        transition={{duration: 0.3, delay: 0.7}}/>
                        <motion.div 
                        className="absolute w-12 h-[2px] bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        initial={{x: -100, opacity: 0}}
                        whileInView={{x: -24, opacity: 1}}
                        transition={{duration: 0.3, delay: 0.7}}/>
                      </div>
                    </motion.div>
                  </div>

                  <div className="
                  flex
                  items-center
                  mt-4
                  pb-5">
                    <div className="
                    w-1/2
                    flex
                    flex-col
                    items-center
                    justify-center
                    border-r-[1px]
                    border-black">
                      <div className="
                      flex 
                      items-center 
                      justify-center">
                        <TypographyH5 title="From"/>
                      </div>
                      <div className="
                      flex 
                      items-center 
                      justify-center
                      font-roboto-condensed">
                        <TypographyH3 title={`${ele?.adult?.min}-${ele?.adult?.max} Guests`}/>
                      </div>
                    </div>
                    <div className="
                    w-1/2
                    flex
                    flex-col
                    items-center
                    justify-center
                    p-4">
                      <div 
                      onClick={()=> navigate.push(RoutesName.Rooms+"/"+ele.id)}
                      className="
                      flex 
                      items-center 
                      justify-center
                      font-roboto-condensed">
                        <TypographyH3 className="underline" title="View Detail"/>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

      </div>
  )
}

export { PropertyDetails }
