import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const menuItem = [
    {
        name: 'Nổi bật',
    },
    {
        name: 'Quần áo',
    },
    {
        name: 'Giày dép',
    },
    {
        name: 'Hàng điện tử',
    },
];

const headerMenuForm = [
    {
        name: 'Đăng nhập',
        to: '/signin',
    },
    {
        name: 'Đăng kí',
        to: '/register',
    },
];

function DefaultLayout({ children }) {
    return (
        <div>
            <Header menu={{ menuItem, headerMenuForm }} />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
