

import { getAboutsWithServer, getAboutWithServer, getExperiencesWithServer, getExperienceWithServer, getPropertiesWithServer, getServicesWithServer} from "@/app/services";
import { Navbar } from "@/components/navbars/navbar";
import { Footer } from "@/components/footer/footer";
import { AboutDetails } from "@/components/about/about";

interface IParams {
  aboutId: string;
}

async function Page({params}:{params: IParams}) {
  const [abouts, properties, aboutDetails, services] = await Promise.all([
      getAboutsWithServer(), 
      getPropertiesWithServer(),
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
      <Navbar properties = {properties}/>
      <AboutDetails aboutDetails={aboutDetails} services={services}/>
      <Footer abouts = {abouts} />
    </div>
  );
}

export default Page;