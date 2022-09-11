import MenuItem from '~/components/MenuItem';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header({ menu }) {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>B T K vava Shoppe</div>
                <div className={cx('controls')}>
                    <ul className={cx('item__list')}>
                        {menu.menuItem.map((item, i) => {
                            return <MenuItem key={i} content={item.name} />;
                        })}
                    </ul>
                </div>
                <div className={cx('form')}>
                    {menu.headerMenuForm.map((item, i) => {
                        return <MenuItem key={i} content={item.name} />;
                    })}
                </div>
            </div>
        </header>
    );
}

export default Header;
