class Singleton {
    private _count: number;
    public static get count(): number {
        return Singleton.instance._count;
    };

    // 初期化
    private constructor() {
        this._count = 0;
    };

    // インスタンス
    private static _instance: Singleton;
    private static get instance(): Singleton {
        if (!this._instance) {
            this._instance = new Singleton();
        }
        return this._instance;
    }

    public static increment = () => Singleton.instance._count++;
}

class NonSingleton {
    public count: number;

    // 初期化
    constructor() {
        this.count = 0;
    };

    public increment = () => this.count++;
}

const main = () => {
    // シングルトンではない
    console.log('================================');
    console.log('シングルトンではないパターン')
    console.log('================================');
    const hoge1 = new NonSingleton();
    console.log(hoge1.count);
    hoge1.increment();
    console.log(hoge1.count);
    console.log('================================');
    const fugo1 = new NonSingleton();
    console.log(fugo1.count); // <- expect: 0
    console.log('================================\n');

    // シングルトン
    console.log('================================');
    console.log('シングルトンパターン')
    console.log('================================');
    const hoge2 = Singleton;
    console.log(hoge2.count);
    hoge2.increment();
    console.log(hoge2.count);
    console.log('================================');
    const fugo2 = Singleton;
    console.log(fugo2.count); // <- expect: 1
    console.log('================================\n');
};

main();
