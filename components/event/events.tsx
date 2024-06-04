'use client'
import { AvailableEventTypes, EventModal, EventsModal } from "@/app/utils/modals";
import PageInfromation from "../common/pageInfromation";
import eventBackground from "@/app/assets/images/gallery.webp"
import { TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyP } from "../ui/Typography";
import { GoArrowRight, RoutesName, Tilt, motion } from "@/app/utils"
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { CustomDialog } from "../common/customDialog";
import { Button } from "../ui/button";
import Careousell from "../common/careousel";

const Events = ({events}:{events: EventsModal}) => {

  const navigate = useRouter();
  const[open,setOpen] = useState<boolean>(false);
  const[imageIndex, setImageIndex] = useState<any>();
  const [filterEvents, setFilterEvents] = useState<EventModal[]>(events?.rows);
  const [filterType, setFilterType] = useState('ALL')

  const handleFilterEvents = (type: string)=>{
    setFilterType(type)
    if(type==="ALL"){
      setFilterEvents(events?.rows)
    }
    else{
      const newData = events?.rows?.filter((ele)=>ele.eventType===type);
      setFilterEvents(newData)
    }
  }

  return (
    <>
      <div className={`
          h-full
          w-full
          flex
          flex-col
          gap-10`}>
            <PageInfromation 
            title="Life @ YOLO" 
            description="Home / Life @ YOLO" 
            imageUrl={eventBackground}/>

            <div className="
            w-full
            lg:w-[70%]
            mx-auto
            flex
            flex-col
            md:gap-10
            gap-5
            md:p-10
            p-5">
              <motion.div className="
              flex
              items-center
              justify-center
              text-primary"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'linear' }}
              viewport={{ once: true }}>
               <TypographyH2 title="ALL EVENTS" />
              </motion.div>

              <div className="
              flex
              flex-wrap
              items-center
              gap-5">
                {AvailableEventTypes?.map((ele, index)=>(
                  <div
                  onClick={()=> handleFilterEvents(ele.value)} 
                  key={index+1}
                  className={cn("flex items-center py-3 px-3 gap-3 rounded-md group text-white transition-all duration-200 bg-primary",
                  filterType===ele.value?"bg-black text-background":null)}>
                    <TypographyH5 className="font-[600]" title={ele.title}/>
                  </div>
                ))}
              </div>

              <div className="
              w-full
              grid
              grid-cols-1
              md:grid-cols-3
              md:gap-10
              gap-5">
                {filterEvents?.map((ele: EventModal, index: number) => (
                    <motion.div  
                    key={ele.id}
                    className='flex relative group w-full shadow-lg'
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
      
                              <div onClick={()=> {
                                setImageIndex(index)
                                setOpen(true)
                              }} className='flex'>
                                <TypographyH5 title={'Read more'} className='text-white p-2 px-3 bg-primary ' />
                              </div>
                          </motion.div>
                      </div>
                    </motion.div>
                  ))}
              </div>

            </div>
      </div>

      <CustomDialog
      open={open} 
      setOpen={setOpen} >
        <div className="w-full h-full">
        <Careousell 
        careousellHeight= "h-[calc(80vh)]" 
        imageMode="contain"
        imageData = {filterEvents?.[imageIndex]?.images?.map((ele: any, index: number)=> ({id:index+1,title: filterEvents?.[imageIndex]?.title, image: ele}))}/>
        </div>
      </CustomDialog>
    </>
  )
}


export { Events }
