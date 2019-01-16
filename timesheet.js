exports.plugin = {
    name: "timesheet",
    version: "1.0.0",
    register: async function (server, options) {

        server.method({
            name: "timesheet.AddTimesheet",
            method: addTimesheet
        });

        server.method({
            name: "timesheet.List",
            method: getTimesheetList
        });

        server.method({
            name: "timesheet.UpdateTimesheet",
            method: updateTimesheet
        });

    }
};

const addTimesheet = (server, request) => {
    const body = {
        date: request.payload.date,
        timeIn: request.payload.timeIn,
        timeOut: request.payload.timeOut,
        description: request.payload.description,
        siteName: request.payload.siteName,
        ot: request.payload.ot
    }
    return new Promise((resolve, reject) => {
        server.methods.datasource.timesheet
            .Insert(request.mongo.db, body)
            .then((res) => {
                if (res.result.ok == 1) {
                    console.log(res.ops)
                    resolve({
                        status: 200,
                        message: "เพิ่มได้เว้ยยยยยยย",
                        data: (res.ops && res.ops.length > 0) ? res.ops[0] : {}
                    });
                } else {
                    reject({
                        status: 500,
                        message: "เพิ่มไม่ได้เว้ยยยยยยย",
                        data: null
                    });
                }
            }).catch((error) => {
                console.log(error);
                reject({
                    status: 500,
                    message: "เพิ่มไม่ได้เว้ยยยยยยย",
                    data: null
                });
            });
    });

}
var getTimesheetList = (server, request) => {
    return new Promise((resolve, reject) => {
        server.methods.datasource.timesheet.Query(request.mongo.db)
            .then((res) => {
                resolve(res);
            })
    });
}

const updateTimesheet = (server, request) => {
    const body = {
        date: request.payload.date,
        timeIn: request.payload.timeIn,
        timeOut: request.payload.timeOut,
        description: request.payload.description,
        siteName: request.payload.siteName,
        ot: request.payload.ot
    }

    return new Promise((resolve, reject) => {
        // const date = request.mongo.date;
        server.methods.datasource.timesheet
            .Update(request.mongo.db, request.params.date, body)
            .then((res) => {
                if (res.result.ok == 1) {
                    console.log(body)
                    resolve({
                        status: 200,
                        message: "เพิ่มได้เว้ยยยยยยย",
                        data: body
                    });
                } else {
                    reject({
                        status: 500,
                        message: "เพิ่มไม่ได้เว้ยยยยยยย",
                        data: null
                    });
                }
            }).catch((error) => {
                console.log(error);
                reject({
                    status: 500,
                    message: "เพิ่มไม่ได้เว้ยยยยยยย",
                    data: null
                });
            });
    });
}
