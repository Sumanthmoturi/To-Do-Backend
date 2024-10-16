import { Controller, Get, Patch, Param, Body, ParseIntPipe } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAllTodos() {
    return this.todoService.findAll();
  }

  @Patch(':id')
  updateStatus(
    @Param('id', ParseIntPipe) id: number, 
    @Body('status') status: string,
  ) {
    return this.todoService.updateStatus(id, status);
  }
}
