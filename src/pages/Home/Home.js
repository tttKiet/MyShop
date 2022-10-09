import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import ProductItem from './ProductItem';

const cx = classNames.bind(styles);

let products = [
    {
        name: 'Ban Phim',
        menu: [
            {
                name: 'Bam phim pro 12 nut bam!',
                price: '500k',
                img: require('~/assets/products/imgs/test.jpg'),
            },
            {
                name: 'Bam phim test 2',
                price: '600k',
                img: require('~/assets/products/imgs/test.jpg'),
            },
        ],
    },
    {
        name: 'Giay',
        menu: [
            {
                name: 'Bana So nict',
                price: '200k',
                img: require('~/assets/products/imgs/test.jpg'),
            },
        ],
    },
];

function Home() {
    return (
        <div className={cx('home')}>
            <ProductItem
                name="Phim coc oc oco cococo  cococo  co  "
                source={require('~/assets/products/imgs/test.jpg')}
                price="200k"
            />
            <ProductItem name="Phim co" source={require('~/assets/products/imgs/s1.jpg')} price="200k" />
            <ProductItem name="Phim co" source={require('~/assets/products/imgs/test2.webp')} price="200k" />
            <ProductItem name="Phim co" source={require('~/assets/products/imgs/test2.webp')} price="200k" />
            <ProductItem name="Phim co" source={require('~/assets/products/imgs/test5.webp')} price="200k" />
            <ProductItem uctItem name="Phim co" source={require('~/assets/products/imgs/s1.jpg')} price="200k" />
            <ProductItem name="Phim co" source={require('~/assets/products/imgs/test2.webp')} price="200k" />
            <ProductItem name="Phim co" source={require('~/assets/products/imgs/test2.webp')} price="200k" />
            <ProductItem name="Phim co" source={require('~/assets/products/imgs/test5.webp')} price="200k" />
            <ProductItem uctItem name="Phim co" source={require('~/assets/products/imgs/s1.jpg')} price="200k" />
            <ProductItem name="Phim co" source={require('~/assets/products/imgs/test2.webp')} price="200k" />
            <ProductItem name="Phim co" source={require('~/assets/products/imgs/test2.webp')} price="200k" />
            <ProductItem name="Phim co" source={require('~/assets/products/imgs/test5.webp')} price="200k" />
            <ProductItem uctItem name="Phim co" source={require('~/assets/products/imgs/s1.jpg')} price="200k" />
            <ProductItem name="Phim co" source={require('~/assets/products/imgs/test2.webp')} price="200k" />
            <ProductItem name="Phim co" source={require('~/assets/products/imgs/test2.webp')} price="200k" />
            <ProductItem name="Phim co" source={require('~/assets/products/imgs/test5.webp')} price="200k" />
            <ProductItem uctItem name="Phim co" source={require('~/assets/products/imgs/s1.jpg')} price="200k" />
            <ProductItem name="Phim co" source={require('~/assets/products/imgs/test2.webp')} price="200k" />
            <ProductItem name="Phim co" source={require('~/assets/products/imgs/test2.webp')} price="200k" />
            <ProductItem name="Phim co" source={require('~/assets/products/imgs/test5.webp')} price="200k" />
            <ProductItem uctItem name="Phim co" source={require('~/assets/products/imgs/s1.jpg')} price="200k" />
            <ProductItem name="Phim co" source={require('~/assets/products/imgs/test2.webp')} price="200k" />
            <ProductItem name="Phim co" source={require('~/assets/products/imgs/test2.webp')} price="200k" />
            <ProductItem name="Phim co" source={require('~/assets/products/imgs/test5.webp')} price="200k" />
            <ProductItem uctItem name="Phim co" source={require('~/assets/products/imgs/s1.jpg')} price="200k" />
            <ProductItem name="Phim co" source={require('~/assets/products/imgs/test2.webp')} price="200k" />
            <ProductItem name="Phim co" source={require('~/assets/products/imgs/test2.webp')} price="200k" />
            <ProductItem name="Phim co" source={require('~/assets/products/imgs/test5.webp')} price="200k" />
            <ProductItem name="Phim co" source={require('~/assets/products/imgs/test2.webp')} price="200k" />
        </div>
    );
}

export default Home;
