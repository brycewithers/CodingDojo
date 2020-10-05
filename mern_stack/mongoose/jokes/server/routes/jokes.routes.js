const jokesController = require('../controllers/jokes.controller');

module.exports = (app) => {
    app.post("/api/jokes/new", jokesController.create);
    app.get("/api/jokes", jokesController.getAllJokes);
    app.get("/api/jokes/random", jokesController.randomJoke);
    app.delete("/api/jokes/delete/:id", jokesController.delete);
    app.put("/api/jokes/update/:id", jokesController.update);
    app.get("/api/jokes/:id", jokesController.getOneJoke);
};