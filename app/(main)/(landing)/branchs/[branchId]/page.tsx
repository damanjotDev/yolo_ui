import { getPropertieWithServer } from "@/app/services";
import ErrorPage from "@/components/common/error";
import { PropertyDetails } from "@/components/properties/property";

interface IParams {
  branchId: string;
}

async function Page({ params }: { params: IParams }) {
  try {
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
        <PropertyDetails propertyDetails={propertyDetails} />
      </div>
    );
  } catch (error: any) {
    let err:string = error;
    return (<ErrorPage error={err}/>)
  }
}

export default Page;