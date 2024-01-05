import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HealthService } from './health.service';
import { HealthCheck, HealthCheckResult } from '@nestjs/terminus';

@ApiTags('health')
@Controller('health')
export class HealthController {
	constructor(private readonly healthService: HealthService) {}

	@Get()
	@HealthCheck()
	index(): Promise<HealthCheckResult> {
		return this.healthService.execute();
	}
}
