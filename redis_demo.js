const redis = require('redis');

async function redis_main() {

    const client = redis.createClient();
    client.on('error', err => console.log("Redis Client error: ", err));
    
    console.log("connecting the client");
    await client.connect();
    console.log("client connected");
    await client.set('key', 'boo');
    console.log("The values are set");
    const value = await client.get('key');
    console.log("key read:" + value);
    client.disconnect();
}

redis_main();

module.exports = {redis_main};