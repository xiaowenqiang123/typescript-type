type Test = "123";
type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"

// type StringToUnion<T extends string, A extends unknown[] = []> = T extends `${infer F}${infer R}`
//     ? StringToUnion<R, [F, ...A]>
//     : A[number];

type StringToUnion<T extends string> = T extends `${infer F}${infer R}`
    ? F | StringToUnion<R>
    : never;
export default {};
