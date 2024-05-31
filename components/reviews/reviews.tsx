'use client'
import { ReviewsModal} from "@/app/utils/modals";
import PageInfromation from "../common/pageInfromation";
import reviewBackground from "@/app/assets/images/review.jpg"
import { TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyP } from "../ui/Typography";
import { FaStar, motion } from "@/app/utils"
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const Reviews = ({reviews}:{reviews: ReviewsModal}) => {

  const navigate = useRouter();

  return (
      <div className={`
          h-full
          w-full
          flex
          flex-col
          gap-10
          bg-accent
          md:pb-10
          pb-5`}>
            <PageInfromation 
            title="Experiences" 
            description="Home / Reviews" 
            imageUrl={reviewBackground}/>

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
               <TypographyH2 title="ALL REVIEWS" />
              </motion.div>

            <div className="
            w-full
            grid
            grid-cols-1
            md:grid-cols-3
            md:gap-10
            gap-5">
               {reviews?.rows?.map((ele, index)=>(
                <motion.div 
                key={ele.id}
                className="
                flex 
                flex-col 
                gap-10  
                font-roboto-condensed"
                initial={{scale: 0.8, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                transition={{duration: 0.8, ease: 'linear'}}
                viewport={{once: true}}>

                  <div className="
                  hover:shadow-lg
                  hover:scale-[1.01]
                  transition-transform
                  duration-500
                  bg-background
                  rounded-md
                  p-10
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-5
                  h-[330px]">
                    <div className="
                    flex
                    items-center
                    justify-center">
                      <TypographyH3 title={ele?.title} />
                    </div>

                    <div className="
                        flex
                        items-center
                        justify-center
                        gap-2">
                          {Array.from({length: 5}).map((_, index)=>(
                            <FaStar 
                            key={index} 
                            size={20} 
                            className={cn("border-0",index+1<=ele?.rating?"text-yellow-500":"transparent")}/>
                          ))}
                    </div>
                  
                    <div className="
                    flex
                    text-center
                    max-h-[200px]
                    overflow-auto">
                        <TypographyH4 className="text-sm"  title={ele?.description}/>
                    </div>
                  </div>

                  <div className="
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-3">
                    <div className="
                    flex
                    items-center
                    justify-center">
                      <img 
                      src={ele?.user?.image?.imageUrl} 
                      alt="no image"
                      className="h-[80px] w-[80px] rounded-full"/>
                    </div>

                    <div className="
                    flex
                    flex-col
                    gap-2">

                      <div className="flex w-[70%] text-[30px]">
                        <TypographyH4 className="font-bold" title={ele?.user?.name}/>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            </div>
      </div>
  )
}

export { Reviews }
