
import { getPropertiesWithServer } from "@/app/services";
import ErrorPage from "@/components/common/error";
import { Properties } from "@/components/properties/properties";


async function Page() {
  try {
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
        <Properties properties={properties} />
      </div>
    );
  } catch (error: any) {
    let err:string = error;
    return (<ErrorPage error={err}/>)
  }
}

export default Page;