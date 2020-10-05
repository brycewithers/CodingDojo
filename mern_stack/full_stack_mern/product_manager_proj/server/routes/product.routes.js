const productController = require('../controllers/product.controller');

module.exports = (app) => {
    app.post("/api/products/new", productController.create);
    app.get("/api/products", productController.getAllProducts);
    app.get("/api/products/random", productController.randomProduct);
    app.delete("/api/products/delete/:id", productController.delete);
    app.put("/api/products/update/:id", productController.update);
    app.get("/api/products/:id", productController.getOneProduct);
};