
import { getEventsWithServer } from "@/app/services";
import ErrorPage from "@/components/common/error";
import { Events } from "@/components/event/events";

interface IParams {
  experienceId: string;
}

async function Page({ params }: { params: IParams }) {
  try {
    const [events] = await Promise.all([
      getEventsWithServer()
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
        <Events events={events} />
      </div>
    );
  } catch (error: any) {
    let err:string = error;
    return (<ErrorPage error={err}/>)
  }
}

export default Page;