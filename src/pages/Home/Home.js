import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import ProductItem from './ProductItem';
import { useContext } from 'react';
import { StoreContext } from '~/store';
const cx = classNames.bind(styles);

function Home() {
    const [state] = useContext(StoreContext);

    const { products } = state;

    return (
        <div className={cx('home')}>
            {products.map((item, i) => {
                return (
                    <ProductItem
                        name={item.name}
                        source={item.source}
                        key={i}
                        price={item.price}
                        bought={item.bought}
                        link={item.link}
                    />
                );
            })}
        </div>
    );
}

export default Home;
