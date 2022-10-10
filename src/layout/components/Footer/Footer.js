import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('wrap')}>
                <div className={cx('wrap_left')}>
                    <div className={cx('info_content')}>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>REACT JS</li>
                            <li>NODE JS</li>
                        </ul>
                    </div>
                    <div className={cx('info_img')}></div>
                </div>
                <div className={cx('wrap_right')}>
                    <ul className={cx('info_link')}>
                        <li>
                            <FontAwesomeIcon icon={faFacebook} />
                            <a href="https://www.facebook.com/kiett01">Facebook</a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faGithub} />
                            <a href="https://github.com/tttKiet?fbclid=IwAR0jIwce0F4X5K_hzikQW7ZNJsJenODC0CP8kBY3TqUhDOSBaBNzeQJBcRM">
                                Github
                            </a>
                        </li>
                        <li>&copy; Bản quyền thuộc về Bùi Kiệt</li>
                    </ul>
                </div>
                <div className={cx('line')}>© 2022 Titky the first product of Bui Kiet. Having use React JS.</div>
            </div>
        </footer>
    );
}

export default Footer;
