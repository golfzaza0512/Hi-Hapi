'use strict';

const Hapi = require('hapi');

const dbOpts = {
    url:
        "-----รอ mongodb-----",
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

// Add the route
server.route({
    method: 'GET',
    path: '/hello',
    handler: function (request, h) {

        return 'HI--MY-HAPI';
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
            require("./hapi-my-water-product"),
            require("./hapi-my-water-datasource")
        ]);
        await server.start();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log("Server running at:", server.info.uri);
};

start();