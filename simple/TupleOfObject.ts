/* 
    const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
*/

type TupleToObject<T extends readonly any[]> = {
    [K in T[number]]: K;
};

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type result = TupleToObject<typeof tuple>; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
const x = { text: "hello" } as const;
