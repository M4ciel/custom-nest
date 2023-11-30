import { Inject } from '@nestjs/common';
import { Command, CommandRunner, InquirerService } from 'nest-commander';
import * as messages from 'src/libs/messages/new.message';
import { cpSync, mkdirSync } from 'fs';
import * as path from 'path';

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

	async run(): Promise<void> {
		console.log(messages.default.messages.start);
		console.log(messages.default.messages.wait);

		const newValues = await this.inquirer.ask<{
			newName: string;
			newType: string;
		}>('new-questions', null);

		try {
			const destinationPath = path.join(process.cwd(), newValues.newName);
			const projectPath = path.resolve(
				__dirname,
				`../../../src/libs/projects`,
				newValues.newType,
			);

			mkdirSync(destinationPath, { recursive: true });

			cpSync(projectPath, destinationPath, { recursive: true });
		} catch (error) {
			console.error(messages.default.messages.error, error);
		}
	}
}
