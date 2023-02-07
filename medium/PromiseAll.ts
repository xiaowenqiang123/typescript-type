const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 100, "foo");
});

// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const);

declare function PromiseAll<Values extends any[]>(
    value: readonly [...Values]
): Promise<{
    [K in keyof Values]: Values[K] extends Promise<infer R> ? R : Values[K];
}>;
