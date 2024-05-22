
import { RoutesName } from "@/app/utils/constant"
import { MdOutlineAnalytics, RxDashboard } from "@/app/utils"
import { usePathname, useRouter } from "next/navigation";



const useNavbarRoutes = () =>{
    const pathname = usePathname();
    const navigate = useRouter()

    const routes = [
        {
            id: '1',
            navigate: () => navigate.push(RoutesName.Dashboard),
            icon: RxDashboard,
            active: RoutesName.Dashboard===pathname,
            label: 'Dashboard'
            
        },
        {
            id: '2',
            navigate: () => navigate.push(RoutesName.Services),
            icon: MdOutlineAnalytics,
            active: RoutesName.Services===pathname,
            label: 'Services'
        },
        {
            id: '3',
            navigate: () => navigate.push(RoutesName.Properties),
            icon: RxDashboard,
            active: RoutesName.Properties===pathname,
            label: 'Properties'
        },
        {
            id: '4',
            navigate: () => navigate.push(RoutesName.Rooms),
            icon: MdOutlineAnalytics,
            active: RoutesName.Rooms===pathname,
            label: 'Rooms'
        },
        {
            id: '5',
            navigate: () => navigate.push(RoutesName.Users),
            icon: MdOutlineAnalytics,
            active: RoutesName.Users===pathname,
            label: 'Users'
        },
        {
            id: '6',
            navigate: () => navigate.push(RoutesName.Categories),
            icon: MdOutlineAnalytics,
            active: RoutesName.Categories===pathname,
            label: 'Categories'
        },
        {
            id: '7',
            navigate: () => navigate.push(RoutesName.Events),
            icon: MdOutlineAnalytics,
            active: RoutesName.Events===pathname,
            label: 'Event'
        },
        {
            id: '8',
            navigate: () => navigate.push(RoutesName.Tags),
            icon: MdOutlineAnalytics,pathname,
            label: 'Tags'
        },
        {
            id: '9',
            navigate: () => navigate.push(RoutesName.Abouts),
            icon: MdOutlineAnalytics,
            active: RoutesName.Abouts===pathname,
            label: 'Abouts'
        },
        {
            id: '10',
            navigate: () => navigate.push(RoutesName.Experiences),
            icon: MdOutlineAnalytics,
            active: RoutesName.Experiences===pathname,
            label: 'Experiences'
        }
    ]

    return routes

}

export { useNavbarRoutes }