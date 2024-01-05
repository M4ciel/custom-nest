import { Inject } from '@nestjs/common';
import { exec } from 'child_process';
import { Command, CommandRunner, InquirerService } from 'nest-commander';
import * as messages from 'src/libs/messages/new.message';
import { cpSync, mkdirSync } from 'fs';
import * as path from 'path';
import { promisify } from 'util';

const execAsync = promisify(exec);

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
			newMicroserviceType?: string;
		}>('new-questions', null);

		try {
			const destinationPath = path.join(process.cwd(), newValues.newName);
			const projectPath = path.resolve(
				__dirname,
				`../../../src/libs/projects`,
				newValues.newMicroserviceType
					? newValues.newType + '/' + newValues.newMicroserviceType
					: newValues.newType,
			);

			mkdirSync(destinationPath, { recursive: true });

			cpSync(projectPath, destinationPath, { recursive: true });

			console.log(messages.default.messages.installing);
			await execAsync(
				`cd ${destinationPath} && ${newValues.newPackage} install`,
			);

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
				newValues.newPackage === 'yarn'
					? messages.default.messages.after.commands.start
					: 'run ' + messages.default.messages.after.commands.start,
			);
		} catch (error) {
			console.error(messages.default.messages.error, error);
		}
	}
}
