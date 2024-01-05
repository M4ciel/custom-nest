import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ExampleService } from './example.service';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';

@Controller()
export class ExampleController {
	constructor(private readonly exampleService: ExampleService) {}

	@MessagePattern('createExample')
	create(@Payload() createExampleDto: CreateExampleDto) {
		return this.exampleService.create(createExampleDto);
	}

	@MessagePattern('findAllExample')
	findAll() {
		return this.exampleService.findAll();
	}

	@MessagePattern('findOneExample')
	findOne(@Payload() id: number) {
		return this.exampleService.findOne(id);
	}

	@MessagePattern('updateExample')
	update(@Payload() updateExampleDto: UpdateExampleDto) {
		return this.exampleService.update(
			updateExampleDto.id,
			updateExampleDto,
		);
	}

	@MessagePattern('removeExample')
	remove(@Payload() id: number) {
		return this.exampleService.remove(id);
	}
}
