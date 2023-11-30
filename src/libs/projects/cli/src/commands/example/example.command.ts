import {
	Command,
	CommandRunner,
	InquirerService,
	Option,
} from 'nest-commander';
import * as messages from '../../libs/messages/example.message';
import { Inject } from '@nestjs/common';

@Command({
	name: 'example',
	description: messages.default.description,
})
export class ExampleCommand extends CommandRunner {
	constructor(
		@Inject(InquirerService)
		private readonly inquirer: InquirerService,
	) {
		super();
	}

	run(passedParams: string[], options?: Record<string, any>): Promise<void> {
		throw new Error('Method not implemented.');
	}

	@Option({
		flags: messages.default.options.example.flags,
		description: messages.default.options.example.description,
	})
	parseExample(val: string) {
		return val;
	}
}
