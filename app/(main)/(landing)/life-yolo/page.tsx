
import { Home } from "@/components/home/home";
import { getAboutsWithServer, getEventsWithServer, getPropertiesWithServer} from "@/app/services";
import { Navbar } from "@/components/navbars/navbar";
import { Footer } from "@/components/footer/footer";
import { Events } from "@/components/event/events";

interface IParams {
  experienceId: string;
}

async function Page({params}:{params: IParams}) {
  const [abouts, properties,events] = await Promise.all([
      getAboutsWithServer(), 
      getPropertiesWithServer(),
      getEventsWithServer()
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
      <Events events={events}/>
      <Footer abouts = {abouts} />
    </div>
  );
}

export default Page;