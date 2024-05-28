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
import { AboutsModal } from "@/app/utils/modals";




const HomeAbout = ({ abouts }: { abouts: AboutsModal }) => {

    const pathname = usePathname();
    const navigate = useRouter();

    const about = abouts?.rows?.find((ele) => ele?.isCover == true)

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
                    <motion.div className="
                    flex
                    items-center
                    text-black"
                        initial={{ x: 200 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        viewport={{ once: true }}>
                        <TypographyH2 title={about?.title || "loading"} />
                    </motion.div>

                    <motion.div
                        className="
                    flex
                    items-center
                    justify-center
                    text-foreground"
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeInOut'}}
                        viewport={{ once: true }}>
                        <div
                        className="
                        font-roboto-condensed 
                        text-sm 
                        tracking-wider"
                        dangerouslySetInnerHTML={{ __html: about?.description || "loading" }} />
                    </motion.div>

                    <motion.div
                        className="
                        flex
                        items-center
                        justify-center
                        text-foreground"
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeInOut'}}
                        viewport={{ once: true }}>
                        <button className="
                        flex
                        items-center
                        py-3
                        px-6
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
                            group-hover:text-background" title="MORE DETAILS" />
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
                            {!about?.images?.length ?
                                null
                                : about?.images?.length === 2 ?
                                    <div className="flex w-full h-full">
                                        <div
                                            className={cn('absolute top-0 left-0 h-[60%] w-[80%]')}>
                                            <img
                                                src={about?.images[0]?.imageUrl || ""}
                                                alt={'hello'}
                                                className='w-full h-full object-cover' />
                                        </div>
                                        <div
                                            className={cn('absolute h-[60%] bottom-0 right-0 w-[80%]')}>
                                             <img
                                                src={about?.images[1]?.imageUrl || ""}
                                                alt={'hello'}
                                                className='w-full h-full object-cover' />
                                        </div>
                                    </div>
                                    : <div
                                        className={cn('absolute w-[100%] h-[auto] top-0')}>
                                        <img
                                            src={about?.images[0]?.imageUrl || ""}
                                            alt={'hello'}
                                            className='w-[100%] h-[100%] object-contain' />
                                    </div>
                            }
                        </Tilt>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { HomeAbout } 