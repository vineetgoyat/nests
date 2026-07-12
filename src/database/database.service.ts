import { Injectable, onModuleInit, OnApplicationShutdown } from '@nestjs/common';

@Injectable()
export class DatabaseService {
    private isConnected = false;

    onModuleInit(){
        this.isConnected = true;
        console.log('database connected')
    }
    onApplicationShutdown(signal : string){
        this.isConnected = false;
        console.log(`database disconnected due to app shutdown. Signal ${signal}`)
    }

}
