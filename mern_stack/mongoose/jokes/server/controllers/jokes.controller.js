const Joke = require('../models/jokes.model');

module.exports = {
    getAllJokes(req, res) {
        console.log('getAllJokes method executed');

        Joke.find()
            .then((jokes) => {
                res.json(jokes);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    getOneJoke(req, res) {
        console.log('getOneJoke method executed');

        // .find will always return an array even if only one object is found
        // Joke.find({ _id: req.params.id }) --> .findById returns only one object, no array
        Joke.findById(req.params.id)
            .then((joke) => {
                res.json(joke);
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
        Joke.create(req.body)
            // this is the newly created joke that the db returned
            .then((joke) => {
                res.json(joke);
            })
            .catch((err) => {
                // so that axios' .catch will be triggered
                // for validation errors and other errors
                res.status(400).json(err);
            });
    },

    randomJoke(req, res) {
        console.log('randomJoke method executed');

        Joke.aggregate([{$sample: {size: 1}}])
            .then((joke) => {
                res.json(joke);
            })
            .catch((err) => {
                res.json(err);
            })
    },

    update(req, res) {
        console.log('update method executed', 'url params:', req.params);

        Joke.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            // return the updated object rather than the old info
            new: true,
        })
            .then((joke) => {
                // the joke with the updated info
                console.log('update method .then');
                res.json(joke);
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

        Joke.findByIdAndDelete(req.params.id)
            .then((joke) => {
                res.json(joke);
            })    
            .catch((err) => {
                res.json(err);
            });
    },
}