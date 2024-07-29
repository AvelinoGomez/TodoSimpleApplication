export interface CreateTodoDTO {
    userId: number;
    title: string;
    body: string | null;
}