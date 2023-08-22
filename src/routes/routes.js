import Home from '~/pages/Home/Home';
import Following from '~/pages/Following/Following';
import Profile from '~/pages/Profile/Profile';
import Upload from '~/pages/Upload/Upload';
import HeaderOnly from '~/Layout/HeaderOnly/HeaderOnly';
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

];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
