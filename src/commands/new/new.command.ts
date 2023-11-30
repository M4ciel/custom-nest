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
			newPackage: string;
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

			console.log(
				messages.default.messages.after.success,
				newValues.newName,
			);
			console.log(messages.default.messages.after.commands.message);

			console.log(
				messages.default.messages.after.commands.cd,
				newValues.newName,
			);
			console.log(
				'\n$',
				newValues.newPackage,
				messages.default.messages.after.commands.install,
			);
		} catch (error) {
			console.error(messages.default.messages.error, error);
		}
	}
}
