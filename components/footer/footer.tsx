'use client'
import { usePathname, useRouter} from "next/navigation";
import { motion } from "@/app/utils/animation";

import { FaChevronRight, FiSend, IoLocation, BsTelephoneFill, MdOutlineMarkEmailRead, BsLifePreserver } from "@/app/utils";
import { ReviewsModal, AboutsModal } from "@/app/utils/modals";
import { TypographyH1, TypographyH3, TypographyH4, TypographyH5, TypographyP } from "@/components/ui/Typography";




const Footer = ({abouts}:{abouts: AboutsModal}) => {
  // const navigation = useRouter();
  const about = abouts?.rows?.find((ele) => ele?.isCover == true)

  const usefullLinks = [
    {
      id: 1,
      title: 'Location',
      navigate: () => {}
    },
    {
      id: 2,
      title: 'My Bookings',
      navigate: () => {}
    },
    {
      id: 3,
      title: 'About us',
      navigate: () => {}
    },
    {
      id: 4,
      title: 'Privacy Policy',
      navigate: () => {}
    },
    {
      id: 5,
      title: 'Other Policies',
      navigate: () => {}
    },
    
  ]

  return (
    <div className="
    mt-10
    md:mt-20
    w-full 
    bg-muted
    px-5
    md:py-20
    py-10">
      <div className="
      w-full
      lg:mx-auto
      lg:w-[70%]
      grid
      grid-cols-1
      md:grid-cols-4
      text-background
      font-roboto-condensed
      gap-20">

        <div className="
        w-full
        grid
        grid-cols-1
        gap-3">

          <div className="h-14 w-14 rounded-full">
            <img 
            src={about?.images?.[0]?.imageUrl}
            className="h-full w-full object-cover rounded-full"/>
          </div>

          <div className="
          flex
          transition-transform
          duration-400
          hover:text-primary">
            <TypographyP title={about?.title || ""}/>
          </div>

          <div className="flex">
            <div 
            className="
            text-sm 
            leading-7 
            [&:not(:first-child)]:mt-6
            transition-transform
            duration-400
            hover:text-primary
            max-h-[200px]
            overflow-hidden"
            dangerouslySetInnerHTML={{__html: about?.description || ""}}/>
          </div>

        </div>

        <div className="
        w-full
        flex
        flex-col
        gap-6">

          <div className="
          flex
          items-center
          w-full
          transition-transform
          duration-400
          hover:text-primary">
            <TypographyH4
            className="font-semibold" 
            title={"USEFUL LINKS"} />
          </div>

          <div className="
          w-full
          flex
          flex-col
          gap-2">
            {usefullLinks?.map((ele)=>(
               <div 
               key={ele.id}
               className="
               flex
               gap-2
               transition-transform
               duration-400
               hover:text-primary">

                 <div className="
                 flex
                 items-center
                 justify-center">
                   <FaChevronRight size={10}/>
                 </div>

                 <div className="
                 flex
                 items-center justify-center">
                   <TypographyP title={ele?.title || ""}/>
                 </div>

               </div>
            ))}
          </div>

        </div>

        <div className="
        w-full
        flex
        flex-col
        gap-6">

          <div 
          className="
          w-full
          transition-transform
          duration-400
          hover:text-primary">
            <TypographyH4 
            className="font-semibold" 
            title={"CONTACT US"} />
          </div>

          <div className="
          w-full
          flex
          flex-col
          gap-2">
           
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
                 justify-start">
                   <TypographyP title={about?.coordinates?.address || ""}/>
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
                 justify-start">
                   <TypographyP title={about?.contactNo || 123456789}/>
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
                 justify-start">
                   <TypographyP title={about?.email || ""}/>
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
                   <BsLifePreserver size={18}/>
                 </div>

                 <div className="
                 flex
                 items-center 
                 justify-start">
                   <TypographyP title={"www.yolobackpackers.com"}/>
                 </div>

               </div>
          </div>

        </div>

        <div className="
        w-full
        flex
        flex-col
        gap-6">

          <div 
          className="
          w-full
          transition-transform
          duration-400
          hover:text-primary">
            <TypographyH4 
            className="font-semibold" 
            title={"AWARDS"} />
          </div>

          <div className="
          w-full
          grid
          grid-cols-1
          md:grid-cols-2
          gap-5
          items-start">
           {about?.awards?.map((ele, index)=>(
            <div 
            key={index+1}
            className="h-[100px]">
              <img src={ele?.imageUrl} className="h-full w-full object-contain"/>
            </div>
           ))}
          </div>

        </div>
        
      </div>
    </div>
  )
}

export { Footer } 


