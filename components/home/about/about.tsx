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




export const HomeAbout = () => {

    const pathname = usePathname();
    const navigate = useRouter();

    const dispatch = useAppDispatch();
    const { aboutsLoading, abouts, error, aboutDetails } = useTypedSelector((state) => state.About);

    useEffect(() => {
        const about = abouts?.rows?.find((ele) => ele?.isCover == true)
        dispatch(AboutActions.setAboutDetails(about ? about : null))
    }, [aboutsLoading])

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
                w-1/2
                flex
                flex-col
                items-start
                justify-center
                gap-10">
                    <motion.div className="
                    flex
                    items-center
                    text-black"
                        initial={{ x: 300 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        viewport={{ once: true }}>
                        <TypographyH2 title={aboutDetails?.title || "loading"} />
                    </motion.div>

                    <motion.div
                        className="
                    flex
                    items-center
                    justify-center
                    text-foreground"
                        initial={{ x: 300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeInOut', delay: 0.3 }}
                        viewport={{ once: true }}>
                        <div
                            className="
                        font-roboto-condensed 
                        text-sm 
                        tracking-wider"
                            dangerouslySetInnerHTML={{ __html: aboutDetails?.description || "loading" }} />
                    </motion.div>

                    <motion.div
                        className="
                        flex
                        items-center
                        justify-center
                        text-foreground"
                        initial={{ x: 300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
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
                        onClick={()=> navigate.push(RoutesName.Abouts)}>
                            <TypographyP 
                            className="
                            font-[600] 
                            text-primary
                            group-hover:text-background" title="MORE DETAILS"/>
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
                w-1/2
                flex
                items-start
                justify-center">
                    <div className="
                    flex
                    items-center
                    w-full
                    h-full">
                        {/* Image Section */}
                        <Tilt className="w-full h-full relative">
                            {!aboutDetails?.images?.length ?
                                null
                                : aboutDetails?.images?.length === 2 ?
                                   <>
                                    <div
                                    className={cn('absolute top-0 left-0 w-[80%]')}>
                                        <img
                                        src={aboutDetails?.images[0]?.imageUrl || ""}
                                        alt={'hello'}
                                        className='w-[100%] h-[100%] object-contain' />
                                    </div> 
                                    <div
                                    className={cn('absolute top-[30%] bottom-[0%] right-0 w-[80%]')}>
                                        <img
                                        src={aboutDetails?.images[1]?.imageUrl || ""}
                                        alt={'hello'}
                                        className='w-[100%] h-[100%]' />
                                    </div> 
                                   </>
                                :   <div
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
        </div>
    )
}

