import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './config/database/database.module';
import { ExampleModule } from './modules/example/example.module';

@Module({
	imports: [ConfigModule.forRoot(), DatabaseModule, ExampleModule],
})
export class AppModule {}
