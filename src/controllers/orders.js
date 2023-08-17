const getOrders = () => {
    return {
        orders: [
            {
                id: 1,
                productIds: [1, 2],
                totalPrice: 40
            },
            {
                id: 2,
                productIds: [2],
                totalPrice: 20
            }
        ]
    };
};

module.exports = { getOrders };