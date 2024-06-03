
import { getAboutsWithServer, getPropertiesWithServer } from "@/app/services";
import ErrorPage from "@/components/common/error";
import { ContactUs } from "@/components/contact/contactUs";


async function Page() {
  try {
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
        <ContactUs abouts={abouts} />
      </div>
    );
  } catch (error: any) {
    let err:string = error;
    return (<ErrorPage error={err}/>)
  }
}

export default Page;