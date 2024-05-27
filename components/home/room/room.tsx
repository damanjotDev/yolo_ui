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
import { RoomsModal } from "@/app/utils/modals";

import image3 from "@/app/assets/images/home3.jpg"



const HomeRoom = ({rooms}:{rooms: RoomsModal}) => {

    const pathname = usePathname();
    const navigate = useRouter();


    const hoverMotion = {
        rest: {
          opacity: 0
        },
        hover: {
            opacity: 0.8,
          transition: {
            duration: 1,
            ease: "easeInOut",
          }
        }
      };

    const hoverMotion1 = {
        rest: {
          opacity: 0
        },
        hover: {
            opacity: 100,
          transition: {
            duration: 1,
            ease: "easeInOut",
          }
        }
      };

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
                transition={{ duration: 1, ease: 'easeInOut' }}
                viewport={{ once: true }}>
                    <TypographyH2 className="" title="OUR TOP PICKS"/>
                </motion.div>
                <motion.div className="
                flex
                items-center
                justify-center
                font-roboto-condensed "
                initial={{ x: 200 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                viewport={{ once: true }}>
                    <TypographyH4 className="font-bold" title="Check out our best selling rooms!"/>
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
                {rooms?.rows?.map((ele, index)=>rooms?.count%4===0?
                (
                    <motion.div 
                    key={ele?.id}
                    className={
                    cn("flex items-center justify-center h-[250px]",
                    (index+1)%2===1 && "row-span-2 h-full")}
                    initial={(index+1)%2===1?{ y: -200, opacity: 0 }:{ x: 200, opacity: 0}}
                    whileInView={(index+1)%2===1?{ y: 0, opacity: 100 }:{ x: 0, opacity: 100}}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    viewport={{ once: true }}
                    >
                        <Tilt 
                        tiltMaxAngleX={5}
                        tiltMaxAngleY={5} 
                        scale={1.05}
                        transitionSpeed={250}
                        className="
                        w-full
                        h-full
                        ">
                            <motion.div className="
                            w-full
                            h-full
                            relative
                            group"
                            initial="rest" 
                            whileHover="hover" 
                            animate="rest">
                                <img src={ele.images?.[0]?.imageUrl} className="w-full object-cover h-full" alt=""/> 
                                <motion.div className="
                                hidden
                                group-hover:flex
                                items-center
                                justify-center
                                absolute
                                inset-x-0
                                bottom-0
                                p-7
                                bg-black
                                opacity-50"
                                variants={hoverMotion}/>
                                <motion.div className="
                                hidden
                                group-hover:flex
                                items-center
                                justify-center
                                absolute
                                inset-x-0
                                bottom-0
                                p-4"
                                variants={hoverMotion1}>
                                    <TypographyH4 
                                    className="
                                    truncate 
                                    text-background 
                                    font-bold" 
                                    title={ele?.title}/>
                                </motion.div>
                                
                            </motion.div>
                        </Tilt>
                    </motion.div>
                ):
                null)}
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
                transition={{ duration: 1, ease: 'easeInOut'}}
                viewport={{ once: true }}>
                <button className="
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
                border-2
                border-primary
                hover:bg-primary"
                onClick={() => navigate.push(RoutesName.Abouts)}>
                    <TypographyP
                    className="
                    font-[600] 
                    text-primary
                    group-hover:text-background" title="VIEW ALL ROOMS" />
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
    )
}

export { HomeRoom } 