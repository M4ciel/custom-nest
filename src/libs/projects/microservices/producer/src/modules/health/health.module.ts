import { TerminusModule } from '@nestjs/terminus';
import { Module } from '@nestjs/common';
import { HealthService } from './health.service';
import { HealthController } from './health.controller';

@Module({
	controllers: [HealthController],
	imports: [TerminusModule],
	providers: [HealthService],
})
export class HealthModule {}
