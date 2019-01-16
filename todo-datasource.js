exports.plugin = {
    name: "todo-datasource",
    version: "1.0.0",
    register: async function (server, options) {

        server.method({
            name: "datasource.todo.Insert",
            method: InsertCard,
        });

        server.method({
            name: "datasource.todo.Query",
            method: QueryList,
        });

        server.method({
            name: "datasource.todo.Update",
            method: updateTodo,
        });

        server.method({
            name: "datasource.todo.Remove",
            method: RemoveCard,
        });

    }
};

const InsertCard = (db, body) => {
    return db.collection('mongo-naja').insert(body);
}

const QueryList = (db) => {
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

const updateTodo = (db, id, body) => {
    return db.collection('mongo-naja').update({ _id: id }, body);
}

const RemoveCard = (db, id) => {
    return db.collection('mongo-naja').deleteOne({ _id: id });
}
