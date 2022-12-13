/* 
    type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
*/

type Unshift<T extends any[], U> = [U, ...T];

type Test = Unshift<[1, 2], 0>;

export default {};
