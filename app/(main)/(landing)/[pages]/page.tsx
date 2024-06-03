
import { getCategoriesWithServer, getPageWithServer} from "@/app/services";
import { PageDetails } from "@/components/pages/page";
import { Reviews } from "@/components/reviews/reviews";
import { notFound } from "next/navigation";

interface IParams {
  pages: string;
}

async function Page({params}:{params: IParams}) {
  const paramsArray = params.pages?.split("-")
  const paramId =  paramsArray?.[paramsArray.length-1]
  const [pageDetails, categories] = await Promise.all([
    getPageWithServer(+paramId),
    getCategoriesWithServer()
  ])

  if(!pageDetails || !categories) {
    notFound()
  }
  
  return (
    <div
      className="
      w-full
      h-auto
      flex
      flex-col
      text-[70px]"
    >
       <PageDetails pageDetails={pageDetails} categories = {categories}/>
    </div>
  );
}

export default Page;