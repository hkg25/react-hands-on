import cartReducer from "./cartReducer";

describe("cart reducer tests ",() => {

    //test case
    it("should be empty list ", () => {
        expect(cartReducer(undefined,{})).toEqual([]);
    })

    it("should be empty list with data ", () => {
        expect(cartReducer([{id:1}],{type:'CART.EMPTY_CART'})).toEqual([]);
    })

});