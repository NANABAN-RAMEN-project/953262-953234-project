const Product = require("./products");

const table = [{
    "t_no":"T01",
    "products":[],
    "totalPrice":0
},
{
    "t_no":"T02",
    "products":[],
    "totalPrice":0
},
{
    "t_no":"T03",
    "products":[],
    "totalPrice":0
},
{
    "t_no":"T04",
    "products":[],
    "totalPrice":0
},
{
    "t_no":"T05",
    "products":[],
    "totalPrice":0
},
{
    "t_no":"T06",
    "products":[],
    "totalPrice":0
},
{
    "t_no":"T07",
    "products":[],
    "totalPrice":0
},
{
    "t_no":"T08",
    "products":[],
    "totalPrice":0
},
{
    "t_no":"T09",
    "products":[],
    "totalPrice":0
},
{
    "t_no":"T10",
    "products":[],
    "totalPrice":0
},]

class Table {
    static save(product,tableNumber) {
        const currentTable = table.filter(t => t.t_no == tableNumber);
        var cnt = 0;
        for (let i = 0; i < currentTable[0].products.length; i++) {
            if (currentTable[0].products[i].product.id == product) {
                currentTable[0].products[i].qty++;
                currentTable[0].totalPrice += currentTable[0].products[i].product.price;
                cnt++;
            }
        }
        if (cnt == 0) {
            const food = Product.findById(product);
            currentTable[0].products.push({ "product": food[0], "qty": 1, "status": "queued" });
            currentTable[0].totalPrice += food[0].price;
        }
        
    }
    static getTableById(tableNumber) {
        return table.filter(t => t.t_no == tableNumber);
    }
    static gettotal (){
        return table.totalPrice;
    }
    
    static delete(productId,tableNumber) {
        var targetTable = table.filter(t => t.t_no == tableNumber);
        for (let i = 0; i < targetTable[0].products.length; i++) {
            if (targetTable[0].products[i].product.id == productId) {
                targetTable[0].totalPrice -= (targetTable[0].products[i].product.price * targetTable[0].products[i].qty);
                targetTable[0].products.splice(i, 1);
            }
        }
        
    }
}
module.exports = Table;