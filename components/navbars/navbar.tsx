'use client'
import { usePathname } from "next/navigation";
import {useScroll} from "@/app/hooks";
import { motion } from "@/app/utils/animation";
import { DesktopNavbar } from "./desktopNavbar";
import { MobileNavbar } from "./mobileNavbar";


const Navbar = () => {

  const pathname  = usePathname();
  const {scrolled} = useScroll();

  return (
      <motion.div className={`
          fixed
          top-0
          z-[50]
          w-full
          shadow-lg
          bg-white
          flex
          items-center
          justify-between
          h-auto
          px-5
          py-3`}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1 , y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}>

        {/* Logo Section */}
        <div className="
             w-[50%]
             lg:w-[15%]
             flex
             items-center
            ">
          <img
            src="https://yolobackpackers.com/wp-content/uploads/2023/06/cropped-yolo-logo-18.png.webp"
            className="object-contain w-[100%] h-[50px]"
          />
        </div>

        {/* Navigation section  for Desktop*/}
        <DesktopNavbar/>

        {/* Navigation section for mobile */}
        <MobileNavbar/>

      </motion.div>
  )
}

export { Navbar }
