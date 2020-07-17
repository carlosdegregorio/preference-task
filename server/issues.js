const connectDB = require('./dbprovider');
const Issue = require("./models/Issue");
connectDB();

/**
 * Insert an issue into the database
 * Type: POST 
 * @param {Issue} issue - Issue object
 */
exports.createIssue = (issue) => {
    return Issue.create(issue)
        .then(() => Issue.find({}))
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
        });
};

/**
 * Desc: Retrieves all issues
 * Type: GET
 */
exports.readIssues = () => {
    return Issue.find({})
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
        });
};

/**
 * Type: UPDATE 
 * Desc: Updates an issue given an id
 * @param {Issue} issue - Issue object
 */
exports.updateIssue = async (issue) => {
    return Issue.findByIdAndUpdate(issue._id, {
        $set: {
            title: issue.title,
            description: issue.description,
            severity: issue.severity,
            status: issue.status
        }
    })
        .then(() => Issue.find({}))
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
        });
};

/**
 * Type: DELETE 
 * Desc: Deletes an issue given an id
 * @param {string} id - Issue id
 */
exports.deleteIssue = (id) => {
    return Issue.findByIdAndRemove(id)
        .then(() => Issue.find({}))
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
        });
};

