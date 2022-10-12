import products from './products';

const menu = products.reduce((initialValue, item) => {
    return initialValue.concat(item.menu);
}, []);

const initState = {
    products: menu,
};

function reducer(state, action) {
    switch (action.type) {
        case 'all': {
            return {
                products: menu,
            };
        }
        case 'tech': {
            const lastProducts = products.filter((itemParent) => {
                return itemParent.type === 'tech';
            });
            const newState = lastProducts.reduce((init, item) => {
                return init.concat(item.menu);
            }, []);
            return {
                products: newState,
            };
        }
        case 'sport': {
            const lastProducts = products.filter((itemParent) => {
                return itemParent.type === 'sport';
            });
            const newState = lastProducts.reduce((init, item) => {
                return init.concat(item.menu);
            }, []);
            return {
                products: newState,
            };
        }
        case 'clothes': {
            const lastProducts = products.filter((itemParent) => {
                return itemParent.type === 'clothes';
            });
            const newState = lastProducts.reduce((init, item) => {
                return init.concat(item.menu);
            }, []);
            return {
                products: newState,
            };
        }
        case 'popular': {
            let lastProducts = [...menu];
            lastProducts.sort((a, b) => {
                let x = a.bought;
                let y = b.bought;
                if (x.charAt(x.length - 1) === 'k') {
                    x = parseFloat(x.slice(0, x.length - 1)) * 1000;
                } else if (x.charAt(x.length - 1) !== 'k') {
                    x = parseFloat(x);
                }

                if (y.charAt(y.length - 1) === 'k') {
                    y = parseFloat(y.slice(0, y.length - 1)) * 1000;
                } else if (y.charAt(y.length - 1) !== 'k') {
                    y = parseFloat(y);
                }
                return y - x;
            });
            return {
                products: lastProducts,
            };
        }
        case 'loc': {
            return {
                products: menu,
            };
        }
        default: {
            return {
                products: [],
            };
        }
    }
}

export { initState };
export default reducer;
