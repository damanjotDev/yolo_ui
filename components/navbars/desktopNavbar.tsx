
import { motion } from "@/app/utils"
import { TypographyH1, TypographyH3, TypographyH4, TypographyH5, TypographyP } from "@/components/ui/Typography";

import { useNavbarRoutes } from "@/app/hooks/useNavbarRoutes";
import { FaChevronDown, GoArrowRight} from "@/app/utils/icons"
import { cn } from "../../lib/utils";
import { useSocialLink, useScroll} from "@/app/hooks/index";
import { usePathname } from "next/navigation";


const DesktopNavbar = () => {
  const navbarRoutes = useNavbarRoutes();
  const socialLinkRoutes =  useSocialLink();
  const pathname = usePathname();
  const {scrolled} = useScroll();



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
          <div className="
              flex
              items-center">

                {navbarRoutes?.map((item)=>(
                  <motion.div className="
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
                    
                    <div className="
                    flex
                    items-center
                    gap-2">
                      <TypographyH4 title={item.label}/>
                      <FaChevronDown 
                      size={15} 
                      className="
                      mt-2 
                      transition-all 
                      duration-500 
                      ease-in-out 
                      group-hover:rotate-180"/>
                    </div>
  
                    <motion.div className="
                      w-full
                      borber-b
                      border-[2px]
                      border-primary-foreground"
                      variants={textMotion}/>
                  </motion.div> 
                ))}
          </div>

          {/* Social links */}

          <div className="
          flex
          items-center
          gap-3">
            {socialLinkRoutes?.map(({id, icon: Icon})=> 
            <Icon 
            size={18} 
            className="
            mt-[-6px] 
            text-border
            transition-all
            cursor-pointer
            hover:text-primary-foreground"/> )}
          </div>

          {/* Free Quote */}
          <div className="
          ml-4
          flex
          item-center
          ">
            <button className="
            flex
            items-center
            py-3
            px-6
            gap-3
            bg-muted
            rounded-md
            group
            text-primary-foreground
            transition-all
            duration-200
            hover:text-white
            hover:bg-primary
            ">
              <TypographyH5 className="font-[600]" title="Free Quote"/>
              <GoArrowRight 
              size={20}
              className="
              transition-all
              duration-300
              rotate-[-45deg]
              group-hover:rotate-0"/>
            </button>
          </div>
        </div>
  )
}

export { DesktopNavbar }
