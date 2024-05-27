'use client'
import { usePathname, useRouter } from "next/navigation";
import { motion } from "@/app/utils/animation";

import { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyP } from "../../ui/Typography";
import { GoArrowRight, RoutesName, Tilt } from "@/app/utils";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {  ServicesModal } from "@/app/utils/modals";




const HomeServices = ({services}:{services: ServicesModal}) => {



    return (
        <div className="
        w-full
        lg:mx-auto
        lg:w-[70%]
        px-5
        py-5">
            <div className="
            w-full
            flex
            flex-col
            gap-2
            items-center
            justify-center">
                <motion.div className="
                flex
                items-center
                justify-center"
                initial={{ x: 200 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1, ease: 'linear' }}
                viewport={{ once: true }}>
                    <TypographyH2 title="Services We Offer"/>
                </motion.div>
                <motion.div className="
                flex
                items-center
                justify-center
                font-roboto-condensed "
                initial={{ x: 200 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1, ease: 'linear' }}
                viewport={{ once: true }}>
                    <TypographyH4 className="font-bold" title="Check out our awesome services"/>
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
                {services?.rows?.map((ele, index)=> (
                  <motion.div  
                  key={ele.id}
                  className='flex relative group w-full shadow-lg'
                  initial={{x: 200, opacity: 0}}
                  whileInView={{x:0, opacity: 1}}
                  transition={{duration:1, ease: 'linear'}}
                  viewport={{once: true}}>
                    <div className='h-[370px] relative overflow-hidden hover:border-primary hover:border w-full'>
                      {/* Image Section */}
                      <img src={ele.images?.[0]?.imageUrl} className='w-full h-full object-cover' />
    
                      {/* Introduction section */}
                      <div className='
                      group-hover:hidden
                      absolute
                      bottom-[-20px]
                      left-0
                      right-0
                      w-full
                      h-[130px]
                      bg-black
                      opacity-85
                      skew-y-[-6deg]
                      group-hover:bg-white
                      group-hover:opacity-100'>
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
                      opacity-80
                      group-hover:block
                      group-hover:bg-black
                     '
                     initial={{height: '0%'}}
                     whileInView={{height: '100%'}}
                     transition={{duration: 1, ease: 'linear'}}/>
    
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
                        transition={{duration: 1, ease: 'easeInOut'}}>
    
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
    
                            <div onClick={()=> {}} className='flex'>
                             <TypographyH5 title={'Read more'} className='text-white p-2 px-3 bg-primary ' />
                            </div>
                        </motion.div>
                    </div>
                  </motion.div>
                ))}
            </div>
        </div>
    )
}

export { HomeServices } 