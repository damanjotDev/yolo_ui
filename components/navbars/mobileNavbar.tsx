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
import { FiMenu } from "@/app/utils/icons";
import { cn } from "@/lib/utils";

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

const MobileNavbar = ({navbarRoutes}:{navbarRoutes: NavbarRoutesProps[]}) => {

  return (
        <div className="
        lg:hidden
        flex
        ">
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
                    className="object-contain w-[auto] h-[50px]"
                    />
                  </div>

                  {/* Mobile Navigation section */}
                  <Accordion type="single" collapsible className="w-full gap-2">
                    {navbarRoutes?.map((item)=>(
                      <AccordionItem className={cn(item.active &&  "text-primary")} key={item.id} value={item.id}>
                      <AccordionTrigger className="py-3" onClick={item.navigate}>
                        <TypographyH4 title={item.label}/>
                      </AccordionTrigger>

                      <AccordionContent className="flex flex-col gap-1">
                      {item?.dropdownItems?.map((ele)=>(
                        <div className="
                        flex
                        items-start
                        justify-start"
                        key={ele.id}>
                          <TypographyP className="text-foreground hover:text-primary" title={ele?.title}/>
                        </div>
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

export default MobileNavbar 
