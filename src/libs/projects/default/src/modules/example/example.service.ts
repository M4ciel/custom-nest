import { Injectable } from '@nestjs/common';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';

@Injectable()
export class ExampleService {
	create(_createExampleDto: CreateExampleDto) {
		return 'This action adds a new example';
	}

	findAll() {
		return `This action returns all example`;
	}

	findOne(id: number) {
		return `This action returns a #${id} example`;
	}

	update(id: number, _updateExampleDto: UpdateExampleDto) {
		return `This action updates a #${id} example`;
	}

	remove(id: number) {
		return `This action removes a #${id} example`;
	}
}
