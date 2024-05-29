
import { Home } from "@/components/home/home";
import { getAboutsWithServer, getExperiencesWithServer, getExperienceWithServer, getPropertiesWithServer} from "@/app/services";
import { Navbar } from "@/components/navbars/navbar";
import { Footer } from "@/components/footer/footer";
import { Experiences } from "@/components/experiences/experiences";

interface IParams {
  experienceId: string;
}

async function Page({params}:{params: IParams}) {
  const [abouts, properties,experiences] = await Promise.all([
      getAboutsWithServer(), 
      getPropertiesWithServer(),
      getExperiencesWithServer()
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
      <Experiences experiences={experiences}/>
      <Footer abouts = {abouts} />
    </div>
  );
}

export default Page;