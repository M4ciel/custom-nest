import { Module } from '@nestjs/common';
import { HealthModule } from './modules/health/health.module';
import { ExampleModule } from './modules/example/example.module';
import env from './config/env';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './config/database/database.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [env],
		}),
		HealthModule,
		DatabaseModule,
		ExampleModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
