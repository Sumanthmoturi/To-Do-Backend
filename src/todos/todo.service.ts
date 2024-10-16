import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../entities/todo.entity';  // Ensure that the Todo entity is imported correctly

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  // Method to find all todos
  async findAll() {
    return this.todoRepository.find();
  }

  // Method to update the status of a todo
  async updateStatus(id: number, status: string) {
    const todo = await this.todoRepository.findOneBy({ id });
    if (!todo) {
      throw new NotFoundException('Todo not found');  // Use proper NestJS exception handling
    }
    todo.status = status;
    return this.todoRepository.save(todo);
  }
}
