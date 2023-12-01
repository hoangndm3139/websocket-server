import { Emitter } from '@socket.io/redis-emitter';
import { createClient } from 'redis';

export class SocketEmitter {
    private static instance: SocketEmitter;
    private emitter;

    constructor() {
        const redisClient = createClient({ url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}` });
        redisClient.connect().then();
        this.emitter = new Emitter(redisClient);
    }

    public static getInstance(): SocketEmitter {
        if (!this.instance) {
            this.instance = new SocketEmitter();
        }
        return this.instance;
    }
}
