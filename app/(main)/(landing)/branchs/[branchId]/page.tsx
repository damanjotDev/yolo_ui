import {getPropertieWithServer} from "@/app/services";
import { PropertyDetails } from "@/components/properties/property";

interface IParams {
  branchId: string;
}

async function Page({params}:{params: IParams}) {
  const [propertyDetails] = await Promise.all([
      getPropertieWithServer(+params.branchId)
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
      <PropertyDetails propertyDetails={propertyDetails}/>
    </div>
  );
}

export default Page;