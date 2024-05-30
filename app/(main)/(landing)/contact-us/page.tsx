
import {getAboutsWithServer, getPropertiesWithServer} from "@/app/services";
import { ContactUs } from "@/components/contact/contactUs";


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
      <ContactUs abouts={abouts}/>
    </div>
  );
}

export default Page;