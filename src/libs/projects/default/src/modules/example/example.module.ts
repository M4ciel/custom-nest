import { Module } from '@nestjs/common';
import { ExampleService } from './example.service';
import { ExampleController } from './example.controller';

@Module({
	controllers: [ExampleController],
	providers: [ExampleService],
})
export class ExampleModule {}
