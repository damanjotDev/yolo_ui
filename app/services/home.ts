import { fetchHomes } from "../api/axios";

export const getHomesWithServer = async () => {
    try {
        const {data} = await fetchHomes({})
        return data.data
    } catch (err) {
        const error: any = err;
        throw new Error(error?.data?.msg || "Oop's something went wrong")
    }
  }