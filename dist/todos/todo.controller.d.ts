import { TodoService } from './todo.service';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    getAllTodos(): Promise<import("./todo.entity").Todo[]>;
    updateStatus(id: number, status: string): Promise<import("./todo.entity").Todo>;
}
