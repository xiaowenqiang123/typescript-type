type Test = { id: "1" };

type Result = AppendToObject<Test, "value", 4>; // expected to be { id: '1', value: 4 }

type AppendToObject<T extends object, Key extends string | symbol | number, V> = {
    [K in keyof T | Key]: K extends keyof T ? T[K] : V;
};

export default {};
