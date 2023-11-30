import { Module } from '@nestjs/common';
import { ExampleCommand } from './example.command';
import { ExampleQuestions } from '../../libs/questions/example.question';

@Module({
	providers: [ExampleCommand, ExampleQuestions],
})
export class ExampleModule {}
