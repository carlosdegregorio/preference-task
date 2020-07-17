const user = "preference1234";
const password = "preference1234";
const dbname = "issueslist";
const url = `mongodb+srv://${user}:${password}@cluster0.2qvfu.mongodb.net/${dbname}?retryWrites=true&w=majority`;
const mongoose = require("mongoose");
const Issue = require("./models/Issue");

/*
 * Establish the db connection
 */
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);

        console.log(`Checking if there is some data...`);
        if (!(await Issue.find({})).length) {
            console.log(`Seems like there is no data...`);
            console.log(`Inserting some examples...`);
            await insertSomeData();
            console.log(`Done!`);
        }
        console.log("The database has been correctly instantiated!");
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

/*
 * Insert some data into the database
 */
const insertSomeData = async () => {
    try {
        const data = [
            { title: "Issue 1", description: "Some description...", severity: "High", status: "Done" },
            { title: "Issue 2", description: "Some description...", severity: "Medium", status: "Doing" },
            { title: "Issue 3", description: "Some description...", severity: "Low", status: "Todo" },
        ];
        await Issue.insertMany(data, function (error, docs) { });
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB;