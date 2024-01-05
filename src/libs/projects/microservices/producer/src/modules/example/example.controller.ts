import { Controller, Get } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { Example } from './interfaces/example.interface';

@Controller('example')
export class ExampleController {
	@Client({
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
			send: {
				timeout: 2000,
			},
		},
	})
	private client: ClientKafka;

	async onModuleInit() {
		const requestPatters = ['find-example'];

		requestPatters.forEach(async (pattern) => {
			this.client.subscribeToResponseOf(pattern);
			await this.client.connect();
		});
	}

	@Get()
	findExample(): Observable<Example> {
		return this.client.send('find-example', {});
	}
}
