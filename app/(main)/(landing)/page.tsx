
import { Home } from "@/components/home/home";
import { getAboutsWithServer, getExperiencesWithServer, getHomesWithServer, getRoomsWithServer, getServicesWithServer } from "@/app/services";
import { getReviewsWithServer } from "@/app/services/review";
import ErrorPage from "@/components/common/error";


async function Page() {
  try {
    const [homes, abouts, rooms, services, experiences, reviews] = await Promise.all([
      getHomesWithServer(),
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
          homes={homes}
          abouts={abouts}
          rooms={rooms}
          services={services}
          experiences={experiences}
          reviews={reviews} />
      </div>
    );
  } catch (error: any) {
    let err:string = error;
    return (<ErrorPage error={err}/>)
  }
}

export default Page;