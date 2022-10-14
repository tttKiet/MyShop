import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames/bind';
import styles from './Signin.module.scss';

const cx = classNames.bind(styles);

function Signin() {
    return (
        <main className={cx('Signin')}>
            <h1 className={cx('title')}> SIGNIN</h1>
            <div className={cx('wrapper')}>
                <div className={cx('left')}>
                    <div className={cx('background_left')}>
                        <div className={cx('rule')}></div>
                        <div className={cx('rule')}></div>
                        <div className={cx('rule')}></div>
                        <div className={cx('rule')}></div>
                        <div className={cx('rule')}></div>
                        <div className={cx('rule')}></div>
                        <div className={cx('rule')}></div>
                        <div className={cx('rule')}></div>
                        <div className={cx('rule')}></div>
                        <div className={cx('rule')}></div>
                        <div className={cx('rule')}></div>
                        <div className={cx('rule')}></div>
                        <div className={cx('rule')}></div>
                        <div className={cx('rule')}></div>
                        <div className={cx('rule')}></div>
                        <div className={cx('rule')}></div>
                        <div className={cx('rule')}></div>
                        <div className={cx('rule')}></div>
                        <div className={cx('rule')}></div>
                        <div className={cx('rule')}></div>
                        <div className={cx('rule')}></div>
                        <div className={cx('rule')}></div>
                        <div className={cx('rule')}></div>
                        <div className={cx('rule')}></div>
                        <div className={cx('rule')}></div>
                    </div>
                </div>
                <div className={cx('right')}>
                    <div className={cx('content')}>
                        <form action="#">
                            <div className={cx('form-controls')}>
                                <input
                                    autoComplete="off"
                                    type="text"
                                    id="username"
                                    title="Please enter your User Name"
                                    placeholder="User name"
                                    required
                                />
                            </div>

                            <div className={cx('form-controls')}>
                                <input
                                    type="password"
                                    autoComplete="off"
                                    id="password"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <div className={cx('form-controls')}>
                                <input
                                    type="password"
                                    autoComplete="off"
                                    id="confirm-password"
                                    placeholder="Confirm Password"
                                    required
                                />
                            </div>

                            <div className={cx('wrap-btn')}>
                                <button className={cx('form-btn')} type="submit">
                                    Sign in
                                </button>
                                <Link className={cx('form-link')} to={'/signup'}>
                                    <button className={cx('form-btn')}>Sign up</button>
                                </Link>
                            </div>
                            <ul className={cx('info_link')}>
                                <li>
                                    <a className={cx('hover')} href="https://www.facebook.com/kiett01">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={cx('hover')}
                                        href="https://github.com/tttKiet?fbclid=IwAR0jIwce0F4X5K_hzikQW7ZNJsJenODC0CP8kBY3TqUhDOSBaBNzeQJBcRM"
                                    >
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                </li>
                            </ul>
                            <span>&copy; Bản quyền thuộc về Bùi Kiệt</span>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Signin;
