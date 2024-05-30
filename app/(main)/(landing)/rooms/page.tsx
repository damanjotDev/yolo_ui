
import {getRoomsWithServer} from "@/app/services";
import { Rooms } from "@/components/rooms/rooms";


async function Page() {
  const [rooms] = await Promise.all([
      getRoomsWithServer()
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
      <Rooms rooms={rooms}/>
    </div>
  );
}

export default Page;