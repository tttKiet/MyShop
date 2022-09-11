import Header from '../components/Header';
const menuItem = [
    {
        name: 'Nổi bật',
    },
    {
        name: 'Quần áo',
    },
    {
        name: 'Giày dép',
    },
    {
        name: 'Hàng điện tử',
    },
];

const headerMenuForm = [
    {
        name: 'Đăng nhập',
    },
    {
        name: 'Đăng kí',
    },
];
function OnlyHeader({ children }) {
    return (
        <div>
            <Header menu={{ menuItem, headerMenuForm }} />
            {children}
        </div>
    );
}

export default OnlyHeader;
