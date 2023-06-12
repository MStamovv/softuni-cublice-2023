const express = require(`express`);


const expressConfig = require(`./config/expressConfig`);
const handlebarsConfig = require(`./config/handlebarsConfig`);
const routes = require(`./routes`);
const dbConnect = require(`./config/dbConfig`);




const app = express();

const port = 5000;





expressConfig(app);
handlebarsConfig(app);

dbConnect()
.then(() => console.log(`DB connect successfully`))
.catch(err => {console.log(`DB error : `, err)});



app.use(routes);


app.listen(port, () => console.log(`Server is running on ${port}...`));




