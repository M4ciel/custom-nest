import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { HealthService } from './health.service';

@Module({
	controllers: [HealthController],
	imports: [TerminusModule],
	providers: [HealthService],
})
export class HealthModule {}
