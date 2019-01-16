'use strict';

const Hapi = require('hapi');

const dbOpts = {
    url:
        "mongodb://admin:admin@cluster0-shard-00-00-sdzlc.gcp.mongodb.net:27017,cluster0-shard-00-01-sdzlc.gcp.mongodb.net:27017,cluster0-shard-00-02-sdzlc.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true",
    settings: {
        poolSize: 10
    },
    decorate: true
};

// Create a server with a host and port
const server = Hapi.server({
    host: '0.0.0.0',
    port: process.env.PORT || 8000
});

// the route

server.route({
    method: "POST",
    path: "/add",
    handler: (request, reply) => {
        return server.methods.timesheet
            .AddTimesheet(server, request)
            .then(reply);
    }
});

server.route({
    method: 'GET',
    path: '/list',
    handler: (request, reply) => {
        return server.methods.timesheet
            .List(server, request)
            .then(reply);
    }
});

server.route({
    method: "PUT",
    path: "/update/{date}",
    async handler(request, reply) {
        return server.methods.timesheet
            .UpdateTimesheet(server, request)
            .then(reply);
    }
});

server.route({
    method: "DELETE",
    path: "/del/{date}",
    handler: (request, reply) => {
        return server.methods.timesheet
            .RemoveTimesheet(server, request)
            .then(reply);
    }
});

// Start the server
const start = async function () {
    try {
        await server.register([
            {
                plugin: require("hapi-mongodb"),
                options: dbOpts
            },
            require("./timesheet"),
            require("./timesheet-datasource")
        ]);
        await server.start();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log("Server running at:", server.info.uri);
};

start();