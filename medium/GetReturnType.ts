type MyReturnType<Fn extends (...args: any) => any> = Fn extends (...args: any) => infer R
    ? R
    : never;
const fn = (v: boolean) => {
    if (v) return 1;
    else return 2;
};

type a = MyReturnType<typeof fn>; // should be "1 | 2"
