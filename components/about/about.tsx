'use client'
import { AboutModal, ExperienceModal, ServicesModal } from "@/app/utils/modals";
import { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyP } from "../ui/Typography";
import { GoArrowRight, RoutesName, Tilt, motion } from "@/app/utils"
import { useRouter } from "next/navigation";

import Careousell from "../common/careousel";
import { cn } from "@/lib/utils";
import { AnimatedCounter } from "../common/animatedCounter";

const aboutData = [
  {
    title: 'GUEST HOSTED',
    value: 97637
  },
  {
    title: 'NO OF PROPERTIES',
    value: 4
  },
  {
    title: 'STAFF',
    value: 20
  },
  {
    title: 'DESTINATIONS',
    value: 3
  }
]

const AboutDetails = ({ aboutDetails, services }: { aboutDetails: AboutModal, services: ServicesModal }) => {

  const navigate = useRouter();

  const ImageData = aboutDetails?.images?.map((ele, index) => ({ id: index + 1, title: aboutDetails?.title, image: ele }))

  return (
    <div 
    className="
    h-full
    w-full
    flex
    flex-col
    md:gap-20
    gap-10">

      <Careousell imageData={ImageData} />

      <div className="
      md:p-10
      p-5
      w-full
      lg:mx-auto
      lg:w-[70%]
      flex
      flex-col
      md:gap-20
      gap-10">

        <motion.div 
        className="
        flex
        items-center
        justify-center
        text-primary"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'linear' }}
        viewport={{ once: true }}>
          <TypographyH2 title="ABOUT DETAILS" />
        </motion.div>

        <div className="
        w-full
        flex
        flex-col
        md:flex-row
        md:gap-20
        gap-10">
          <div className="
          w-full
          md:w-1/2
          flex
          flex-col
          items-start
          justify-center
          gap-10">
            <motion.div 
            className="
            flex
            items-center
            text-black"
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true }}>
              <TypographyH2 title={aboutDetails?.title || "loading"} />
            </motion.div>

            <motion.div
            className="
            flex
            items-center
            justify-center
            text-foreground"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true }}>
              <div
              className="
              font-roboto-condensed 
              text-sm 
              tracking-wider"
              dangerouslySetInnerHTML={{ __html: aboutDetails?.description || "loading" }} />
            </motion.div>

          </div>

          <div className="
          w-full
          md:w-1/2
          flex
          items-start
          justify-center">
            <div className="
            flex
            items-center
            w-full
            h-[500px]">
              {/* Image Section */}
              <Tilt className="w-full h-full relative">
                {!aboutDetails?.images?.length ?
                  null
                  : aboutDetails?.images?.length === 2 ?
                    <div className="flex w-full h-full">
                      <div
                        className={cn('absolute top-0 left-0 h-[60%] w-[80%]')}>
                        <img
                          src={aboutDetails?.images[0]?.imageUrl || ""}
                          alt={'hello'}
                          className='w-full h-full object-cover' />
                      </div>
                      <div
                        className={cn('absolute h-[60%] bottom-0 right-0 w-[80%]')}>
                        <img
                          src={aboutDetails?.images[1]?.imageUrl || ""}
                          alt={'hello'}
                          className='w-full h-full object-cover' />
                      </div>
                    </div>
                    : <div
                      className={cn('absolute w-[100%] h-[auto] top-0')}>
                      <img
                        src={aboutDetails?.images[0]?.imageUrl || ""}
                        alt={'hello'}
                        className='w-[100%] h-[100%] object-contain' />
                    </div>
                }
              </Tilt>
            </div>
          </div>
        </div>

        <div className="
        flex
        md:flex-row
        flex-col
        items-center
        md:gap-10
        gap-5">
          {aboutData?.map((ele,index)=>(
            <div 
            key={index+1}
            className="
            p-5
            w-full
            md:w-[25%]
            flex
            flex-col
            gap-2
            justify-center
            items-center
            border-[1px]
            border-input
            font-roboto-condensed">
              <div className="flex">
                <AnimatedCounter from ={0} to={ele.value}/>
              </div>
              <div className="flex">
                <TypographyH3 className="font-bold" title={ele.title}/>
              </div>
            </div>
          ))}
        </div>

        <motion.div 
        className="
        flex
        items-center
        justify-center
        text-primary"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'linear' }}
        viewport={{ once: true }}>
          <TypographyH2 title="SERVICES" />
        </motion.div>

        <div className="
        w-full
        grid
        grid-cols-1
        md:grid-cols-4
        md:gap-10
        gap-5">
          {services?.rows?.map((ele, index)=> (
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
        
        <motion.div 
        className="
        flex
        items-center
        justify-center
        text-primary"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'linear' }}
        viewport={{ once: true }}>
          <TypographyH2 title="AWARDS" />
        </motion.div>

        <div className="
        grid
        grid-cols-1
        md:grid-cols-4
        md:gap-10
        gap-5">
          {aboutDetails?.awards?.map((ele,index)=>(
            <div 
            key={index+1}
            className="
            hover:scale-105
            transition-all
            duration-500
            shadow-lg
            rounded-lg
            flex
            flex-col
            gap-1
            justify-center
            items-center
            border-[1px]
            border-input
            font-roboto-condensed">
              <img src={ele.imageUrl} className="w-full h-full object-cover rounded-lg"/>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}

export { AboutDetails }
