const { getProducts } = require("./products");

describe("getProducts", () => {
    it("should return products list", () => {
        const expected = {
            products: [
                {
                    id: 1,
                    name: "Samsung TV"
                },
                {
                    id: 2,
                    name: "LG TV"
                }
            ]
        };

        expect(getProducts()).toEqual(expected);
    });
});
