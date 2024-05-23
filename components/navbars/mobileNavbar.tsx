'use client'
import { motion } from "@/app/utils";
import { TypographyH1, TypographyH3, TypographyH4, TypographyH5, TypographyP } from "../ui/Typography";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion"
import { useNavbarRoutes } from "@/app/hooks/useNavbarRoutes";
import { FiMenu } from "@/app/utils/icons";


const MobileNavbar = () => {
  const navbarRoutes = useNavbarRoutes();

  return (
        <div className="
        lg:hidden
        block">
          <Sheet>
            <SheetTrigger><FiMenu size={30}/></SheetTrigger>
            <SheetContent side="left"  className="w-[300px] flex flex-col gap-1">
             
                  {/* Logo Section */}
                  <div className="
                      flex
                      items-center
                      justify-start
                      mt-4">
                    <img
                    src="https://yolobackpackers.com/wp-content/uploads/2023/06/cropped-yolo-logo-18.png.webp"
                    className="object-contain max-w-[70%]"
                    />
                  </div>

                  {/* Mobile Navigation section */}
                  <Accordion type="single" collapsible className="w-full gap-2">
                    {navbarRoutes?.map((item)=>(
                      <AccordionItem key={item.id} value={item.id}>
                      <AccordionTrigger className="py-3" >
                        <TypographyH4 title={item.label}/>
                      </AccordionTrigger>

                      <AccordionContent className="flex flex-col gap-2">
                      {item?.dropdownItems?.map((ele)=>(
                        <TypographyH5 key={ele.id} className="hover:text-primary-foreground flex flex-col" title={ele?.title}/>
                      ))}
                      </AccordionContent>
                    </AccordionItem>
                    ))}
                  </Accordion>
             
            </SheetContent>
          </Sheet>
        </div>
  )
}

export {MobileNavbar }
