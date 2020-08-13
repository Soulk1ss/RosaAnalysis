const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const Data = require('./router/datarouter');

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongo_uri = "mongodb+srv://admin:12345@cluster0.doruh.mongodb.net/rosaanalysis?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(mongo_uri, { useUnifiedTopology: true , useNewUrlParser: true, useFindAndModify: false }).then(
    () => {
        console.log("[success] task 2 : connected to the database ");
    },
    error => {
        console.log("[failed] task 2 " + error);
        process.exit();
    }
);


app.use('/api', Data)

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server is run at port ${port}`);
});