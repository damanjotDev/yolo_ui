
import { Home } from "@/components/home/home";
import { getAboutsWithServer, getExperiencesWithServer, getRoomsWithServer, getServicesWithServer } from "@/app/services";
import { getReviewsWithServer } from "@/app/services/review";


async function Page() {
  const [abouts, rooms, services, experiences, reviews] = await Promise.all([
      getAboutsWithServer(),  
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