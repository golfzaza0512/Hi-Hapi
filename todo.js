exports.plugin = {
    name: "todo",
    version: "1.0.0",
    register: async function (server, options) {

        server.method({
            name: "todo.AddList",
            method: addList
        });

        server.method({
            name: "todo.List",
            method: getTodoList
        });

        server.method({
            name: "todo.UpdateTodo",
            method: updateTodo
        });

        server.method({
            name: "todo.Remove",
            method: removeCard
        });

    }
};

const addList = (server, request) => {
    const body = {
        size: request.payload.size,
        status: request.payload.status,
        device: request.payload.device,
        cardName: request.payload.cardName,
        priority: request.payload.priority,        
        ownerName: request.payload.ownerName
    }
    return new Promise((resolve, reject) => {
        server.methods.datasource.todo
            .Insert(request.mongo.db, body)
            .then((res) => {
                if (res.result.ok == 1) {
                    console.log(res.ops)
                    resolve({
                        status: 200,
                        message: "ถูกแล้วจ้า",
                        data: (res.ops && res.ops.length > 0) ? res.ops[0] : {}
                    });
                } else {
                    reject({
                        status: 500,
                        message: "เราทำผิดน้ะ จุ้บๆ",
                        data: null
                    });
                }
            }).catch((error) => {
                console.log(error);
                reject({
                    status: 500,
                    message: "ไปตายส้ะ อิอิ",
                    data: null
                });
            });
    });

}
var getTodoList = (server, request) => {
    return new Promise((resolve, reject) => {
        server.methods.datasource.todo.Query(request.mongo.db)
            .then((res) => {
                resolve(res);
            })
    });
}

const updateTodo = (server, request) => {
    const body = {
        size: request.payload.size,
        status: request.payload.status,
        device: request.payload.device,
        cardName: request.payload.cardName,
        priority: request.payload.priority,        
        ownerName: request.payload.ownerName
    }

    return new Promise((resolve, reject) => {
        // const date = request.mongo.date;
        server.methods.datasource.todo
            .Update(request.mongo.db, request.params.cardName, body)
            .then((res) => {
                if (res.result.ok == 1) {
                    console.log(body)
                    resolve({
                        status: 200,
                        message: "เย้ !!!!!",
                        data: body
                    });
                } else {
                    reject({
                        status: 500,
                        message: "ไม่ !!",
                        data: null
                    });
                }
            }).catch((error) => {
                console.log(error);
                reject({
                    status: 500,
                    message: "ไม่ !!!!",
                    data: null
                });
            });
    });
}

var removeCard = (server, request) => {
    const cardName = request.params.cardName;
    return new Promise((resolve, reject) => {
        server.methods.datasource.todo
            .Remove(request.mongo.db, cardName)
            .then((res) => {
                if (res.deletedCount) {
                    resolve({
                        status: 200,
                        message: "ไม่ทำแมร่งแล้ว เอาคืนไป๋ !!!!!!",
                        data: null
                    });
                } else {
                    reject({
                        status: 500,
                        message: "ทำๆไปเหอะๆ !!",
                        data: null
                    });
                }
            })
            .catch((error) => {
                console.log(error);
                reject({
                    status: 500,
                    message: "ทำๆไป !!",
                    data: null
                });
            });
    });
}
