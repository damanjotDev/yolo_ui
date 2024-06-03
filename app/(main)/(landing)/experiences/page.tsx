
import { getExperiencesWithServer } from "@/app/services";
import ErrorPage from "@/components/common/error";
import { Experiences } from "@/components/experiences/experiences";

interface IParams {
  experienceId: string;
}

async function Page() {
  try {
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
        <Experiences experiences={experiences} />
      </div>
    );
  } catch (error: any) {
    let err:string = error;
    return (<ErrorPage error={err}/>)
  }
}

export default Page;