exports.plugin = {
    name: "timesheet-datasource",
    version: "1.0.0",
    register: async function (server, options) {
            server.method({
            name: "datasource.timesheet.Query",
            method: QueryTimesheet,
        });

      
    }
};
const QueryTimesheet = (db) => {
    return new Promise((resolve, reject) => {
        db.collection('mongo-naja').find({})
            .toArray((err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
    });
 }