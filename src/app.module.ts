import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from './jobs/jobs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jobs } from './jobs/jobs.entity';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { User } from './user/user.entity';
import { Profile } from './profile/profile.entity';

@Module({
  imports: [JobsModule, UserModule, ProfileModule,
    TypeOrmModule.forRootAsync({
    imports: [],
    inject: [],
    useFactory:()=> ({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '21292732',
      database: 'jobs_info',
      // entities: [Jobs, User, Profile],
      autoLoadEntities: true,
      synchronize: true,
    })
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
