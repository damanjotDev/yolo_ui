
import { getExperienceWithServer} from "@/app/services";
import { ExperienceDeatils } from "@/components/experiences/experience";
import { notFound } from "next/navigation";

interface IParams {
  experienceId: string;
}

async function Page({params}:{params: IParams}) {
  const experienceDetails = await getExperienceWithServer(+params.experienceId)

  if(!experienceDetails) {
    notFound()
  }

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