const url = "localhost:27017/test";
const db = require("monk")(url);
const collection = db.get("collection");

/**
 * Type: POST 
 * Desc: Create an issue
 */
exports.createIssue = async (issue) => {
    return collection.insert(issue)
        .then(() => collection.find({}))
        .then(res => {
            return {
                correct: {
                    issues: res
                },
                error: null
            };
        })
        .catch(err => {
            return {
                correct: null,
                error: err
            };
        })
        .finally(() => db.close());
};

/**
 * Type: GET 
 * Desc: Retrieves all issues
 */
exports.readIssues = () => {
    return collection.find({})
        .then(res => {
            return {
                correct: {
                    issues: res
                },
                error: null
            };
        })
        .catch(err => {
            return {
                correct: null,
                error: err
            };
        })
        .finally(() => db.close());
};

/**
 * Type: UPDATE 
 * Desc: Updates an issue given an id
 */
exports.updateIssue = async (issue) => {
    collection.findOneAndUpdate({ _id: issue._id }, {
        $set: {
            title: issue.title,
            description: issue.description,
            severity: issue.severity,
            status: issue.status
        }
    })
        .then(() => collection.find({}))
        .then(res => {
            return {
                correct: {
                    issues: res
                },
                error: null
            };
        })
        .catch(err => {
            return {
                correct: null,
                error: err
            };
        })
        .finally(() => db.close());

};

/**
 * Type: DELETE 
 * Desc: Deletes an issue given an id
 */
exports.deleteIssue = (id) => {
    return collection.findOneAndDelete({ _id: id })
        .then(() => collection.find({}))
        .then(res => {
            return {
                correct: {
                    issues: res
                },
                error: null
            };
        })
        .catch(err => {
            return {
                correct: null,
                error: err
            };
        })
        .finally(() => db.close());
};

