
import { getRoomWithServer, getRoomsWithServer } from "@/app/services";
import ErrorPage from "@/components/common/error";
import { RoomDeatils } from "@/components/rooms/room";

interface IParams {
  roomId: string;
}

async function Page({ params }: { params: IParams }) {
  try {
    const [roomDetails, rooms] = await Promise.all([
      getRoomWithServer(+params.roomId),
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
        <RoomDeatils roomDetails={roomDetails} rooms={rooms} />
      </div>
    );
  } catch (error: any) {
    let err:string = error;
    return (<ErrorPage error={err}/>)
  }
}

export default Page;