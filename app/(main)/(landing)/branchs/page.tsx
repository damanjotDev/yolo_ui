
import { getAboutsWithServer, getPropertiesWithServer} from "@/app/services";
import { Navbar } from "@/components/navbars/navbar";
import { Footer } from "@/components/footer/footer";
import { Properties } from "@/components/properties/properties";


async function Page() {
  const [abouts, properties] = await Promise.all([
      getAboutsWithServer(), 
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
      <Navbar properties = {properties}/>
      <Properties properties={properties}/>
      <Footer abouts = {abouts} />
    </div>
  );
}

export default Page;