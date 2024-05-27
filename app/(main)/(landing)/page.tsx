
import { Home } from "@/components/home/home";
import { getAboutsWithServer, getPropertiesWithServer, getRoomsWithServer } from "@/app/services";
import { Navbar } from "@/components/navbars/navbar";


async function Page() {
  const [abouts, properties, rooms] = await Promise.all([getAboutsWithServer(), getPropertiesWithServer(), getRoomsWithServer()])

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
      <Home abouts = {abouts} rooms = {rooms}/>
    </div>
  );
}

export default Page;