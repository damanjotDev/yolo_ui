
import { getExperiencesWithServer} from "@/app/services";
import { getReviewsWithServer } from "@/app/services/review";
import { Experiences } from "@/components/experiences/experiences";
import { Reviews } from "@/components/reviews/reviews";


async function Page() {
  const [reviews] = await Promise.all([
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
      <Reviews reviews={reviews}/>
    </div>
  );
}

export default Page;