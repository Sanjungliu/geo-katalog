const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const Controller = require("./controller/controller");

app.use(express.urlencoded({ extended: false }));

app.get("/", Controller.getKatalog);

app.listen(port, () => console.log(`katalog server listen at port ${port}`));
