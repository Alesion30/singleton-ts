class Singleton {
    public count: number;

    // 初期化
    private constructor() {
        this.count = 0;
    };

    // インスタンス
    private static _instance: Singleton;
    public static get instance(): Singleton {
        if (!Singleton._instance) {
            Singleton._instance = new Singleton();
        }
        return Singleton._instance;
    }

    public increment = () => this.count++;
}

class NonSingleton {
    public count: number;

    // 初期化
    public constructor() {
        this.count = 0;
    };

    public increment = () => this.count++;
}

const main = (): void => {
    // シングルトンではない
    console.log('================================');
    console.log('シングルトンではないパターン')
    console.log('================================');
    const hoge1 = new NonSingleton();
    console.log(hoge1.count); // <- expect: 0
    hoge1.increment();
    console.log(hoge1.count); // <- expect: 1
    console.log('================================');
    const fugo1 = new NonSingleton();
    console.log(fugo1.count); // <- expect: 0
    console.log('================================\n');

    // シングルトン
    console.log('================================');
    console.log('シングルトンパターン')
    console.log('================================');
    const hoge2 = Singleton.instance;
    console.log(hoge2.count); // <- expect: 0
    hoge2.increment();
    console.log(hoge2.count); // <- expect: 1
    console.log('================================');
    const fugo2 = Singleton.instance;
    console.log(fugo2.count); // <- expect: 1
    console.log('================================\n');
};

void main();
