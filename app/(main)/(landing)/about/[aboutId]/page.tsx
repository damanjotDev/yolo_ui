import { getAboutWithServer, getServicesWithServer} from "@/app/services";
import { AboutDetails } from "@/components/about/about";

interface IParams {
  aboutId: string;
}

async function Page({params}:{params: IParams}) {
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
      <AboutDetails aboutDetails={aboutDetails} services={services}/>
    </div>
  );
}

export default Page;