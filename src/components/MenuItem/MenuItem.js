import styles from './MenuItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MenuItem({ content }) {
    // su ly su kien hover
    const handeHover = (e) => {
        if (!e.target.children[0]) return;
        let rule = e.target.children[0];
        const width = e.target.offsetWidth;
        rule.style.width = width + 'px';
        rule.style.transition = `all 0.2s ease-in-out 0.01s`;
    };

    // su ly su kien hover ra ngoai
    const handeHoverOut = (e) => {
        let rule = e.target.children[0];
        if (!e.target.children[0]) return;
        rule.style.width = '0px';
        rule.style.transition = `all 0.14s ease-out 0.01s`;
    };

    return (
        <a onMouseOver={(e) => handeHover(e)} onMouseOut={(e) => handeHoverOut(e)} className={cx('Menu__item-link')}>
            {content}
            <span onMouseOver={() => {}} className={cx('rule')}></span>
        </a>
    );
}

export default MenuItem;
