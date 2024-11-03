const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello from Express microservice!');
});

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});
const { Eureka } = require('eureka-js-client');

// Initialize Eureka client
const client = new Eureka({
    instance: {
        app: 'express-microservice',
        instanceId: `express-microservice:${port}`,
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        port: {
            '$': port,
            '@enabled': 'true',
        },
        vipAddress: 'express-microservice',
        dataCenterInfo: {
            '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
            name: 'MyOwn',
        },
    },
    eureka: {
        // Eureka server configuration
        host: 'localhost',
        port: 8761,
        servicePath: '/eureka/apps/',
    },
});

// Start Eureka client
client.start((error) => {
    console.log(error || 'Eureka client started successfully');
});
