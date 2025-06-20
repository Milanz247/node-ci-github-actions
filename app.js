// app.js
const express = require('express');
const redis = require('redis');

const app = express();
const port = 3000;

// Redis Client එක හදනවා.
// 'redis-server' කියන්නේ compose file එකේ අපි දෙන service name එක.
// Docker Compose ස්වයංක්‍රීයව මේ නම IP address එකකට resolve කරනවා.
const redisClient = redis.createClient({
    url: 'redis://redis-server:6379'
});

redisClient.on('error', (err) => console.log('Redis Client Error', err));

(async () => {
    await redisClient.connect();
})();


app.get('/', async (req, res) => {
    try {
        let visitCount = await redisClient.get('visits');

        if (visitCount === null) {
            visitCount = 0;
        }

        res.send(`Hello DevOps Professor! Number of visits: ${visitCount}`);
        await redisClient.set('visits', parseInt(visitCount) + 1);

    } catch (e) {
        res.status(500).send('Error connecting to Redis');
    }
});

const server = app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

module.exports = server;
