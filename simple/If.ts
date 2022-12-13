/* 
    type A = If<true, 'a', 'b'>  // expected to be 'a'
    type B = If<false, 'a', 'b'> // expected to be 'b'
*/

type If<C, T, U> = C extends true ? T : U;
