'use client'
import { RoutesName, motion } from "@/app/utils"
import { TypographyH1, TypographyH3, TypographyH4, TypographyH5, TypographyP } from "@/components/ui/Typography";
import { FaChevronDown, GoArrowRight} from "@/app/utils/icons"
import { cn } from "../../lib/utils";
import { useSocialLink, useScroll} from "@/app/hooks/index";
import { usePathname } from "next/navigation";

interface NavbarRoutesProps {
  id: string;
  navigate: () => void;
  icon: any;
  active: boolean;
  label: string;
  dropdownItems?: undefined | {
    id: number;
    title: string;
    navigate: () => void;
  }[];
}

const DesktopNavbar = ({scrolled, navbarRoutes}:{scrolled?:boolean, navbarRoutes: NavbarRoutesProps[]}) => {

  const pathname = usePathname()

  const textMotion = {
    rest: {
      color: "grey",
      scaleX: 0,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn"
      }
    },
    hover: {
      color: "blue",
      scaleX: 1,
      borderRadius: "5px",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut"
      }
    }
  };

  const textMotion1 = {
    rest: {
      width: 0,
      border:0,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn"
      }
    },
    hover: {
      width: 18,
      height: 4,
      background: "hsl(var(--primary))",
      borderRadius: "5px",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut",
      }
    }
  };

  const dropDownMotion = {
    rest: {
      scale: 0,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeIn"
      }
    },
    hover: {
      scale: 1,
      borderRadius: "5px",
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeOut",
      }
    }
  };
  return (
        <div className="
            hidden
            lg:flex
            items-center
            justify-between
            gap-5">

          {/* Page Navigation */}
          <div 
          className="
              flex
              items-center">

                {navbarRoutes?.map((item)=>(
                  <motion.div 
                  key={item.id}
                  className="
                  relative
                  flex
                  flex-col
                  items-center
                  gap-2
                  p-4
                  group"
                  initial="rest" 
                  whileHover="hover" 
                  animate="rest">
                    
                    <div className= {cn(" flex items-center gap-2 transition-all  duration-500  text-background group-hover:text-primary",
                    scrolled&&"text-foreground", item.active &&  "text-primary",pathname===RoutesName.Franchise && "text-foreground")} 
                    onClick={item.navigate}>
                      <TypographyP title={item.label}/>
                      <FaChevronDown 
                      size={15} 
                      className="
                      mt-2 
                      transition-all 
                      group-hover:rotate-180"/>
                    </div>
  
                    <motion.div className="
                      w-full
                      borber-b
                      border-[2px]
                      border-primary"
                      variants={textMotion}/>

                       {/* Drop down section */}
  
                    <motion.div 
                    className={cn(`
                    hidden
                    absolute
                    w-auto
                    z-50
                    top-[100%]
                    left-0
                    flex-col
                    group-hover:flex`)}
                    variants={dropDownMotion}>
                     <div 
                     className={cn(`
                     bg-background 
                     shadow-lg 
                     rounded-lg
                     flex
                     flex-col 
                     gap-2 ${item?.dropdownItems?.length && "p-5"}`)}>
                          {item?.dropdownItems?.map((ele)=>(
                          
                              <motion.div 
                              key={ele.id}
                              className="
                                flex
                                items-center
                                w-[150px]
                                gap-2"
                                initial="rest" 
                                whileHover="hover" 
                                animate="rest"
                                onClick={ele.navigate}>
                                  <motion.div 
                                  className="
                                  borber-b
                                  border-primary"
                                  variants={textMotion1}/>
                                  <div 
                                  className="
                                  flex
                                  items-center
                                  justify-center">
                                    <TypographyP  className="text-foreground hover:text-primary" title={ele?.title}/>
                                  </div>
                                </motion.div>
                            
                          ))}
                     </div>
                    </motion.div>
                  </motion.div> 
                ))}
          </div>

          {/* Free Quote */}
          <div className="
          ml-4
          flex
          item-center
          ">
            <div className="
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
            bg-primary"
            onClick={()=> window.open('https://www.airbnb.co.in/users/show/138737073','_blank')}>
              <TypographyH5 className="font-[600]" title="BOOK ONLINE"/>
              <GoArrowRight 
              size={20}
              className="
              transition-all
              duration-300
              rotate-[-45deg]
              group-hover:rotate-0"/>
            </div>
          </div>
        </div>
  )
}

export default DesktopNavbar 
