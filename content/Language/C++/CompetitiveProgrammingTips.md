---

title: "競プロ Tips"
metaTitle: "Competitive Programming Tips | C++"
metaDescription: "C++ Competitive Programming Tips"

---

競プロの Tips．

忘れやすいけど調べたらすぐ分かるやつをまとめる．

## char 型 <-> int 型 の変換

- `int` to `char`（[参考](https://marycore.jp/prog/c-lang/convert-number-to-char/#%E6%95%B0%E5%80%A4%E3%81%8B%E3%82%89%E6%95%B0%E5%AD%97%E3%81%AB%E5%A4%89%E6%8F%9B%E3%81%99%E3%82%8B)）

`char c = int型の変数 + '0';` のように書く．

```cpp
int num = 8;
char num_char = num + '0';
cout << num_char << "\n";  // '8'
```

- `char` to `int`

`int c = char型の数字 - '0';` のように書く．

```cpp
char num_char = '8';
int num = num_char - '0';
cout << num << "\n";  // 8
```

- `ctoi` 関数

範囲チェック付きの `ctoi`（char to int）関数．範囲外の数字の場合 `-1` を返す．

```cpp
int ctoi(char c) {
  if ('0' <= c && c <= '9') {
    return c - '0';
  }
  return -1;
}
```

上記に示した char 型，int 型に対する `'0'` の加減は，文字方の内部表現が整数値であることを利用したテクニックである．

## 余りの繰り上げ

- [参考：余りは繰り上げとする商の説明](https://qiita.com/T_Tag/items/6f980fcec4ffafb8588d)

例えば，「N 人を M 人ずつのグループに分けることを考えたときに，その余りも一つのグループとして数えた場合に合計何グループになるか？」などが典型例である．以下の数式で表せる．

- 数式

$$
\frac{N + M - 1}{M}
$$

- 実装

17 人を 3 人ずつのグループに分けて余りもグループの数に入れたときのグループの総数．

```cpp
ll N = 17, M = 3;
ll groups = (N + M - 1) / M;
cout << groups << "\n";  // 4
```
