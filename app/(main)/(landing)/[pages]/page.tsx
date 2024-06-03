
import { getCategoriesWithServer, getPageWithServer } from "@/app/services";
import ErrorPage from "@/components/common/error";
import { PageDetails } from "@/components/pages/page";

interface IParams {
  pages: string;
}

async function Page({ params }: { params: IParams }) {
  try {
    const paramsArray = params.pages?.split("-")
    const paramId =  paramsArray?.[paramsArray.length-1]
    const [pageDetails, categories] = await Promise.all([
      getPageWithServer(+paramId),
      getCategoriesWithServer()
    ])
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
  } catch (error: any) {
    let err:string = error;
    return (<ErrorPage error={err}/>)
  }
}

export default Page;