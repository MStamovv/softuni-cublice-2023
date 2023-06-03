const express = require(`express`);


const expressConfig = require(`./config/expressConfig`);
const handlebarsConfig = require(`./config/handlebarsConfig`);
const homeController = require(`./controllers/homeController`);
const cubeController = require(`./controllers/cubeController`);

const app = express();

const port = 5000;

expressConfig(app);
handlebarsConfig(app);

app.use(homeController);
app.use(`/cubes`,cubeController);




app.listen(port, () => console.log(`Server is running on ${port}...`));

