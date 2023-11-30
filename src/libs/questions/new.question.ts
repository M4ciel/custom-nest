import { Question, QuestionSet } from 'nest-commander';
import * as messages from 'src/libs/messages/new.message';

@QuestionSet({ name: 'new-questions' })
export class NewQuestions {
	@Question({
		type: 'input',
		message: messages.default.questions.name,
		name: 'newName',
	})
	parseNewName(val: string) {
		return val;
	}

	@Question({
		type: 'list',
		message: messages.default.questions.type,
		name: 'newType',
		choices: messages.default.questions.choices,
	})
	parseNewType(val: string) {
		return val;
	}
}
