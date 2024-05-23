'use client'
import { RoutesName } from "@/app/utils/constant"
import { MdOutlineAnalytics, RxDashboard } from "@/app/utils"
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch, useTypedSelector } from "../store/store";
import { useEffect, useMemo } from "react";
import { getProperties } from "../services";



const useNavbarRoutes = () =>{
    const pathname = usePathname();
    const navigate = useRouter()

    const dispatch = useAppDispatch();
    const { propertiesLoading, properties, error } = useTypedSelector((state) => state.Property);

    useEffect(()=>{
        dispatch(getProperties())
    },[])
    
    const routes = useMemo(()=>{
        return  [
            {
                id: '1',
                navigate: () => navigate.push(RoutesName.Home),
                icon: RxDashboard,
                active: RoutesName.Home===pathname,
                label: 'Home'
                
            },
            {
                id: '2',
                navigate: () => navigate.push(RoutesName.Locations),
                icon: MdOutlineAnalytics,
                active: RoutesName.Locations===pathname,
                label: 'Locations',
                dropdownItems: properties?.rows?.map((item)=>({id: item?.id, title: item?.title,  navigate: () => navigate.push(RoutesName.Locations+item.id)}))
            },
            {
                id: '3',
                navigate: () => navigate.push(RoutesName.Experiences),
                icon: RxDashboard,
                active: RoutesName.Experiences===pathname,
                label: 'Experiences'
            },
            {
                id: '4',
                navigate: () => navigate.push(RoutesName.Gallery),
                icon: MdOutlineAnalytics,
                active: RoutesName.Gallery===pathname,
                label: 'Gallery'
            },
            {
                id: '5',
                navigate: () => navigate.push(RoutesName.Adventure),
                icon: MdOutlineAnalytics,
                active: RoutesName.Adventure===pathname,
                label: 'Adventure Awaits', 
                dropdownItems: [
                    {
                        id:1, 
                        title: 'Blog', 
                        navigate: ()=> navigate.push(RoutesName.Adventure)
                    },
                    {
                        id:2, 
                        title: 'Franchise', 
                        navigate: ()=> navigate.push(RoutesName.Franchise)
                    },
                    {
                        id:3, 
                        title: 'Contact Us', 
                        navigate: ()=> navigate.push(RoutesName.Contact)
                    }
                ]
            },
        ]
    }, [properties])

    return routes

}

export { useNavbarRoutes }