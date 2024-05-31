import { toast } from "@/components/ui/use-toast";
import { sentMail } from "../api/axios";

export const sentNormalMail = async (payload: any) => {
    try {
        const {data} = await sentMail(payload)
        toast({
            title: "Success ",
            description: "Mail Sent successfully!",
            className:'font-roboto-condensed bg-primary text-white'
          })
        return data.data
    } catch (err) {
        const error: any = err;
        console.log('err', error)
        toast({
            title: "Error ",
            description: error?.message || "Oop's something went wrong!",
            className:'font-roboto-condensed bg-red-200'
          })
    }
  }
