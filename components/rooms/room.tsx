'use client'
import { RoomModal, RoomsModal } from "@/app/utils/modals";
import PageInfromation from "../common/pageInfromation";
import roomBackground from "@/app/assets/images/roomBackground.webp"
import { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyP } from "../ui/Typography";
import { GoArrowRight, RoutesName, motion } from "@/app/utils"
import { useRouter } from "next/navigation";
import Image from "next/image";

import BedImage from "@/app/assets/images/bed.png";
import PersonsImage from "@/app/assets/images/persons.png";
import AreaImage from "@/app/assets/images/area.png";
import PoolImage from "@/app/assets/images/pool.png";
import Careousell from "../common/careousel";

import image1 from "@/app/assets/images/home1.jpg"
import image2 from "@/app/assets/images/home2.jpeg"
import image3 from "@/app/assets/images/home3.jpg"
import { useEffect, useState } from "react";

// const imageData = [
//   {
//     id: 1,
//     title: 'Discover',
//     description: 'Oasis Hotel Prasonisi',
//     imageUrl: image1
//   },
//   {
//     id: 2,
//     title: 'Escape to Prasonisi',
//     description: 'Book your escape today',
//     imageUrl: image2
//   },
//   {
//     id: 3,
//     title: 'Beachfront Hotel',
//     description: 'Best price Guarantee!',
//     imageUrl: image3
//   }
// ]

const RoomDeatils = ({roomDetails, rooms}:{roomDetails: RoomModal, rooms: RoomsModal}) => {

  const navigate = useRouter();

  const ImageData = roomDetails?.images?.map((ele, index)=>({id:index+1,description: roomDetails?.title, imageUrl: ele?.imageUrl}))

  return (
      <div className={`
          h-full
          w-full
          flex
          flex-col
          md:gap-20
          gap-10`}>

            <Careousell imageData = {ImageData}/>
            {/* <PageInfromation 
            description={roomDetails?.title}
            imageUrl={roomBackground}/> */}

            <motion.div className="
            flex
            items-center
            justify-center
            text-primary"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'linear' }}
            viewport={{ once: true }}>
              <TypographyH2 title="ROOM DETAILS" />
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
                 md:w-[60%]
                 flex
                 items-start">
                    <div
                    className="
                    font-roboto-condensed 
                    text-sm 
                    tracking-wider
                    font-[300]"
                    dangerouslySetInnerHTML={{ __html: roomDetails?.description || "loading" }} />
                </div>
                <div className="
                md:w-[40%]
                p-5
                md:px-10
                flex
                flex-col
                gap-5
                md:border-l-[1px]">
                    <div className="
                    w-full
                    flex
                    flex-col">
                        <div className="
                        w-full
                        flex
                        items-center
                        justify-start">
                            <TypographyH5 className="font-bold" title="From"/>
                        </div>
                        <div className="
                        w-full
                        flex
                        items-center
                        justify-center">
                            <TypographyH2 className=" text-[50px] font-bold" title={`${roomDetails?.adult?.min}-${roomDetails?.adult?.max} Guests`}/>
                        </div>

                        <div className="
                        mt-5
                        flex
                        items-center
                        justify-center
                        py-4
                        px-6
                        gap-3
                        rounded-md
                        group
                        text-white
                        transition-all
                        duration-200
                        bg-primary"
                        onClick={()=> window.open("https://www.airbnb.co.in/users/show/138737073",'_blank')}>
                            <TypographyH5 className="font-[600]" title="BOOK NOW"/>
                            <GoArrowRight 
                            size={20}
                            className="
                            transition-all
                            duration-300
                            rotate-[-45deg]
                            group-hover:rotate-0"/>
                        </div>
                    </div>

                    <div className="
                    w-full
                    flex
                    flex-col
                    gap-5">
                        <div className="
                        flex
                        items-center
                        gap-10">
                            <div className="
                            h-10
                            w-12">
                                <Image 
                                src={BedImage} 
                                className="w-full h-full object-contain" 
                                alt="bedImage"/>
                            </div>
                            <div className="
                            flex
                            items-center">
                                <TypographyH5 className="font-bold" title={roomDetails?.bedType}/>
                            </div>
                        </div>
                        <div className="
                        flex
                        items-center
                        gap-10">
                            <div className="
                            h-10
                            w-12">
                                <Image 
                                src={PersonsImage} 
                                className="w-full h-full object-contain" 
                                alt="personImage"/>
                            </div>
                            <div className="
                            flex
                            items-center">
                                <TypographyH5 className="font-bold" title={roomDetails?.adult?.max+" Guests"}/>
                            </div>
                        </div>
                        <div className="
                        flex
                        items-center
                        gap-10">
                            <div className="
                            h-10
                            w-12">
                                <Image 
                                src={AreaImage} 
                                className="w-full h-full object-conatain" 
                                alt="areaImage"/>
                            </div>
                            <div className="
                            flex
                            items-center">
                                 <TypographyH5 className="font-bold" title={roomDetails?.roomArea+"m²"}/>
                            </div>
                        </div>
                        <div className="
                        flex
                        items-center
                        gap-10">
                            <div className="
                            h-10
                            w-12">
                                <Image 
                                src={PoolImage} 
                                className="w-full h-full object-contain" 
                                alt="poolImage"/>
                            </div>
                            <div className="
                            flex
                            items-center">
                                <TypographyH5 className="font-bold" title={"Pool View"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="
            w-full
            flex
            items-center
            justify-center">
                <motion.div className="
                flex
                items-center
                justify-center"
                initial={{ x: 200 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.8, ease: 'linear' }}
                viewport={{ once: true }}>
                    <TypographyH2 title="Room Services"/>
                </motion.div>
            </div>

            <div className="
             p-5
            w-full
            lg:mx-auto
            lg:w-[70%]
            flex
            md:flex-row
            flex-col
            gap-5
            overflow-auto">
                {roomDetails?.services?.map((ele, index)=> (
                  <motion.div  
                  key={ele.id}
                  className='flex relative group md:w-[25%] shadow-lg'
                  initial={{scale:0.8, opacity: 0}}
                  whileInView={{scale:1, opacity: 1}}
                  transition={{duration:0.8, ease: 'linear'}}
                  viewport={{once: true}}>
                    <div className='h-[370px] relative overflow-hidden hover:border-primary hover:border w-full'>
                      {/* Image Section */}
                      <img src={ele.images?.[0]?.imageUrl} className='w-full h-full object-cover' />
    
                      {/* Introduction section */}
                      <div className='
                      absolute
                      bottom-[-20px]
                      left-0
                      right-0
                      w-full
                      h-[130px]
                      bg-black
                      opacity-85
                      skew-y-[-6deg]
                      group-hover:opacity-0
                      transition-transform
                      duration-1000'>
                        <div className='
                        relative
                        skew-y-[6deg]
                        w-full
                        h-full
                        flex
                        flex-col
                        items-center
                        justify-center
                        mt-[-10px]'>
                          <div className='flex mt-2'>
                            <TypographyH3 title={ele.title} className='text-white group-hover:text-black' />
                          </div>
                          <div className="
                          absolute
                          top-[-20%]
                          left-0
                          right-0
                          flex
                          justify-center
                          ">
                            <div className='h-[75px] w-[75px] rounded-full border-primary border-[3px] p-1'>
                              <img src={ele?.images?.[0]?.imageUrl} alt={'no service image'} className='h-full w-full object-cover rounded-full'/>
                            </div>
                          </div>
                        </div>
                      </div>
    
                       {/* On hover div */}
                      <motion.div className='
                      hidden
                      absolute
                      top-0
                      left-0
                      right-0
                      bottom-0
                      z-[15]
                      group-hover:block
                      group-hover:bg-black
                     '
                     initial={{opacity: 0}}
                     whileInView={{opacity: 0.75}}
                     transition={{duration: 0.8, ease: 'linear'}}/>
    
                     {/* on hover div content */}
                        <motion.div className='
                        hidden
                        absolute
                        top-[0px]
                        left-0
                        right-0
                        bottom-[0px]
                        z-[16]
                        group-hover:flex
                        flex-col
                        items-center
                        justify-center
                        py-10
                        px-5
                        gap-5'
                        initial={{y: 40}}
                        whileInView={{y:0}}
                        transition={{duration: 0.8, ease: 'easeInOut'}}>
    
                           <div className='flex text-center -mb-3'>
                            <TypographyH4 title={ele.title} className='text-white ' />
                           </div>
                            <div className='flex text-center'>
                              <div className='
                              scroll-m-20 
                              text-sm 
                              tracking-tight
                              text-white 
                              font-[400]'
                              dangerouslySetInnerHTML={{__html: ele?.description || ""}}/>
                            </div>
                        </motion.div>
                    </div>
                  </motion.div>
                ))}
            </div>

            <motion.div className="
            flex
            items-center
            justify-center"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'linear' }}
            viewport={{ once: true }}>
              <TypographyH2 title="Other Rooms" />
            </motion.div>

            <div className="
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
              {rooms?.rows?.map((ele,index)=>(
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

export { RoomDeatils }
