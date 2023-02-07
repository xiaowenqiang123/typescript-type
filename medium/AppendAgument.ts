type Fn = (a: number, b: string) => number;

type Result = AppendArgument<Fn, boolean>;
// expected be (a: number, b: string, x: boolean) => number

type AppendArgument<Fn extends (...args) => any, X> = Fn extends (...args: infer P) => infer R
    ? (...args: [...P, X]) => R
    : never;
