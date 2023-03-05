import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { NotificationsModule } from './notifications/notifications.module';
import { EmployeesModule } from './employees/employees.module';
import { ScheduleModule } from './schedule/schedule.module';
import { DocumentsModule } from './documents/documents.module';
import { MongooseModule } from '@nestjs/mongoose';

const DB_URI = process.env.DB_URI || 'mongodb://admin:admin@localhost:27017';

@Module({
  imports: [
    MongooseModule.forRoot(DB_URI),
    AuthModule,
    NotificationsModule,
    EmployeesModule,
    ScheduleModule,
    DocumentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
