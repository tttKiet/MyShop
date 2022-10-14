import MenuItem from '~/components/MenuItem';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header({ menu }) {
    return (
        <header className={cx('wrapper')}>
            {/* Menu header */}

            <div className={cx('wrap_inner')}>
                <div className={cx('inner')}>
                    <div className={cx('logo')}>B T K</div>
                    <div className={cx('controls')}>
                        <ul className={cx('item__list')}>
                            {menu.menuItem.map((item, i) => {
                                return <MenuItem to={item.to} key={i} content={item.name} />;
                            })}
                        </ul>
                    </div>
                    <div className={cx('form')}>
                        {menu.headerMenuForm.map((item, i) => {
                            return <MenuItem to={item.to} key={i} content={item.name} />;
                        })}
                        <FontAwesomeIcon className={cx('icon')} icon={faCartShopping} />
                    </div>
                </div>
            </div>
            <div className={cx('wrap')}>
                {/* Duoi Menu header */}

                <div className={cx('Line')}></div>

                {/* content */}
                <div className={cx('container')}>
                    {/* Lời mở đầu */}

                    <div className={cx('foreword')}>
                        <div>
                            <h1 className={cx('foreword-main')}>Trending</h1>
                            <i className={cx('foreword-main--min')}>Styles</i>
                        </div>
                        <div>
                            <h1 className={cx('foreword-main-max')}>DONT ASK ME!</h1>
                        </div>
                        <div className={cx('foreword-main-content')}>
                            <h5 className={cx('foreword-main-text')}>
                                &ensp;&ensp;&ensp; Thời trang là một sự thể hiện thẩm mỹ phổ biến tại một thời gian, địa
                                điểm cụ thể, trong một bối cảnh cụ thể bằng cách sử dụng quần áo, giày dép, lối sống,
                                phụ kiện, cách trang điểm, kiểu tóc và tỷ lệ cơ thể.Không như xu hướng thường chỉ bao
                                hàm một sự thể hiện thẩm mỹ riêng biệt và thường kéo dài ngắn hơn một mùa, thời trang là
                                sự thể hiện đặc biệt, được hỗ trợ bởi ngành công nghiệp thời trang mà thường gắn liền
                                với các mùa và bộ sưu tập. Phong cách là một biểu hiện kéo dài qua nhiều mùa và thường
                                được kết nối với các phong trào văn hóa và các dấu hiệu xã hội, biểu tượng, giai cấp và
                                văn hóa (ví dụ: Baroque, Rococo...). Theo nhà xã hội học Pierre Bourdieu, thời trang có
                                nghĩa là "thời trang mới nhất, sự khác biệt mới nhất".
                            </h5>
                            <h5 className={cx('foreword-main-text')}>FOLLOW ME!!</h5>
                        </div>
                    </div>

                    {/* IMG */}

                    <div className={cx('foreword--img')}></div>
                </div>
            </div>
        </header>
    );
}

export default Header;
