'use client'
import {CategoriesModal, PageModal} from "@/app/utils/modals";
import {TypographyH2, TypographyH4, TypographyH5, TypographyP} from "../ui/Typography";
import { FaChevronRight, motion } from "@/app/utils"
import { useRouter } from "next/navigation";

import Careousell from "../common/careousel";
import { Input } from "../ui/input";


const PageDetails = ({pageDetails, categories}:{pageDetails: PageModal, categories: CategoriesModal}) => {

  const navigate = useRouter();

  const ImageData = pageDetails?.images?.map((ele, index)=>({id:index+1,title: pageDetails?.title, image: ele}))

  return (
      <div className={`
          h-full
          w-full
          flex
          flex-col
          md:gap-20
          gap-10`}>

            <Careousell imageData = {ImageData}/>

            <motion.div className="
            flex
            items-center
            justify-center
            text-primary"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'linear' }}
            viewport={{ once: true }}>
              <TypographyH2 title={`${pageDetails.title?.toUpperCase()} DETAILS`} />
            </motion.div>

            <div className="
            md:mb-20
            mb-10
            md:p-10
            p-5
            w-full
            lg:mx-auto
            lg:w-[70%]
            font-roboto-condensed
            flex
            md:flex-row
            flex-col
            gap-10">
                <div className="
                 flex
                 items-start
                 md:w-[80%]">
                    <motion.div
                    className="
                    font-roboto-condensed 
                    text-sm 
                    tracking-wider
                    font-[500]"
                    dangerouslySetInnerHTML={{ __html: pageDetails?.description || "loading" }} 
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'linear', delay: 0.2 }}
                    viewport={{ once: true }}/>
                </div>
                <div className="
                 flex
                 flex-col
                 items-start
                 gap-10">
                   <div className="
                   flex
                   flex-col
                   justify-center
                   gap-5">
                    <div className="
                    flex
                    items-center
                    gap-3">
                      <FaChevronRight className="p-1 h-5 w-5 rounded-sm bg-primary text-background"/>
                      <div className="
                      flex
                      items-center
                      justify-center">
                        <TypographyH4 className="font-bold" title={"SEARCH"}/>
                      </div>
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <Input  type="text" id="search" placeholder="Search"/>
                  </div>
                   </div>

                   <div className="
                   w-full
                   flex
                   flex-col
                   justify-center
                   gap-5">
                    <div className="
                    flex
                    items-center
                    gap-3">
                      
                      <div className="
                      flex
                      items-center
                      justify-center">
                        <TypographyH4 className="font-bold" title={"CATEGORIES"}/>
                      </div>
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      {categories?.rows?.map((ele)=>(
                        <div className="flex items-center w-full justify-between p-2 border-b-[1px]">
                          <TypographyH5 className="font-bold text-gray-500" title={ele.title}/>
                          <FaChevronRight className="p-1 h-5 w-5 rounded-sm bg-primary text-background"/>
                        </div>
                      ))}
                  </div>
                   </div>
                </div>
            </div>

      </div>
  )
}

export { PageDetails }
