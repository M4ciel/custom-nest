export default {
	description: 'Creating a new Nestjs Custom Application',
	messages: {
		start: '\n\n\n\n 🎉 Creating a new Nestjs Custom Application!\n',
		wait: '⚡  We will scaffold your app in a few seconds..\n\n',
		error: 'Error on creating:',
		installing: '\n\n▹▹▹▹▹ Installation in progress... ☕\n\n',
		after: {
			success: '\n🚀  Successfully created project ',
			commands: {
				message: '\n👉  Get started with the following commands:',
				cd: '\n\n$ cd ',
				start: 'start\n\n',
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
			choices: ['cli', 'default', 'microservices'],
		},
		microservices: {
			description: 'Select a microservice project type:',
			choices: ['producer', 'consumer'],
		},
	},
};
