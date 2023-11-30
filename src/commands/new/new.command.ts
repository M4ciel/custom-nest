import { Inject } from '@nestjs/common';
import { Command, CommandRunner, InquirerService } from 'nest-commander';
import * as messages from '../../libs/messages/new.message';

@Command({
	name: 'new',
	description: messages.default.description,
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
