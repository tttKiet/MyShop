import classNames from 'classnames/bind';
import Menu from '~/components/Menu';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);
const menu = [
    {
        id: 0,
        name: 'Tất cả',
        active: true,
        key: 'all',
    },
    {
        id: 1,
        name: 'Đồ công nghệ',
        key: 'tech',
    },
    {
        id: 2,
        name: 'Đồ thể thao',
        key: 'sport',
    },
    {
        id: 3,
        name: 'Quần áo',
        key: 'clothes',
    },
];

function Sidebar() {
    return (
        <div className={cx('sidebar')}>
            <div className={cx('wrapper')}>
                <Menu data={menu} />
            </div>
        </div>
    );
}

export default Sidebar;
