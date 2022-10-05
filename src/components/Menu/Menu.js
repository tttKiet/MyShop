import { faBarChart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ data }) {
    return (
        <div className={cx('wrapper')}>
            <button className={cx('item', 'menu-item')}>Popular</button>
            <div className={cx('item', 'controls')}>
                {data.map((item, i) => {
                    return (
                        <button className={cx('menu-item')} key={i}>
                            {item.name}
                        </button>
                    );
                })}
            </div>
            <button className={cx('item', 'menu-item')}>
                <FontAwesomeIcon className={cx('icon')} icon={faBarChart} />
                Filters
            </button>
        </div>
    );
}

export default Menu;
