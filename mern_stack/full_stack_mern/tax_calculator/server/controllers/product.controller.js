const Product = require('../models/product.model');

module.exports = {
    getAllProducts(req, res) {
        console.log('getAllProducts method executed');

        Product.find()
            .then((products) => {
                res.json(products);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    getOneProduct(req, res) {
        console.log('getOneProduct method executed');

        // .find will always return an array even if only one object is found
        // Product.find({ _id: req.params.id }) --> .findById returns only one object, no array
        Product.findById(req.params.id)
            .then((product) => {
                res.json(product);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    create(req, res) {
        console.log('create method executed');
        // .create is async, we don't know exactly when it will finish, so it returns a promise
        // which we need to use .then to know when it's fulfilled
        // req.body is the data in the form that was POSTed or the data POSTed from postman
        Product.create(req.body)
            // this is the newly created product that the db returned
            .then((product) => {
                res.json(product);
            })
            .catch((err) => {
                // so that axios' .catch will be triggered
                // for validation errors and other errors
                res.status(400).json(err);
            });
    },

    randomProduct(req, res) {
        console.log('randomProduct method executed');

        Product.aggregate([{$sample: {size: 1}}])
            .then((product) => {
                res.json(product);
            })
            .catch((err) => {
                res.json(err);
            })
    },

    update(req, res) {
        console.log('update method executed', 'url params:', req.params);

        Product.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            // return the updated object rather than the old info
            new: true,
        })
            .then((product) => {
                // the product with the updated info
                console.log('update method .then');
                res.json(product);
            })
            .catch((err) => {
                // so that axios' .catch will be triggered
                // for validation errors and other errors
                console.log('update method .catch');
                res.status(400).json(err);
            });
    },

    delete(req, res) {
        console.log('delete method executed', 'url params:', req.params);

        Product.findByIdAndDelete(req.params.id)
            .then((product) => {
                res.json(product);
            })    
            .catch((err) => {
                res.json(err);
            });
    },
}