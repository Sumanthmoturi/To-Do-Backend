import { User } from '../users/user.entity';
export declare class Todo {
    id: number;
    name: string;
    description: string;
    status: string;
    user: User;
}
