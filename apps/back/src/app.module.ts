import { Module } from '@nestjs/common'
import { APP_FILTER } from '@nestjs/core'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { HttpExceptionFilter } from './errors/exception.filter'
import { UsersController } from './users/users.controller'

@Module({
    imports: [],
    controllers: [AppController, UsersController],
    providers: [AppService, { provide: APP_FILTER, useClass: HttpExceptionFilter }],
})
export class AppModule {}
