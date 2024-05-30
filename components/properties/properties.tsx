'use client'
import { PropertiesModal } from "@/app/utils/modals";
import PageInfromation from "../common/pageInfromation";
import propertyBackground from "@/app/assets/images/property.webp"
import { TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyP } from "../ui/Typography";
import { BsTelephoneFill, GoArrowRight, IoLocation, MdOutlineMarkEmailRead, RoutesName, Tilt, motion } from "@/app/utils"
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const Properties = ({properties}:{properties: PropertiesModal}) => {

  const navigate = useRouter();

  const childMotion = {
    rest: {
      width: '50px'
    },
    hover: {
      width: 'auto',
      transition: {
        duration: 0.4,
        ease: "linear"
      }
    }
  };

  const imageMotion = {
    rest: {
      paddingLeft: '0px'
    },
    hover: {
      paddingLeft: '60px',
      transition: {
        duration: 0.4,
        ease: "linear"
      }
    }
  };

  return (
      <div className={`
          h-full
          w-full
          flex
          flex-col
          gap-10`}>
            <PageInfromation 
            title="Properties" 
            description="Home / Properties" 
            imageUrl={propertyBackground}/>

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
               <TypographyH2 title="ALL PROPERTIES" />
              </motion.div>

            <div className="
            w-full
            grid
            grid-cols-1
            md:grid-cols-3
            md:gap-10
            gap-5">
              {properties?.rows?.map((ele)=>(
                <motion.div 
                key={ele.id}
                onClick={()=> navigate.push(RoutesName.Locations+"/"+ele?.id)}
                className="
                font-roboto-condensed
                h-[500px]
                relative"
                initial="rest" 
                whileHover="hover" 
                animate="rest">
                  <motion.div className="
                  w-full
                  h-full
                  rounded-md"
                  variants={imageMotion}>
                    <img src={ele.images[0]?.imageUrl}  alt="image" className="h-full w-full object-cover rounded-md"/>
                  </motion.div>

                  <div className="
                  absolute
                  left-5
                  inset-y-0
                  w-2
                  flex
                  items-center
                  group">
                    <motion.div 
                    className="
                    bg-accent
                    flex
                    flex-col
                    p-4
                    gap-4
                    rounded-lg
                    w-[50px]"
                    variants={childMotion}>
                      <div 
                      className="
                      flex
                      gap-2
                      transition-transform
                      duration-400
                      hover:text-primary">

                        <div className="
                        flex
                        items-center
                        justify-start">
                          <IoLocation size={20} className="-ml-1"/>
                        </div>

                        <div className="
                        flex
                        items-center 
                        justify-start
                        w-full truncate">
                          <TypographyP title={ele?.coordinates?.address || ""}/>
                        </div>

                      </div>

                      <div 
                      className="
                      flex
                      gap-3
                      transition-transform
                      duration-400
                      hover:text-primary">

                        <div className="
                        flex
                        items-center
                        justify-start">
                          <BsTelephoneFill size={15}/>
                        </div>

                        <div className="
                        flex
                        items-center 
                        justify-start
                        w-full truncate">
                          <TypographyP title={ele?.contactNo || 123456789}/>
                        </div>

                      </div>

                      <div 
                      className="
                      flex
                      gap-2
                      transition-transform
                      duration-400
                      hover:text-primary">

                        <div className="
                        flex
                        items-center
                        justify-start">
                          <MdOutlineMarkEmailRead size={20}/>
                        </div>

                        <div className="
                        flex
                        items-center 
                        justify-start
                        w-full truncate">
                          <TypographyP title={ele?.email || ""}/>
                        </div>

                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            </div>
      </div>
  )
}

export { Properties }
