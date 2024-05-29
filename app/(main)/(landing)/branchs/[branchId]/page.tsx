
import { Home } from "@/components/home/home";
import { getAboutsWithServer, getPropertiesWithServer, getPropertieWithServer} from "@/app/services";
import { Navbar } from "@/components/navbars/navbar";
import { Footer } from "@/components/footer/footer";
import { PropertyDetails } from "@/components/properties/property";

interface IParams {
  branchId: string;
}

async function Page({params}:{params: IParams}) {
  const [abouts, properties, propertyDetails] = await Promise.all([
      getAboutsWithServer(), 
      getPropertiesWithServer(),
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
      <Navbar properties = {properties}/>
      <PropertyDetails propertyDetails={propertyDetails}/>
      <Footer abouts = {abouts} />
    </div>
  );
}

export default Page;