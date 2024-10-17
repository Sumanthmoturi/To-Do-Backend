import { Todo } from '../todos/todo.entity';
export declare class User {
    id: number;
    name: string;
    mobile: string;
    password: string;
    email: string;
    todos: Todo[];
}
