const express = require('express');
const port = 8000;
const db_name = 'jokes';

require('./config/mongoose.config')(db_name);

const app = express();

app.use(express.json());

require('./routes/jokes.routes')(app);

app.listen(port, () => 
    console.log(`Listening on port ${port} for requests to respond to.`),
);
