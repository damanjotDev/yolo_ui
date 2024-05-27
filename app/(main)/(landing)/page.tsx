
import { Home } from "@/components/home/home";
import { getAboutsWithServer, getExperiencesWithServer, getPropertiesWithServer, getRoomsWithServer, getServicesWithServer } from "@/app/services";
import { Navbar } from "@/components/navbars/navbar";


async function Page() {
  const [abouts, properties, rooms, services, experiences] = await Promise.all([
      getAboutsWithServer(), 
      getPropertiesWithServer(), 
      getRoomsWithServer(), 
      getServicesWithServer(),
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
      <Home 
      abouts = {abouts} 
      rooms = {rooms} 
      services = {services}
      experiences = {experiences}/>
    </div>
  );
}

export default Page;