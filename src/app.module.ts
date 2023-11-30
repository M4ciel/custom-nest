import { Module } from '@nestjs/common';
import { NewModule } from './commands/new/new.module';

@Module({
	imports: [NewModule],
	providers: [],
})
export class AppModule {}
