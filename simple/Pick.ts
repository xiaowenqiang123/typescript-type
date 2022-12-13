/* 

    interface Todo {
        title: string
        description: string
        completed: boolean
    }

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
*/

type MyPick<T, U extends keyof T> = {
    [K in U]: T[K];
};

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
};

export default {};
