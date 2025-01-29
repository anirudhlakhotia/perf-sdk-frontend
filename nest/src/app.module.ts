import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseService } from './database.service';
import { DashboardService } from './dashboard.service';
require('dotenv').config();
const Promise = require('bluebird');
Promise.config({
  longStackTraces: true,
});
const initOptions = {
  promiseLib: Promise,
};
const pgp = require('pg-promise')(initOptions);

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: DatabaseService,
      useFactory: async () => {
        const client = pgp({
          user: process.env.CB_DATABASE_USERNAME ? process.env.CB_DATABASE_USERNAME : 'postgres',
          host: process.env.CB_DATABASE ? process.env.CB_DATABASE : 'localhost',
          database: 'perf',
          password: process.env.CB_DATABASE_PASSWORD,
          port: 5432,
        });
        await client.connect();
        return new DatabaseService(client);
      },
    },
    DashboardService,
  ],
})
export class AppModule {}
