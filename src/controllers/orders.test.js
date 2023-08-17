const { getOrders } = require("./orders");

describe("getOrders", () => {
    it("should return orders list", () => {
        const expected = {
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

        expect(getOrders()).toEqual(expected);
    });
});
