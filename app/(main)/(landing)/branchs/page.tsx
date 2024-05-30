
import {getPropertiesWithServer} from "@/app/services";
import { Properties } from "@/components/properties/properties";


async function Page() {
  const [properties] = await Promise.all([
      getPropertiesWithServer()
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
      <Properties properties={properties}/>
    </div>
  );
}

export default Page;