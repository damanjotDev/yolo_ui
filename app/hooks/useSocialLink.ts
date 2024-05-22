import { useMemo } from "react"
import { RoutesName } from "../utils/constant"
import { MdOutlineAnalytics, RxDashboard, FaFacebookF, FaTwitter, FaInstagram  } from "../utils/icons"
import { usePathname, useRouter } from "next/navigation";
import { IconType } from "react-icons"


export const useSocialLinkRoutes = () =>{
  const pathname = usePathname();
  const navigate = useRouter()

    const routes = [
        {
            id: 'Facebook',
            navigate: () => navigate.push('#'),
            icon: FaFacebookF,
            label: 'Facebook'
        },
        {
            id: 'Twitter',
            navigate: () => navigate.push("#"),
            icon: FaTwitter,
            label: 'Twitter',
        },
        {
            id: 'Instagram',
            navigate: () => navigate.push("#"),
            icon: FaInstagram,
            label: 'Instagram',
        },

    ]

    return useMemo(()=>(routes),[location.pathname])

}

type SocialIconName = 'facebook' | 'twitter';

export const useSocialIcon = () => {
  const getSocialIcon = (iconName: SocialIconName): IconType => {
    switch (iconName.toLowerCase()) {
      case 'facebook':
        return FaFacebookF;
      case 'twitter':
        return FaTwitter;
      default:
        return FaTwitter; // or any other default icon
    }
  };

  return {getSocialIcon}
};
