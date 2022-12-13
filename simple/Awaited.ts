/* 
    type ExampleType = Promise<string>

    type Result = MyAwaited<ExampleType> // string
*/

type MyAwaited<T extends PromiseLike<any>> = T extends Promise<infer R>
    ? R extends PromiseLike<any>
        ? MyAwaited<R>
        : R
    : never;
type ExampleType = Promise<string>;

type Result = MyAwaited<ExampleType>; // string
export default {};
