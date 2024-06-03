
import { fetchPage, fetchPages } from "../api/axios";



export const getPagesWithServer = async () => {
    try {
        const {data} = await fetchPages({})
        return data.data
    } catch (err) {
        const error: any = err;
        throw error?.data?.msg || "Oop's something went wrong"
    }
  }

export const getPageWithServer = async (PageId: any) => {
    try {
        const {data} = await fetchPage(PageId)
        return data.data
    } catch (err) {
        console.log('err', err, PageId)
        const error: any = err;
        throw error?.data?.msg || "Oop's something went wrong"
    }
  }

