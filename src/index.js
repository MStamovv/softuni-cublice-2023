const express = require(`express`);


const expressConfig = require(`./config/expressConfig`);
const handlebarsConfig = require(`./config/handlebarsConfig`);

const app = express();

const port = 5000;

expressConfig(app);
handlebarsConfig(app);

// Routes
app.get(`/`, (req, res) => {
    res.render(`index`);
});


app.listen(port, () => console.log(`Server is running on ${port}...`));

