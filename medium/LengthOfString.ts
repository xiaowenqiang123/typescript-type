type LengthOfString<
    T extends string,
    Arr extends unknown[] = []
> = T extends `${string}${infer Rest}` ? LengthOfString<Rest, [unknown, ...Arr]> : Arr["length"];

type C = LengthOfString<"123123">;
