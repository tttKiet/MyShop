import products from './products';

const menu = products.reduce((initialValue, item) => {
    return initialValue.concat(item.menu);
}, []);

console.log(menu);

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
        default: {
            return {
                products: [],
            };
        }
    }
}

export { initState };
export default reducer;
