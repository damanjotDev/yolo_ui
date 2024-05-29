
import { Home } from "@/components/home/home";
import { getAboutsWithServer, getExperiencesWithServer, getExperienceWithServer, getPropertiesWithServer} from "@/app/services";
import { Navbar } from "@/components/navbars/navbar";
import { Footer } from "@/components/footer/footer";
import { ExperienceDeatils } from "@/components/experiences/experience";

interface IParams {
  experienceId: string;
}

async function Page({params}:{params: IParams}) {
  const [abouts, properties, experienceDetails] = await Promise.all([
      getAboutsWithServer(), 
      getPropertiesWithServer(),
      getExperienceWithServer(+params.experienceId)
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
      <ExperienceDeatils experienceDetails={experienceDetails}/>
      <Footer abouts = {abouts} />
    </div>
  );
}

export default Page;