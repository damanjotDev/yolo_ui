
import { getExperiencesWithServer } from "@/app/services";
import { getReviewsWithServer } from "@/app/services/review";
import ErrorPage from "@/components/common/error";
import { Experiences } from "@/components/experiences/experiences";
import { Reviews } from "@/components/reviews/reviews";

interface IParams {
  experienceId: string;
}

async function Page({ params }: { params: IParams }) {
  try {
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
        <Reviews reviews={reviews} />
      </div>
    );
  } catch (error: any) {
    let err:string = error;
    return (<ErrorPage error={err}/>)
  }
}

export default Page;