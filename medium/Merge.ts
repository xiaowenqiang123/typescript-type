type foo = {
  name: string;
  age: string;
};
type coo = {
  age: number;
  sex: string;
  a: boolean;
};

type Result = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}

type Merge<T extends object, U extends object> = {
  [P in keyof T | keyof U]: P extends keyof T
    ? T[P]
    : P extends keyof U
    ? U[P]
    : never;
};
