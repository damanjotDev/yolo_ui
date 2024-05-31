
import {getAboutsWithServer, getPropertiesWithServer} from "@/app/services";
import { FranchiseContactUs } from "@/components/contact/franchiseContactUs";


async function Page() {
  const [abouts] = await Promise.all([
      getAboutsWithServer()
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
      <FranchiseContactUs abouts={abouts}/>
    </div>
  );
}

export default Page;