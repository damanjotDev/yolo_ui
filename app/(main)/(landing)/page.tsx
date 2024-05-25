
import { Home } from "@/components/home/home";
import { getAboutsWithServer, getPropertiesWithServer } from "@/app/services";
import { Navbar } from "@/components/navbars/navbar";


async function Page() {
  const [abouts, properties] = await Promise.all([getAboutsWithServer(), getPropertiesWithServer()])

  return (
    <div
      className="
      w-full
      h-auto
      flex
      flex-col
      text-[70px]
      text-primary"
    >
      <Navbar properties = {properties}/>
      <Home abouts = {abouts}/>
    </div>
  );
}

export default Page;