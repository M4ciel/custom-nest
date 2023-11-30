import { Question, QuestionSet } from 'nest-commander';
import * as messages from '../../libs/messages/example.message';

@QuestionSet({ name: 'example-questions' })
export class ExampleQuestions {
	@Question({
		type: 'input',
		message: messages.default.questions.example,
		name: 'example',
	})
	parseExample(val: string) {
		return val;
	}
}
