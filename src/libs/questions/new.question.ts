import { Question, QuestionSet } from 'nest-commander';
import * as messages from 'src/libs/messages/new.message';

@QuestionSet({ name: 'new-questions' })
export class NewQuestions {
	@Question({
		type: 'input',
		message: messages.default.questions.name.description,
		name: 'newName',
	})
	parseNewName(val: string) {
		return val;
	}

	@Question({
		type: 'list',
		message: messages.default.questions.packagerManager.description,
		name: 'newPackage',
		choices: messages.default.questions.packagerManager.choices,
	})
	parsePackage(val: string) {
		return val;
	}

	@Question({
		type: 'list',
		message: messages.default.questions.type.description,
		name: 'newType',
		choices: messages.default.questions.type.choices,
	})
	parseNewType(val: string) {
		return val;
	}
}
