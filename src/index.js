const express = require(`express`);
const handlebars = require(`express-handlebars`);

const app = express();

const port = 5000;


// Handlebars confing
app.engine(`hbs`, handlebars.engine({
    extname: "hbs",
}));
app.set(`view engine`, `hbs`);
app.set(`views`, `src/views`);

// Routes
app.get(`/`, (req, res) => {
    res.render(`index`);
});


app.listen(port, () => console.log(`Server is running on ${port}...`));

