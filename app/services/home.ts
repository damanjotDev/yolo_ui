import { fetchHomes } from "../api/axios";

export const getHomesWithServer = async () => {
    try {
        const {data} = await fetchHomes({})
        return data.data
    } catch (err) {
        const error: any = err;
        console.log('err', error)
        // throw new Error('Something went wrong')
    }
  }