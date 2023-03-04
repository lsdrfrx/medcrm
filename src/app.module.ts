import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { NotificationsService } from './notifications/notifications.service';
import { NotificationsGateway } from './notifications/notifications.gateway';
import { NotificationsModule } from './notifications/notifications.module';
import { EmployeesModule } from './employees/employees.module';
import { ScheduleModule } from './schedule/schedule.module';
import { DocumentsController } from './documents/documents.controller';
import { DocumentsService } from './documents/documents.service';
import { DocumentsModule } from './documents/documents.module';

@Module({
  imports: [AuthModule, NotificationsModule, EmployeesModule, ScheduleModule, DocumentsModule],
  controllers: [AppController, DocumentsController],
  providers: [AppService, AuthService, NotificationsService, NotificationsGateway, DocumentsService],
})
export class AppModule {}
