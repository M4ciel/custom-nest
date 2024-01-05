import { Module } from '@nestjs/common';
import { ExampleModule } from './modules/example/example.module';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './modules/health/health.module';
import env from './config/env';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [env],
		}),
		HealthModule,
		ExampleModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
