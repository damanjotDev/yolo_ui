
import { Home } from "@/components/home/home";
import { getAboutsWithServer, getExperiencesWithServer, getPropertiesWithServer, getRoomsWithServer, getServicesWithServer } from "@/app/services";
import { Navbar } from "@/components/navbars/navbar";
import { getReviewsWithServer } from "@/app/services/review";
import { Footer } from "@/components/footer/footer";
import { Rooms } from "@/components/rooms/rooms";


async function Page() {
  const [abouts, properties, rooms] = await Promise.all([
      getAboutsWithServer(), 
      getPropertiesWithServer(),
      getRoomsWithServer()
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
      <Rooms rooms={rooms}/>
      <Footer abouts = {abouts} />
    </div>
  );
}

export default Page;