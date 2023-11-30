import { Module } from '@nestjs/common';
import { NewCommand } from './new.command';

@Module({
	imports: [NewCommand],
})
export class NewModule {}
