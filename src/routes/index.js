import Home from '~/pages/Home';
import Signin from '~/pages/Signin';
import Profile from '~/pages/Profile';
// Route: tuyen duong => Dung chung
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/signin',
        component: Signin,
    },
    {
        path: '/profile',
        component: Profile,
    },
];

// Co the bat dang nhap moi vao duoc duong dan co route nay
const privateRoutes = [];

export { publicRoutes, privateRoutes };
