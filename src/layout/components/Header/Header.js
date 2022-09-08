import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>B T K vava Shoppe</div>
                <div className={cx('controls')}>
                    <ul className={cx('item__list')}>
                        <li className={cx('item__link')}>
                            <a className={cx('item__link-text')}>Quan ao</a>
                        </li>
                        <li className={cx('item__link')}>
                            <a className={cx('item__link-text')}>Phu Kien</a>
                        </li>
                        <li className={cx('item__link')}>
                            <a className={cx('item__link-text')}>Lien He</a>
                        </li>
                        <li className={cx('item__link')}>
                            <a className={cx('item__link-text')}>Lien He</a>
                        </li>
                        <li className={cx('item__link')}>
                            <a className={cx('item__link-text')}>Lien He</a>
                        </li>
                    </ul>
                </div>
                <div className={cx('form')}>
                    <div className={cx('register', 'item__link')}>
                        <a className={cx('item__link-text')}>Đăng ký</a>
                    </div>
                    <div className={cx('signin', 'item__link')}>
                        <a className={cx('item__link-text')}>Đăng nhập</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
