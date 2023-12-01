import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SocketServer } from './socket/socket-server';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    SocketServer.getInstance();

    await app.listen(3003);
}
bootstrap();
