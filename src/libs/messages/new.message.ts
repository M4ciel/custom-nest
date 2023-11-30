export default {
	description: 'Creating a new Nestjs Custom Application',
	messages: {
		start: '\n\n\n\n 🎉 Creating a new Nestjs Custom Application!\n',
		wait: 'wait a second...\n\n',
		error: 'Error on creating:',
		after: {
			success: '\n🚀  Successfully created project ',
			commands: {
				message: '\n👉  Get started with the following commands:',
				cd: '\n\n$ cd ',
				install: 'install\n\n',
			},
		},
	},
	questions: {
		name: {
			description: 'Input a project name:',
		},
		packagerManager: {
			description: 'Which package manager would you ❤️  to use? yarn',
			choices: ['npm', 'yarn', 'pnpm'],
		},
		type: {
			description: 'Select a project type:',
			choices: ['cli', 'default'],
		},
	},
};
