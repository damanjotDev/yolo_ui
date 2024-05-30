'use client'
import dynamic from "next/dynamic";
import { usePathname, useRouter } from "next/navigation";
import {useScroll} from "@/app/hooks";
import { motion } from "@/app/utils/animation";
import { PropertiesModal } from "@/app/utils/modals";
import { MdOutlineAnalytics, RoutesName, RxDashboard } from "@/app/utils";
import DesktopNavbar from "./desktopNavbar";
import MobileNavbar from "./mobileNavbar";

const Navbar = ({properties}:{properties: PropertiesModal}) => {

  const pathname = usePathname();
  const navigate = useRouter();
  const {scrolled} = useScroll();
  
  const navbarRoutes=  [
          {
              id: '1',
              navigate: () => navigate.push(RoutesName.Home),
              icon: RxDashboard,
              active: RoutesName.Home===pathname,
              label: 'Home'
              
          },
          {
              id: '2',
              navigate: () => navigate.push(RoutesName.Locations),
              icon: MdOutlineAnalytics,
              active: RoutesName.Locations===pathname,
              label: 'Locations',
              dropdownItems: properties?.rows?.map((item)=>({id: item?.id, title: item?.title,  navigate: () => navigate.push(RoutesName.Locations+"/"+item.id)}))
          },
          {
              id: '3',
              navigate: () => navigate.push(RoutesName.Experiences),
              icon: RxDashboard,
              active: RoutesName.Experiences===pathname,
              label: 'Experiences'
          },
          {
              id: '4',
              navigate: () => navigate.push(RoutesName.Gallery),
              icon: MdOutlineAnalytics,
              active: RoutesName.Gallery===pathname,
              label: 'Gallery'
          },
          {
              id: '5',
              navigate: () => navigate.push(RoutesName.Adventure),
              icon: MdOutlineAnalytics,
              active: RoutesName.Adventure===pathname,
              label: 'Adventure Awaits', 
              dropdownItems: [
                  {
                      id:1, 
                      title: 'Blog', 
                      navigate: ()=> navigate.push(RoutesName.Adventure)
                  },
                  {
                      id:2, 
                      title: 'Franchise', 
                      navigate: ()=> navigate.push(RoutesName.Franchise)
                  },
                  {
                      id:3, 
                      title: 'Contact Us', 
                      navigate: ()=> navigate.push(RoutesName.Contact)
                  }
              ]
          },
      ]

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
                <DesktopNavbar scrolled={scrolled} navbarRoutes={navbarRoutes}/>

                {/* Navigation section for mobile */}
                <MobileNavbar navbarRoutes={navbarRoutes}/>

            </div>
      </motion.div>
  )
}

export { Navbar }
