import { Module } from '@nestjs/common';
import { ChatSocketController } from './chat-socket.controller';
import { ChatSocketService } from './chat-socket.service';

@Module({
  controllers: [ChatSocketController],
  providers: [ChatSocketService]
})
export class ChatSocketModule {}
