import { getAboutWithServer, getServicesWithServer } from "@/app/services";
import { AboutDetails } from "@/components/about/about";
import ErrorPage from "@/components/common/error";

interface IParams {
  aboutId: string;
}

async function Page({ params }: { params: IParams }) {
  try {
    const [aboutDetails, services] = await Promise.all([
      getAboutWithServer(+params.aboutId),
      getServicesWithServer()
    ]);

    return (
      <div
        className="
        w-full
        h-auto
        flex
        flex-col
        text-[70px]"
          >
        <AboutDetails aboutDetails={aboutDetails} services={services} />
      </div>
    );
  } catch (error: any) {
    let err:string = error;
    return (<ErrorPage error={err}/>)
  }
}

export default Page;