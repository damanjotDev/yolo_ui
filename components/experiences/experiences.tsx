'use client'
import { ExperiencesModal, RoomsModal } from "@/app/utils/modals";
import PageInfromation from "../common/pageInfromation";
import experienceBackground from "@/app/assets/images/experience.webp"
import { TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyP } from "../ui/Typography";
import { GoArrowRight, RoutesName, Tilt, motion } from "@/app/utils"
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const Experiences = ({experiences}:{experiences: ExperiencesModal}) => {

  const navigate = useRouter();

  return (
      <div className={`
          h-full
          w-full
          flex
          flex-col
          gap-10`}>
            <PageInfromation 
            title="Experiences" 
            description="Home / Experiences" 
            imageUrl={experienceBackground}/>

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
               <TypographyH2 title="ALL EXPERIENCES" />
              </motion.div>

            <div className="
            w-full
            grid
            grid-cols-1
            md:grid-cols-3
            md:gap-10
            gap-5">
              {experiences?.rows?.map((ele, index) => experiences?.count % 4 === 0 ?
                (
                  <motion.div
                    key={ele?.id}
                    className={cn("flex items-center justify-center h-[400px] hover:shadow-lg")}
                    initial={(index + 1) % 2 === 1 ? { y: -200, opacity: 0 } : { x: 200, opacity: 0 }}
                    whileInView={(index + 1) % 2 === 1 ? { y: 0, opacity: 100 } : { x: 0, opacity: 100 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    viewport={{ once: true }}
                  >
                    <Tilt
                      tiltMaxAngleX={10}
                      tiltMaxAngleY={10}
                      transitionSpeed={250}
                      className="
                      w-full
                      h-full
                      ">
                      <motion.div 
                      className="
                      w-full
                      h-full
                      relative
                      group"
                      initial="rest"
                      whileHover="hover"
                      animate="rest">
                        <img src={ele.images?.[0]?.imageUrl} className="w-full object-cover h-full" alt="" />

                        <div className="
                        absolute 
                        top-0
                        left-0
                        bottom-0
                        right-0
                        p-4
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-2
                        text-background
                        bg-black
                        opacity-10"/>

                        <div className="
                        absolute 
                        top-0
                        left-0
                        bottom-0
                        right-0
                        p-4
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-1
                        text-background">
                          <motion.div 
                          className="
                          flex 
                          items-center 
                          justify-center"
                          initial={{ y: 100}}
                          whileInView={{ y: 0}}
                          transition={{ duration: 0.8, ease: 'linear' }}
                          viewport={{once: true}}>
                            <TypographyH2
                              className="font-[200] text-center"
                              title={ele.title} />
                          </motion.div>

                          <motion.div
                          className="
                          mt-10
                          flex
                          items-center
                          justify-center
                          text-foreground"
                          initial={{ y: 100}}
                          whileInView={{ y: 0}}
                          transition={{ duration: 0.8, ease: 'linear' }}
                          viewport={{once: true}}>
                            <button 
                            className="
                            flex
                            items-center
                            md:py-3
                            md:px-6
                            py-2
                            px-3
                            gap-3
                            rounded-md
                            group
                            text-background
                            transition-all
                            duration-200
                            bg-primary"
                              onClick={() => navigate.push(RoutesName.Experiences+'/'+ele.id)}>
                              <TypographyP
                                className="
                                font-[600]" 
                                title="VIEW DETAILS" />
                              <GoArrowRight
                                size={20}
                                className="
                                transition-all
                                duration-300
                                rotate-[-45deg]
                                group-hover:rotate-0"/>
                            </button>
                          </motion.div>
                        </div>

                      </motion.div>
                    </Tilt>
                  </motion.div>
                ) :
                null)}
            </div>
            </div>
      </div>
  )
}

export { Experiences }
