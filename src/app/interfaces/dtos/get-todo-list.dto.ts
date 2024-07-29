export interface GetTodoListDTO {
    userId: number;
    id: number;
    title: string;
    body: string | null;
}