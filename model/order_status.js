let order = null;

module.exports = class Order {
    static save(cart,totalone) {
        if (order === null) {
            order = { orderList: [], totalPrice: 0};
        }
        order.orderList = cart;
        order.totalPrice = totalone
    }
    static getOrder() {
        return order;
    }
    static getTotal (){
        return order.totalPrice;
    }
}