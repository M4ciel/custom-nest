import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.createMicroservice<MicroserviceOptions>(
		AppModule,
		{
			transport: Transport.KAFKA,
			options: {
				client: {
					clientId: 'example',
					brokers: ['localhost:9092'],
				},
				consumer: {
					groupId: 'example-consumer',
					allowAutoTopicCreation: true,
				},
			},
		},
	);

	app.useGlobalPipes(new ValidationPipe());

	await app.listen();
}
bootstrap();
