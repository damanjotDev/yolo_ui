
import { getExperienceWithServer} from "@/app/services";
import { ExperienceDeatils } from "@/components/experiences/experience";

interface IParams {
  experienceId: string;
}

async function Page({params}:{params: IParams}) {
  const experienceDetails = await getExperienceWithServer(+params.experienceId)

  return (
    <div
      className="
      w-full
      h-auto
      flex
      flex-col
      text-[70px]"
    >
      <ExperienceDeatils experienceDetails={experienceDetails}/>
    </div>
  );
}

export default Page;