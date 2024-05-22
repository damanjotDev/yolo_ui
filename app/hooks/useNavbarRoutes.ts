
import { RoutesName } from "../../../../yolo_admin/src/utils/constant"
import { MdOutlineAnalytics, RxDashboard } from "../../../../yolo_admin/src/utils/icons"
import { usePathname, useRouter } from "next/navigation";



const useNavbarRoutes = () =>{
    const pathname = usePathname();
    const navigate = useRouter()

    const routes = [
        {
            id: '1',
            navigate: () => navigate.push(RoutesName.Dashboard),
            icon: RxDashboard,
            active: RoutesName.Dashboard===location.pathname,
            label: 'Dashboard'
            
        },
        {
            id: '2',
            navigate: () => navigate.push(RoutesName.Services),
            icon: MdOutlineAnalytics,
            active: RoutesName.Services===location.pathname,
            label: 'Services'
        },
        {
            id: '3',
            navigate: () => navigate.push(RoutesName.Properties),
            icon: RxDashboard,
            active: RoutesName.Properties===location.pathname,
            label: 'Properties'
        },
        {
            id: '4',
            navigate: () => navigate.push(RoutesName.Rooms),
            icon: MdOutlineAnalytics,
            active: RoutesName.Rooms===location.pathname,
            label: 'Rooms'
        },
        {
            id: '5',
            navigate: () => navigate.push(RoutesName.Users),
            icon: MdOutlineAnalytics,
            active: RoutesName.Users===location.pathname,
            label: 'Users'
        },
        {
            id: '6',
            navigate: () => navigate.push(RoutesName.Categories),
            icon: MdOutlineAnalytics,
            active: RoutesName.Categories===location.pathname,
            label: 'Categories'
        },
        {
            id: '7',
            navigate: () => navigate.push(RoutesName.Events),
            icon: MdOutlineAnalytics,
            active: RoutesName.Events===location.pathname,
            label: 'Event'
        },
        {
            id: '8',
            navigate: () => navigate.push(RoutesName.Tags),
            icon: MdOutlineAnalytics,
            active: RoutesName.Tags===location.pathname,
            label: 'Tags'
        },
        {
            id: '9',
            navigate: () => navigate.push(RoutesName.Abouts),
            icon: MdOutlineAnalytics,
            active: RoutesName.Abouts===location.pathname,
            label: 'Abouts'
        },
        {
            id: '10',
            navigate: () => navigate.push(RoutesName.Experiences),
            icon: MdOutlineAnalytics,
            active: RoutesName.Experiences===location.pathname,
            label: 'Experiences'
        }
    ]

    return routes

}

export { useNavbarRoutes }