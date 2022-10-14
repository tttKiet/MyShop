import { StoreProvider } from '~/store';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

const menuItem = [
    {
        name: 'Start',
    },
    {
        name: 'Products',
    },
    {
        name: 'Volume',
    },
    {
        name: 'Infomration',
    },
];

const headerMenuForm = [
    {
        name: 'Sign in',
        to: '/signin',
    },
    {
        name: 'Sign up',
        to: '/signup',
    },
];

function DefaultLayout({ children }) {
    return (
        <div>
            <Header menu={{ menuItem, headerMenuForm }} />
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    {/* Controls bi thieu */}
                    <StoreProvider>
                        <Sidebar />
                        <div lassName={cx('content')}>{children}</div>
                    </StoreProvider>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
