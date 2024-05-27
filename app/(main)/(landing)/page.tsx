
import { Home } from "@/components/home/home";
import { getAboutsWithServer, getExperiencesWithServer, getPropertiesWithServer, getRoomsWithServer, getServicesWithServer } from "@/app/services";
import { Navbar } from "@/components/navbars/navbar";
import { getReviewsWithServer } from "@/app/services/review";


async function Page() {
  const [abouts, properties, rooms, services, experiences, reviews] = await Promise.all([
      getAboutsWithServer(), 
      getPropertiesWithServer(), 
      getRoomsWithServer(), 
      getServicesWithServer(),
      getExperiencesWithServer(),
      getReviewsWithServer()
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
      experiences = {experiences}
      reviews= {reviews}/>
    </div>
  );
}

export default Page;