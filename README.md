# singleton-ts

シングルトンとは、オブジェクト指向プログラミングにおけるクラスのデザインパターンの一つで、実行時にそのクラスのインスタンスが必ず単一になるよう設計すること。
[参考サイト](https://e-words.jp/w/シングルトン.html)


## 解説

### シングルトンクラス

```ts
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
```

コンストラクトに関してはプライベートメソッドにし、外部からインスタンスを生成できないようにしている。
インスタンスは内部で生成するようにし、外部からは`Singleton.instance`でインスタンス情報を取得するようにしている。

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
```

- シングルトンではないパターンでは、インスタンスが複数作成されている。（hoge1.count !== fugo1.count）
- シングルトンのパターンでは、インスタンスは一つしか作成されない。（hoge2.count === fugo2.count）

<img width="1732" alt="スクリーンショット 2021-07-29 5 32 05" src="https://user-images.githubusercontent.com/50891407/127391734-f14c515b-ef20-49be-ac9f-8205a9339e9e.png">


## 参考サイト
- [シングルトン（singleton）とは - IT用語辞典 e-Words](https://e-words.jp/w/シングルトン.html)
- [デザインパターン「Singleton」](https://qiita.com/shoheiyokoyama/items/c16fd547a77773c0ccc1)
- [Dartでファクトリパターン/シングルトンパターンを実装する](https://sbfl.net/blog/2015/01/04/implementing-factory-and-singleton-pattern-in-dart/)

