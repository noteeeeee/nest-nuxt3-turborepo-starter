import {Module} from '@nestjs/common';
import ormconfig from './ormconfig';
import {TypeOrmModule} from '@nestjs/typeorm';
import {DataSource} from "typeorm";
import {addTransactionalDataSource} from "typeorm-transactional";
import dayjs from 'dayjs';
import {DayJSModule} from "./common";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ormconfig.options,
      async dataSourceFactory(options) {
        return addTransactionalDataSource(new DataSource(options));
      },
    }),
    DayJSModule.forRoot({
      dayjs,
      isGlobal: true,
    })
  ]
})
export class AppModule {
}
