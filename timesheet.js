exports.plugin = {
    name:"timesheet",
    version: "1.0.0",
    register: async function (server, options) {

        server.method({
            name: "timesheet.List",
            method: getTimesheetList
        });
    }
};

var getTimesheetList = (server, request) => {
    return new Promise((resolve, reject) => {
        server.methods.datasource.timesheet.Query(request.mongo.db)
            .then((res) => {
                resolve(res);
            })
    });
}