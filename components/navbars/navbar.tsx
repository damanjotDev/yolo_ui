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
          flex
          items-center
          justify-between
          h-auto
          px-5
          py-3`}
          animate={{ background: scrolled?'white':'transparent' }}>
            <div className="
            w-full
            lg:mx-auto
            lg:w-[70%]
            flex
            items-center
            justify-between">
                {/* Logo Section */}
                <div className="
                      flex
                      items-center
                    ">
                  <img
                    src="https://yolobackpackers.com/wp-content/uploads/2023/06/cropped-yolo-logo-18.png.webp"
                    className="object-contain w-[auto] h-[50px]"
                  />
                </div>

                {/* Navigation section  for Desktop*/}
                <DesktopNavbar scrolled={scrolled}/>

                {/* Navigation section for mobile */}
                <MobileNavbar/>

            </div>
      </motion.div>
  )
}

export { Navbar }
