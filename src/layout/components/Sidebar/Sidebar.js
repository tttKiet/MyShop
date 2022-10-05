import { faList, faShirt, faFire } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Menu from '~/components/Menu';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);
const menu = [
    {
        name: 'ALL',
    },
    {
        name: 'Product',
    },
    {
        name: 'Popular',
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
