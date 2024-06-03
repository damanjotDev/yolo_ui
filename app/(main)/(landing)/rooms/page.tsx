
import { getRoomsWithServer } from "@/app/services";
import ErrorPage from "@/components/common/error";
import { Rooms } from "@/components/rooms/rooms";


async function Page() {
  try {
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
        <Rooms rooms={rooms} />
      </div>
    );
  } catch (error: any) {
    let err:string = error;
    return (<ErrorPage error={err}/>)
  }
}

export default Page;