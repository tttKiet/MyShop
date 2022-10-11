import classNames from 'classnames/bind';
import styles from '../Home.module.scss';

const cx = classNames.bind(styles);

function ProductItem({ name, source, price, bought, link }) {
    return (
        <div className={cx('wapper')}>
            <div className={cx('products')}>
                <div className={cx('item')}>
                    <div className={cx('wrap_img')}>
                        <img className={cx('img')} src={source} />
                    </div>
                    <div className={cx('wrap__item-content')}>
                        <h3 className={cx('name')}>{name}</h3>
                        <p className={cx('wrap_price')}>
                            <span className={cx('count_buy')}>Đã bán {bought}</span>
                            <i className={cx('price')}>{price}</i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
