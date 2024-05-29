
import { Home } from "@/components/home/home";
import { getAboutsWithServer, getExperiencesWithServer, getPropertiesWithServer, getRoomWithServer, getRoomsWithServer, getServicesWithServer } from "@/app/services";
import { Navbar } from "@/components/navbars/navbar";
import { Footer } from "@/components/footer/footer";
import { Rooms } from "@/components/rooms/rooms";
import { RoomDeatils } from "@/components/rooms/room";

interface IParams {
  roomId: string;
}

async function Page({params}:{params: IParams}) {
  const [abouts, properties, roomDeatils, rooms] = await Promise.all([
      getAboutsWithServer(), 
      getPropertiesWithServer(),
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
      <Navbar properties = {properties}/>
      <RoomDeatils roomDetails={roomDeatils} rooms={rooms}/>
      <Footer abouts = {abouts} />
    </div>
  );
}

export default Page;