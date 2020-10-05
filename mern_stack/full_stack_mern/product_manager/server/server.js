const express = require('express');

const app = express();

require('./server/routes/product.routes')(app);

app.listen(8000, () => 
    console.log('Listening on port 8000'),
);