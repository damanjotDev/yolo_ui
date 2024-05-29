'use client'
import { RoomsModal } from "@/app/utils/modals";
import PageInfromation from "../common/pageInfromation";
import roomBackground from "@/app/assets/images/roomBackground.webp"
import { TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyP } from "../ui/Typography";
import { RoutesName, motion } from "@/app/utils"
import { useRouter } from "next/navigation";

const Rooms = ({rooms}:{rooms: RoomsModal}) => {

  const navigate = useRouter();

  return (
      <div className={`
          h-full
          w-full
          flex
          flex-col
          md:gap-20
          gap-10`}>
            <PageInfromation 
            title="Rooms" 
            description="Home / Rooms" 
            imageUrl={roomBackground}/>

            <motion.div className="
            flex
            items-center
            justify-center
            text-primary"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'linear' }}
            viewport={{ once: true }}>
              <TypographyH2 title="ALL ROOMS" />
            </motion.div>

            <div className="
            w-full
            md:px-10
            px-5
            grid
            md:grid-cols-3
            grid-cols-1
            md:gap-10
            gap-5
            ">
              {rooms?.rows?.map((ele,index)=>(
                <motion.div className="
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
                    className="h-[350px] w-full object-cover"/>

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
                  mt-5">
                    <div className="
                    w-1/2
                    flex
                    flex-col
                    items-center
                    justify-center
                    p-4
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

export { Rooms }
