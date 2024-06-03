
import {getEventsWithServer} from "@/app/services";
import { Events } from "@/components/event/events";

interface IParams {
  experienceId: string;
}

async function Page() {
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
      <Events events={events}/>
    </div>
  );
}

export default Page;