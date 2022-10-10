import { faBarChart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { useState, useContext } from 'react';
import { StoreContext } from '~/store';
import { searchAll, searchSport, searchTech, searchClothes } from '~/store/actions';

const cx = classNames.bind(styles);

function Menu({ data }) {
    const [state, dispatch] = useContext(StoreContext);

    const [dataLast, setDataLast] = useState(data);

    const handleOnclick = (index) => {
        setDataLast((preData) => {
            return preData.map((item) => {
                item.active = false;
                if (item.id === index) item.active = true;
                return item;
            });
        });
        if (index === 0) {
            dispatch(searchAll());
        } else if (index === 1) {
            dispatch(searchTech());
        } else if (index === 2) {
            dispatch(searchSport());
        } else if (index === 3) {
            dispatch(searchClothes());
        }
    };

    return (
        <div className={cx('wrapper')}>
            <button className={cx('item', 'menu-item')}>Phổ biến</button>
            <div className={cx('item', 'controls')}>
                {dataLast.map((item, i) => {
                    return (
                        <button
                            onClick={() => handleOnclick(i)}
                            className={cx('menu-item', {
                                active_btn: item.active,
                            })}
                            key={i}
                            data-key={item.key.toString()}
                        >
                            {item.name}
                        </button>
                    );
                })}
            </div>
            <button className={cx('item', 'menu-item')}>
                <FontAwesomeIcon className={cx('icon')} icon={faBarChart} />
                Lọc
            </button>
        </div>
    );
}

export default Menu;
