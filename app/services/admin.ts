import { createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "@/components/ui/use-toast";
import { adminAuth, getAdmin } from "../api/axios";
import {  persistor } from "../store/store";
import { RoutesName } from "../utils";
import { adminActions } from "../reducers";


export const getAdminDetails = createAsyncThunk<any, any>('adminSlice/getAdminDetails', async (params, thunkApi) => {
    try {
        const {data} = await getAdmin(params?.adminId)
        return thunkApi.fulfillWithValue(data.data)
    } catch (err) {
        const error = err as any;
        return thunkApi.rejectWithValue(error.response?.status)
    }
})

export const adminLogin = createAsyncThunk<any,any>('devroninsSlice/devroninsAdminLogin', async (params, thunkApi) => {
    try {
        const {data} = await adminAuth({email: params?.data?.email, password: params?.data?.password});
        localStorage.setItem('accessToken', data?.data.accessToken)

        params?.navigate(RoutesName.Dashboard)

        toast({
            title: "Success ",
            description: 'Login success',
          })
        return thunkApi.fulfillWithValue(data.data)
    } catch (err) {
        const error = err as any;
        toast({
            title: "Error ",
            description: error?.code==='auth/invalid-credential'?
            'Invalid credential':
            "Oop's something went wrong!",
            className:'bg-red-200'
          })
        return thunkApi.rejectWithValue(error.response?.status)
    }
})

export const adminLogout = async (dispatch: Function, navigate: Function) => {
    try {
        localStorage.clear()
        dispatch(adminActions.setInitialState(null))
        navigate(RoutesName.Login)
        toast({
            title: "Success"
          })
    } catch (error: any) {
        toast({
            title: "Error ",
            description: error?.message || "Oop's something went wrong!",
            className:'bg-red-200'
          })
    }
  };