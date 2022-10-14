import Home from '~/pages/Home';
import Signin from '~/pages/Signin';
import Profile from '~/pages/Profile';
import ShopItem from '~/pages/ShopItem';
import Signup from '~/pages/Signup';

// Route: tuyen duong => Dung chung
// Layouts
import { OnlyHeader } from '~/layout';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/signin',
        component: Signin,
        layout: null,
    },
    {
        path: '/signup',
        component: Signup,
        layout: null,
    },
    {
        path: '/profile',
        component: Profile,
        layout: OnlyHeader,
    },
    {
        path: 'shopitem',
        component: ShopItem,
        layout: null,
    },
];

// Co the bat dang nhap moi vao duoc duong dan co route nay
const privateRoutes = [];

export { publicRoutes, privateRoutes };
