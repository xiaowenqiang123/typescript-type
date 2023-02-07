type trimed = TrimLeft<"  Hello World  ">; // expected to be 'Hello World  '

type TrimLeft<T extends string> = T extends `${infer L}${infer R}`
    ? L extends " " | "\n" | "\t"
        ? TrimLeft<R>
        : T
    : T;
type TrimRight<T extends string> = T extends `${infer F}${infer R}`
    ? R extends " " | "\n" | "\t"
        ? TrimRight<F>
        : T
    : T;
type Trim<T extends string> = TrimLeft<TrimRight<T>>;
type trimmed = TrimRight<"  Hello World  ">; // expected to be 'Hello World'
type capitalized = Capitalize<"hello world">; // expected to be 'Hello world'
