
import {getRoomWithServer, getRoomsWithServer} from "@/app/services";
import { RoomDeatils } from "@/components/rooms/room";
import { notFound } from "next/navigation";

interface IParams {
  roomId: string;
}

async function Page({params}:{params: IParams}) {
  const [roomDetails, rooms] = await Promise.all([
      getRoomWithServer(+params.roomId),
      getRoomsWithServer()
    ]);

    if(!roomDetails || !rooms) {
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
      <RoomDeatils roomDetails={roomDetails} rooms={rooms}/>
    </div>
  );
}

export default Page;