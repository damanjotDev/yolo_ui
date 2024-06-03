import { createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "@/components/ui/use-toast";
import { createAbout, deleteAbout, fetchAbout, fetchAbouts, updateAbout } from "../api/axios";
import { RoutesName } from "../utils/constant";
import { AboutsModal } from "../utils/modals";

export const addAbout = createAsyncThunk<any, any>('AboutSlice/addAbout', async (params, thunkApi) => {
    try {
        const {data} = await createAbout({...params?.data})
        params?.navigate(RoutesName.About)

        toast({
            title: "Success ",
            description: 'About added successfully',
          })
        return thunkApi.fulfillWithValue(data.data)
    } catch (err) {
        const error: any = err;
        toast({
            title: "Error ",
            description: error?.message || "Oop's something went wrong!",
            className:'bg-red-200'
          })
        return thunkApi.rejectWithValue(error.response?.status)
    }
})

export const editAbout = createAsyncThunk<any, any>('AboutSlice/editAbout', async (params, thunkApi) => {
    try {
        const {data} = await updateAbout(params?.data?.id, params?.data)
        params?.navigate(RoutesName.About)

        toast({
            title: "Success ",
            description: 'About edit successfully',
          })

        return thunkApi.fulfillWithValue(data.data)
    } catch (err) {
        const error: any = err;
        toast({
            title: "Error ",
            description: error?.message || "Oop's something went wrong!",
            className:'bg-red-200'
          })
        return thunkApi.rejectWithValue(error.response?.status)
    }
})

export const getAbouts = createAsyncThunk('AboutSlice/getAbouts', async (_, thunkApi) => {
    try {
        const {data} = await fetchAbouts({})
        return thunkApi.fulfillWithValue(data.data)
    } catch (err) {
        const error: any = err;
        toast({
            title: "Error ",
            description: error?.message || "Oop's something went wrong!",
            className:'bg-red-200'
          })
        return thunkApi.rejectWithValue(error.response?.status)
    }
})

export const getAbout = createAsyncThunk<any, any>('AboutSlice/getAbout', async (params, thunkApi) => {
    try {
        const {data} = await fetchAbout(params?.id)
        return thunkApi.fulfillWithValue(data.data)
    } catch (err) {
        const error: any = err;
        toast({
            title: "Error ",
            description: error?.message || "Oop's something went wrong!",
            className:'bg-red-200'
          })
        return thunkApi.rejectWithValue(error.response?.status)
    }
})

export const removeAbout = createAsyncThunk<any, any>('AboutSlice/removeAbout', async (params, thunkApi) => {
    try {
        await deleteAbout(params?.id)
        toast({
            title: "Success",
            description: "About remove successfully"
            })
        thunkApi.dispatch(getAbouts())
    } catch (err) {
        const error: any = err;
        toast({
            title: "Error ",
            description: error?.message || "Oop's something went wrong!",
            className:'bg-red-200'
          })
        return thunkApi.rejectWithValue(error.response?.status)
    }
})

export const getAboutsWithServer = async () => {
    try {
        const {data} = await fetchAbouts({})
        return data.data
    } catch (err) {
        console.log('err')
    }
  }

export const getAboutWithServer = async (aboutId: any) => {
    try {
        const {data} = await fetchAbout(aboutId)
        return data.data
    } catch (err) {
        return undefined;
    }
  }

