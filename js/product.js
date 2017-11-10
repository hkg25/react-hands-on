var Product =  (function () {
    function Product(name) {
        this.name = name;
    }
    Product.prototype.getName = function () {
        return   this.name;
    };

    Product.prototype.setName = function (name) {
        this.name = name;
    };

    return Product;
} () ); // ==> Immediately Invoked Function Execution IIFE

var product = new Product("Apple iPhone")
console.log(product.getName());
product.setName("Google Nexus");
console.log(product.getName());