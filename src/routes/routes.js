import Home from '~/pages/Home/Home';
import Following from '~/pages/Following/Following';
import Profile from '~/pages/Profile/Profile';
import Upload from '~/pages/Upload/Upload';
import HeaderOnly from '~/Layout/HeaderOnly/HeaderOnly';
import Live from "~/pages/Live/Live";
import Explore from "~/pages/Explore/Explore";
import config from "~/config/export";

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.live,
        component: Live,
    },
    {
        path: config.routes.explore,
        component:Explore,
    }

];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
