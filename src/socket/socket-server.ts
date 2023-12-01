import { Server } from 'socket.io';
import { createClient } from 'redis';
import { createAdapter } from '@socket.io/redis-adapter';

export class SocketServer {
    private static instance: SocketServer;
    private io: Server;

    constructor() {
        this.io = new Server();
        const pubClient = createClient({ url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}` });
        const subClient = pubClient.duplicate();

        Promise.all([pubClient.connect(), subClient.connect()]).then(() => {
            this.io.adapter(createAdapter(pubClient, subClient));
            this.io.listen(Number(process.env.REDIS_SERVER_PORT));
        });
    }

    /**
     * @description [Singleton pattern] Do not create new instance, use this function to call it to use any feature of redis
     * @example SocketServer.getInstance().emitNewOrderCreated(order);
     */
    public static getInstance(): SocketServer {
        if (!SocketServer.instance) {
            SocketServer.instance = new SocketServer();
        }
        return SocketServer.instance;
    }
}
