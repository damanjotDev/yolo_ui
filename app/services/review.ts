import { createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "@/components/ui/use-toast";
import { createReview, deleteReview, fetchReview, fetchReviews, updateReview } from "../api/axios";
import { RoutesName } from "../utils/constant";
import { ReviewsModal } from "../utils/modals";

// export const addReview = createAsyncThunk<any, any>('ReviewSlice/addReview', async (params, thunkApi) => {
//     try {
//         const {data} = await createReview({...params?.data})
//         params?.navigate(RoutesName.Reviews)

//         toast({
//             title: "Success ",
//             description: 'Review added successfully',
//           })
//         return thunkApi.fulfillWithValue(data.data)
//     } catch (err) {
//         const error: any = err;
//         toast({
//             title: "Error ",
//             description: error?.message || "Oop's something went wrong!",
//             className:'bg-red-200'
//           })
//         return thunkApi.rejectWithValue(error.response?.status)
//     }
// })

// export const editReview = createAsyncThunk<any, any>('ReviewSlice/editReview', async (params, thunkApi) => {
//     try {
//         const {data} = await updateReview(params?.data?.id, params?.data)
//         params?.navigate(RoutesName.Reviews)

//         toast({
//             title: "Success ",
//             description: 'Review edit successfully',
//           })

//         return thunkApi.fulfillWithValue(data.data)
//     } catch (err) {
//         const error: any = err;
//         toast({
//             title: "Error ",
//             description: error?.message || "Oop's something went wrong!",
//             className:'bg-red-200'
//           })
//         return thunkApi.rejectWithValue(error.response?.status)
//     }
// })

// export const getReviews = createAsyncThunk('ReviewSlice/getReviews', async (_, thunkApi) => {
//     try {
//         const {data} = await fetchReviews({})
//         return thunkApi.fulfillWithValue(data.data)
//     } catch (err) {
//         const error: any = err;
//         toast({
//             title: "Error ",
//             description: error?.message || "Oop's something went wrong!",
//             className:'bg-red-200'
//           })
//         return thunkApi.rejectWithValue(error.response?.status)
//     }
// })

// export const getReview = createAsyncThunk<any, any>('ReviewSlice/getReview', async (params, thunkApi) => {
//     try {
//         const {data} = await fetchReview(params?.id)
//         return thunkApi.fulfillWithValue(data.data)
//     } catch (err) {
//         const error: any = err;
//         toast({
//             title: "Error ",
//             description: error?.message || "Oop's something went wrong!",
//             className:'bg-red-200'
//           })
//         return thunkApi.rejectWithValue(error.response?.status)
//     }
// })

// export const removeReview = createAsyncThunk<any, any>('ReviewSlice/removeReview', async (params, thunkApi) => {
//     try {
//         await deleteReview(params?.id)
//         toast({
//             title: "Success",
//             description: "Review remove successfully"
//             })
//         thunkApi.dispatch(getReviews())
//     } catch (err) {
//         const error: any = err;
//         toast({
//             title: "Error ",
//             description: error?.message || "Oop's something went wrong!",
//             className:'bg-red-200'
//           })
//         return thunkApi.rejectWithValue(error.response?.status)
//     }
// })

export const getReviewsWithServer = async () => {
    try {
        const {data} = await fetchReviews({})
        return data.data
    } catch (err) {
        const error: any = err;
        throw new Error(error?.data?.msg || "Oop's something went wrong")
    }
  }
