import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);
const menu = [
    {
        name: 'Danh Mục',
        icon: 'fa-solid fa-list-radio',
        children: [
            {
                name: 'Ao',
                icon: 'fa-regular fa-shirt',
            },
            {
                name: 'Quan',
                icon: 'fa-regular fa-shirt',
            },
        ],
    },
];

function Sidebar() {
    return <div className={cx('sidebar')}>
        
    </div>;
}

export default Sidebar;
