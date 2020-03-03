---
title: "Basic"
metaTitle: "Basic | JavaScript"
metaDescription: "JavaScript Basic tips."
---

JavaScript の基本をまとめる．

<!-- FIXME: ページ内リンクを作りたい
- <a href="#moji">文字列と数値</a>
- <a href="#var">変数・定数</a>
- <a href="#if">条件分岐：`if`, `else`, `else if`</a>
- <a href=""></a>
- <a href=""></a>
-->

- 文字列と数値
- 変数・定数：数値，文字
- 条件分岐（if 文，switch 文），条件式
- 繰り返し処理（while 文，for 文）
- 変数・定数：配列
- 変数・定数：オブジェクト（連想配列）
- `undefined`：未定義を表す
- 関数
- IV
- V
- 配列の操作

## 文字列と数値

### 単純な出力

```js
console.log(3);
console.log("hoge");
```

### 数値の足し算，文字列の連結

```js
console.log(3 + 3); // 6
console.log("3" + "3"); // '33'
console.log("3 + 3"); // '3 + 3'
```

### 計算

```js
console.log(3 + 3); // 和：6
console.log(3 - 3); // 差：0
console.log(3 * 3); // 積：0
console.log(3 / 3); // 商：1
console.log(3 % 3); // 余り：0
```

## 変数

### 変数の定義：let

```js
let num = 1;
let str = "1";
```

### 変数の更新

```js
let num = 1;
console.log(num); // 1
num = 3;
console.log(num); // 3
```

### 変数の中身を利用した変数の更新

```js
// パターン 1
let num = 1;
console.log(num); // 1
num = num + 3;
console.log(num); // 4

// パターン 2：書く量が少ないため推奨
let num = 1;
console.log(num); // 1
num += 3;
console.log(num); // 4
```

### 演算による変数の更新：省略版（推奨）

```js
let num = 3;

num += 3; // num = num + 3
num -= 3; // num = num - 3
num *= 3; // num = num * 3
num /= 3; // num = num / 3
num %= 3; // num = num % 3
```

### 定数の定義：const

定数には再代入ができない（**「変更できない」ではない**）．この性質により，予期せぬ変数の更新を防ぐことができ，安全に開発を行える．
ただし，配列，オブジェクトの中身は更新できる．基本的には，定数を利用し，更新の必要がある変数を `let` で定義するようにすれば良い．

```js
const num = 3;
num = 5; // ERROR になる
```

### テンプレートリテラル

バッククオートを利用し，変数の中身を埋め込んだ文字列を定義する方法．
`｀${変数名}｀` で定義する．

```js
const num = 3;
const str = `私の甥は${num}歳です`;
console.log(str);
```

## 条件分岐（if 文，switch 文），条件式

- テンプレ：`if`, `else`, `else if`

```js
if (条件1) {
  // 処理1
} else if (条件2) {
  // 処理2
} else {
  // 処理3
}
```

- 比較演算子：大小比較

```js
console.log(3 > 5);
console.log(3 >= 5);
console.log(3 < 5);
console.log(3 <= 5);
```

- 比較演算子：等価/非等価

`==`, `!=` でも使えるが，型が違っても等価だと処理されバグの温床となるため，基本 `===`, `!==` を使う．

```js
console.log(3 === 3);
console.log(3 !== 3);
// console.log(3 == 3);
// console.log(3 != 3);
```

- 複数の条件：かつ `&&`，または `||`

```js
const num = 3;
console.log(0 <= num && num < 10); // 0以上「かつ」10未満
console.log(num < 0 || 5 < num); // 0未満「または」5より大きい
```

### Truthy / Falsy な値（参考：[Understanding JavaScript Truthy and Falsy](https://stackoverflow.com/questions/35642809/understanding-javascript-truthy-and-falsy)）

Falsy を考え，それ以外は Truthy であると考えれば良い．

- Falsy
  - `false`
  - 数値の `0`
  - `null`
  - `undefined`
  - `NaN`
  - 空文字：`''`，`""`，\`\`(template literal)
  - others
    - `document.all`
    - 数値の `0n`（`BigInt`）

条件分岐では，変数・定数は直接条件式としても使えることができる．これはよく使うので覚えておく．

```js
const undefinedNumber = undefined;

if (undefinedNumber) {
  console.log("変数は Truthy です");
} else {
  console.log("変数は Falsy です");
}
```

### switch 文

switch 文は，特定の値によって処理を分岐する場合，if/else 文より見通しの良いコードを書ける．

- テンプレ

```js
switch (key) {
  case value1:
    // key === value1 のとき実行される
    break;
  case value2:
    // key === value2 のとき実行される
    break;
  case value3:
    // key === value3 のとき実行される
    break;

  default:
    // key が value1 ~ value3 のどれとも等しくない場合に実行される
    break;
}
```

`break` がないと，合致した case の処理を行った後，その次の case の処理も実行してしまう．
そのため，switch 文を使うときは `break` を忘れないように注意する．

## 繰り返し処理（while 文，for 文）

- while 文のテンプレ

無限ループにならないよう注意を払う．

```js
while (条件式) {
  // 条件式が True の間，繰り返し処理が実行される．
}
```

- for 文のテンプレ

配列の要素に順次アクセスする例．for 文内では条件分岐が使えるので上手く活用すること．

```js
const animals = ["cat", "dog", "rabbit"];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
```

## 変数・定数：配列

**配列**は，複数の値を管理することができるデータ型である．

- 配列の基本的な使い方まとめ

```js
// 定義
const animals = ["cat", "dog", "rabbit"];

// 要素へのアクセス：0-origin
console.log(animals[0]);
console.log(animals[2]);
console.log(animals[3]); // undefined，エラーにはならない

// 要素の更新
console.log(animals[0]); // cat
animals[0] = "horse";
console.log(animals[0]); // horse
```

- 配列と繰り返し処理

`配列.length` で配列の長さを取得できる．これを利用すると for 文で繰り返し回数を楽に書ける．

```js
const animals = ["cat", "dog", "rabbit"];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
```

## 変数・定数：オブジェクト（連想配列）

- 基本

配列，オブジェクトはどちらも複数のデータをまとめて管理するのに用いられる．配列が複数の値を並べて管理するのに対し，オブジェクトはそれぞれの値に**プロパティ**（key とも呼ばれる）と呼ばれる名前をつけて管理する．

```js
// 配列
[ 値1, 値2, 値3 ]

// オブジェクト
{ プロパティ1: 値1, プロパティ2: 値2, プロパティ3: 値3 }
```

- オブジェクトの使い方：基本

```js
// オブジェクトの定義
const friend = {
  name: "John",
  age: 10
};

// オブジェクトの値の取得・更新
console.log(friend.age); // 10
friend.age = 15;
console.log(friend.age); // 15
friend.age++;
console.log(friend.age); // 16
```

- オブジェクトの使い方：配列の要素としてオブジェクトを使う

```js
// 要素がオブジェクトの配列を定義
const menus = {
  {price: 900, name: 'chicken curry'},
  {price: 500, name: 'coffee'},
  {price: 800, name: 'spaghetti bolognese'},  // ミートスパゲティ
}

// 繰り返し処理でアクセス
console.log('Restaurant Menus');
console.log('----------------');

for (let i = 0; i < menus.length; i++) {
  console.log(`${menus[i].name} - ${menus[i].price} yen`);
}
```

## undefined：未定義を表す

配列，オブジェクトに対して，存在しない要素へアクセスするとエラーが出るのではなく，`undefined` が返される．`undefined` は特別な値であり，**値が未定義である**ことを意味する．

- `undefined` の例

```js
// 配列
const animals = ["cat", "dog", "rabbit"];
console.log(animals[100]); // 存在しないインデックス番号

// オブジェクト
const friend = {
  name: "John",
  age: 10
};
console.log(friend.sex); // 存在しないプロパティ
```

- `undefined` であるかの判定

基本的に `undefined` にならないように例外処理や条件分岐を実装しておくのが普通である．

```js
const characters = [...];

for (let i = 0; i < array.length; i++) {
  const character = characters[i];

  if (character.age === undefined) {
    console.log('年齢は秘密です');
  } else {
    console.log(`年齢は${character.age}歳です`);
  }
}
```

`if (character.age === undefined) ...` の部分は，比較演算子を使わずに値だけを使い，`if (character.age)` として Falsy かどうかを判定することができる．こっちを使うことが多い．

## 関数

### 関数

### アロー関数

### 引数

### 戻り値

### スコープ

## IV

## V

## 配列の操作

```js
```
