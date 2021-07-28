# singleton-ts

シングルトンとは、オブジェクト指向プログラミングにおけるクラスのデザインパターンの一つで、実行時にそのクラスのインスタンスが必ず単一になるよう設計すること。
[参考サイト](https://e-words.jp/w/シングルトン.html)


## 解説

### シングルトンクラス

```ts
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
```

コンストラクトに関してはプライベートメソッドにし、外部からインスタンスを生成できないようにしている。
また、外部からの呼び出しについては、静的変数・静的メソッドとして定義している。

<br />

### シングルトンではないクラス

```ts
class NonSingleton {
    public count: number;

    // 初期化
    constructor() {
        this.count = 0;
    };

    public increment = () => this.count++;
}
```

<br />

### 呼び出し

```ts
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
```

- シングルトンではないパターンでは、インスタンスが複数作成されている。（hoge1.count !== fugo1.count）
- シングルトンのパターンでは、インスタンスは一つしか作成されない。（hoge2.count === fugo2.count）

<img width="1732" alt="スクリーンショット 2021-07-29 5 32 05" src="https://user-images.githubusercontent.com/50891407/127391734-f14c515b-ef20-49be-ac9f-8205a9339e9e.png">


## 参考サイト
- [シングルトン（singleton）とは - IT用語辞典 e-Words](https://e-words.jp/w/シングルトン.html)
- [デザインパターン「Singleton」](https://qiita.com/shoheiyokoyama/items/c16fd547a77773c0ccc1)
- [Dartでファクトリパターン/シングルトンパターンを実装する](https://sbfl.net/blog/2015/01/04/implementing-factory-and-singleton-pattern-in-dart/)

