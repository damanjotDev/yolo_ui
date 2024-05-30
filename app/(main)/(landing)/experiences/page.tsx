
import { getExperiencesWithServer} from "@/app/services";
import { Experiences } from "@/components/experiences/experiences";

interface IParams {
  experienceId: string;
}

async function Page({params}:{params: IParams}) {
  const [experiences] = await Promise.all([
      getExperiencesWithServer()
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
      <Experiences experiences={experiences}/>
    </div>
  );
}

export default Page;