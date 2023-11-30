import { Inject } from '@nestjs/common';
import { Command, CommandRunner, InquirerService } from 'nest-commander';

@Command({
	name: 'new',
	description: 'Creating a new Nestjs Custom Application',
})
export class NewCommand extends CommandRunner {
	constructor(
		@Inject(InquirerService)
		private readonly inquirer: InquirerService,
	) {
		super();
	}

	run(): Promise<void> {
		throw new Error('Method not implemented.');
	}
}
