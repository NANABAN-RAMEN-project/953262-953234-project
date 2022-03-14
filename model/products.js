const products = [{
    "id":"1",
    "title":"Karaage Chicken",
    "price":45,
    "imageURL":"https://bn1304files.storage.live.com/y4mF2pQdYURsFGp-nVvQAyNagWQIAY906n735w5Gdb0aXMKDyziotbpGlCsyKFB4ZR7G41FKBCtsDAyg-Wgsaf8atsh6GyDAUebhoTFnYFgiH1ti5bxKT4I-LpT8zr1coVI7ct8OqeE4bGeuMUKVMNnR2RDzhuwXUL9JwQkblwUvL9G9rOnh8ioohaTGRdnih7s?width=500&height=399&cropmode=none",
    "description":"",
},
{
    "id":"2",
    "title":"Tamagoyaki",
    "price":30,
    "imageURL":"https://bn1304files.storage.live.com/y4mMIsIRa56PPeuRopnM85qRV9FSZMKKNJE2GSV_-qZoMWrnNws7IDYIiMTjRfn8gB5nE9_XeD6CysJiIzaJYtuxV0j8vBik1oi_jGknyth3m8Hc5__HgB03vZYMxCNgoVXKjy21_t1VkuWef3xG6BL_hsRO3mpocp4ZzHG29Tu85Rar9xpDZZd8Bfd2H1-S7tF?width=469&height=375&cropmode=none",
    "description":"",
},
{
    "id":"3",
    "title":"Miso Nanaban Ramen",
    "price":65,
    "imageURL":"https://bn1304files.storage.live.com/y4mwZYuxPo6C6CgQ8pccedAR13m-fH8MGYBn8F85M5WTRagI-vUue_hO4VGCZhXNMq-iatuAurAUC_GUXH1q8z06jrDbzitR9xSjVS30kahM8uMsSg8YPae3Mdj5BVheQ4pGqg4JRCbJHDNZ_EA63_jLxrXCrCN7T1Q1dM1eZROj55iDGJo9mzzRHd00PMidO0x?width=761&height=951&cropmode=none",
    "description":"",
},
{
    "id":"4",
    "title":"Spicy Garlic Miso Ramen",
    "price":70,
    "imageURL":"https://bn1304files.storage.live.com/y4mt8uPegkXHk19fYSg6sDtf8bRlQaJV_qVR3Z3_5GC9iwFiQs5kZYekgpI4klZMCo3_T5aEsX1FjlXCnB5hBTnLatM_gmc7NK0oUSt5yINc8HIPc2dXjxF5JJ2mCgW1f-loJG7YAJudtL-F8P7EztmAe70yDlo_8B2v26PiZ64hChUWIkK7pMOOzREDzEap6O8?width=678&height=849&cropmode=none",
    "description":"",
},
{
    "id":"5",
    "title":"Hot Green Tea",
    "price":20,
    "imageURL":"https://bn1304files.storage.live.com/y4mWVzinK8CkvnfHFxCxJfmSJvH8E1_SZjmdNCGU1AYia_f_i7tPcWMj4yt6B4dsoBB2bOJ6J-0-emAE3eNiFPWCODpyvLNQwGaSw5QQKweU1GTWh23zYvyBRXWbLxrK6xDePu3ISz6kEkP2aw3K-FkrARw-GN0ZiktOrgKFIjtOB-MS0-70_GEBLFd85-G0soD?width=1000&height=799&cropmode=none",
    "description":"",
},
{
    "id":"6",
    "title":"Lemon Iced Tea",
    "price":20,
    "imageURL":"https://bn1304files.storage.live.com/y4mczUqFTGIw0zPy8zHQsXXZnIrM4Z4Ks0Poa3pMAQek7SB0kIs2sjDn5GVUsgTEbMiBqjerx436F0f1bZOGqWTd239-pyLoNHdRYUZRMsjbrsKiA66wCdQYTydywMmPStSvp1IoRwmQqhLB732BCdBBW9yOA19qdlcnAPNLd6TWXHVQMrjSbbeMfj26HxwC5IH?width=1194&height=955&cropmode=none",
    "description":"",
},
{
    "id":"7",
    "title":"French Fries",
    "price":35,
    "imageURL":"https://bn1304files.storage.live.com/y4m4GRX0hm69_RGNb0WjUFmByJBFXOh25WxNdCIx8p2rBLwEcg3Ps_0HhQDHOgLKjSDu5P8AeRQ4jjBXLPv0Wst3VqnkBSwXyC6uyMltEzUBhKh3QNyK89VXY8PCQZWb9ujbYbJPB6vXiTv0EMI4CsR-FzT0eJ_l70hF8dyvbivh8Zcru-TB6udBQckhc18l0X_?width=750&height=600&cropmode=none",
    "description":"",
},
{
    "id":"8",
    "title":"Naruto Fishcake",
    "price":35,
    "imageURL":"https://bn1304files.storage.live.com/y4m64ouqFoP9jI6dwMMihDPmlulFYQ67SwICGx8-NPjnXU-nRIXuN-BqTWYPGHWQhiO0nz7q9WiS-MbdJRs_ZQkPe55Mm1afwBUIbwm_QdFnMPC980mfA3ZEeIDKFWNoygoJYZfkr-KBThDrYCjpKGT7uliRNL4tvx83jHfbXgOYg0m2UlATBUMngv2OkvV9Dtr?width=751&height=601&cropmode=none",
    "description":"",
}]

class Product {
    constructor(id, title, price, imageURL, description) {
        this.id = id;
        this.title = title;
        this.price = new Number(price);
        this.imageURL = imageURL;
        this.description = description;
    }

    save() {
        this.id = Math.floor(Math.random() * 100000);
        products.push(this);
    }
   
    static findApetizer() {
        const apetizer = [products[0],products[1],products[6],products[7]]
        return apetizer;
    }

    static findMain() {
        const main = [products[2],products[3]]
        return main;
    }

    static findBeverage(){
        const beverage = [products[4],products[5]]
        return beverage;
    }

    static findById(prodId) {
        return products.filter(p => p.id == prodId);
    }

    update() {
        const editProductIndex = products.findIndex(p => p.id == this.id);
        products[editProductIndex] = this;
    }

    static deleteById(prodId) {
        const deleteProductIndex = products.findIndex(p => p.id == prodId);
        products.splice(deleteProductIndex, 1);
    }

}

module.exports = Product;