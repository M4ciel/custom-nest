import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';
import { TerminusModule } from '@nestjs/terminus';

@Module({
	controllers: [HealthController],
	imports: [TerminusModule],
	providers: [HealthService],
})
export class HealthModule {}
