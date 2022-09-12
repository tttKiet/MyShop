import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

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
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    {/* Controls bi thieu */}
                    <Sidebar />
                    <div lassName={cx('content')}>{children}</div>
                </div>
                <div className={cx('background--layerblack')}></div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
