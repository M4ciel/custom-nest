import { Module } from '@nestjs/common';
import { NewModule } from './commands/new/new.module';

@Module({
	imports: [NewModule],
	providers: [NewModule],
})
export class AppModule {}
