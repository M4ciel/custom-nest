import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const config = new DocumentBuilder()
		.setTitle('Default Example')
		.setDescription('The example API description')
		.setLicense('MIT', '../LICENSE.md')
		.setVersion('v0.0.1')
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('docs', app, document);

	app.useGlobalPipes(new ValidationPipe());
	app.enableCors();

	await app.listen(3001);
}
bootstrap();
