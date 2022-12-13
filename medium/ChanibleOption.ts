declare const config: Chainable;

const result = config
    .option("foo", 123)
    .option("name", "type-challenges")
    .option("bar", { value: "Hello World" })
    .get();

// expect the type of result to be:
interface Result {
    foo: number;
    name: string;
    bar: {
        value: string;
    };
}

type Chainable<Options = {}> = {
    option<Key extends string, V>(a: Key, b: V): Chainable<Options & { [K in Key]: V }>;
    get(): { [K in keyof Options]: Options[K] };
};
