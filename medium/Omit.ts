interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
    completed: false,
};

type MyOmit<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>>;
