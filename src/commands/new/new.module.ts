import { Module } from '@nestjs/common';
import { NewCommand } from './new.command';
import { NewQuestions } from 'src/libs/questions/new.question';

@Module({
	providers: [NewCommand, NewQuestions],
})
export class NewModule {}
