exports.plugin = {
    name: "timesheet-datasource",
    version: "1.0.0",
    register: async function (server, options) {

        server.method({
            name: "datasource.timesheet.Insert",
            method: InsertTimesheet,
        });

        server.method({
            name: "datasource.timesheet.Query",
            method: QueryTimesheet,
        });

        server.method({
            name: "datasource.timesheet.Update",
            method: UpdateTimesheet,
        });

        server.method({
            name: "datasource.timesheet.Remove",
            method: RemoveDate,
        });

    }
};

const InsertTimesheet = (db, body) => {
    return db.collection('mongo-naja').insert(body);
}

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

const UpdateTimesheet = (db, _date, body) => {
    return db.collection('mongo-naja').update({date:_date}, body);
}

const RemoveDate = (db, date) => {
    return db.collection('mongo-naja').deleteOne({ date: date });
}
