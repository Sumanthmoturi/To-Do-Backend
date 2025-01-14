import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
export declare class TodoService {
    private todoRepository;
    constructor(todoRepository: Repository<Todo>);
    findAll(): Promise<Todo[]>;
    updateStatus(id: number, status: string): Promise<Todo>;
}
