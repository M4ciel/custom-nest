import { ExampleModule } from './commands/example/example.module';
import { Module } from '@nestjs/common';

@Module({
	imports: [ExampleModule],
	providers: [ExampleModule],
})
export class AppModule {}
