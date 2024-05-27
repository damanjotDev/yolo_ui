
import { Home } from "@/components/home/home";
import { getAboutsWithServer, getPropertiesWithServer, getRoomsWithServer, getServicesWithServer } from "@/app/services";
import { Navbar } from "@/components/navbars/navbar";


async function Page() {
  const [abouts, properties, rooms, services] = await Promise.all([getAboutsWithServer(), getPropertiesWithServer(), getRoomsWithServer(), getServicesWithServer()]);

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
      <Home abouts = {abouts} rooms = {rooms} services = {services}/>
    </div>
  );
}

export default Page;