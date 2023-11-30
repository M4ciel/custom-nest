import { Injectable } from '@nestjs/common';
import { HealthCheckResult, HealthCheckService } from '@nestjs/terminus';

@Injectable()
export class HealthService {
	constructor(private readonly healthService: HealthCheckService) {}
	async execute(): Promise<HealthCheckResult> {
		return this.healthService.check([]);
	}
}
