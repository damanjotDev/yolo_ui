'use client'
import { Home } from "@/components/home/home";
import { getAboutsWithServer, getPropertiesWithServer } from "@/app/services";
import { AboutsModal, PropertiesModal } from "@/app/utils/modals";
import { Navbar } from "@/components/navbars/navbar";


async function Page() {
  const abouts: AboutsModal = await getAboutsWithServer()
  const properties: PropertiesModal = await getPropertiesWithServer()

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
      <Navbar/>
      <Home abouts={abouts} properties={properties}/>
    </div>
  );
}

export default Page;