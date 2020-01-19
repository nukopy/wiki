---

title: "Library"
metaTitle: "Library | C++"
metaDescription: "C++ Library"

---

C++ のライブラリに関する tips．

## std::string

* [cpprefjp: std::string コンストラクタ](https://cpprefjp.github.io/reference/string/basic_string/op_constructor.html)
18
### 文字列の比較演算，辞書順

比較演算子で文字列を比較する場合，「**辞書で速く出てくる単語ほど小さい**」と処理される．文字列だけでなく，数字同士の比較も同様である．

* 単純な単語の比較
  * `atcoder < atlas`

* 短い方が小さい
  * `abc < abcd`

* 数字の比較
  * `'0' < '2'`
  * `"22" < "2222"`

### 特定の 1 文字の文字列の生成

* [cpprefjp: str::string コンストラクタ](https://cpprefjp.github.io/reference/string/basic_string/op_constructor.html)

`std::string` のコンストラクタに長さと何らかの文字を与えると，その文字を長さ分だけ連結した文字列を生成してくれる．

```cpp
char ch = 'a';
std::string str(5, ch);
std::cout << str << "\n"; // aaaaa
```

* [参考：ABC 152 - B](https://atcoder.jp/contests/abc152/submissions/9599263)

1 桁の数字を受け取ってその数字を 10 個並べた文字列を生成する．

```cpp
int a;
std::cin >> a;
std::string str(10, a + '0');
std::cout << str << "\n";
```

### 文字列をひっくり返す: reverse()

イテレータを反転させる．

```cpp
string str = "abcde";
cout << str << "\n";
reverse(str.begin(), str.end())
cout << str << "\n";
```

## std::vector

### vec.push_back() と vec.emplace_back()

**`emplace_back` は，実引数がコンテナの要素型と異なるときに、`push_back` よりも動作が早くなり**、それ以外の場合ではほとんど変わらない（実引数が単に変数のときなど）．単に整数型，実数型などの数値型を入れるときは`push_back`でよい．`std::pair`などのオブジェクトを入れるときは`emplace_back` を使うとよい．

push_back だと vec に入れたいオブジェクトが「2回コンストラクトされる」ため無駄がある．

* [push_back と emplace_back](https://qiita.com/brackss1/items/e92da6458172397f7225)

#### std::vector.push_back() の内部の動作

1. 一時的にオブジェクトがコンストラクトされる．
2. それが std::vector の新規オブジェクトとしてコンストラクトされる．
3. 1 で作られたオブジェクトが破棄される．

このようにコンストラクタが 2 回呼び出されている．これは無駄．
C++11以降では，コンストラクタの引数から直接コンテナの新規オブジェクトが生成できる関数が用意された．

それが`emplace_back`．

### 2次元配列

#### 2次元配列の宣言

```cpp
vector<int> vec(N); // 1×N 初期化なし
vector<int> vec(N, 0); // 1×N 0で初期化

// 2次元配列
vector< vector<int> > vec = \{\{1, 2, 3\}, \{4, 5, 6\}\};

// 20×10の配列: 0で初期化
vector<vector<int>> vec(20, vector<int>(10, 0));

// (N, M)の多次元配列
vector<vector<int>> vec(N, vector<int>(M, 0));  // 0で初期化
```

#### 2次元配列の出力：関数

```cpp
template <class T> void print2DVec(vector< vector<T> >& vec) {
    REP(i, vec.size()) {
        REP(j, vec.front().size()) {  // vec.front() == vec.at(0)
            if (j) cout << " ";
            cout << vec.at(i).at(j);  // vec[i][j]
        }
        cout << endl;
    }
}
```

### イテレータの宣言

イテレータを定義するとき，`std::vector<int>::iterator`とタイプするのは面倒．そんなときは型推論の`auto`を使用すると記述量が少なくなる（競プロのみ．システムのコードを書くときは非推奨．）．

* 例）配列の最大値のイテレータを返す関数 `max_element`

```cpp
- std::vector<int>::iterator iter = max_element(vec.begin(), vec.end());
+ auto iter = max_element(vec.begin(), vec.end());
```

## std::map / std::unordered_map

* [std::mapまとめ（Qiita 2018/04）](https://qiita.com/_EnumHack/items/f462042ec99a31881a81)

## std::set / std::unordered_set

hoge

## std::ios / std::iomanip（パディングなど）

### パディング

左埋めのパディング

```cpp
// 必用なヘッダーインクルード
#include <ios>     // std::left, std::right
#include <iomanip> // std::setw(int), std::setfill(char)

// 直後の要素をパディング
#define zero_pad(num) setfill('0') << std::right << setw(num)
#define space_pad(num) setfill(' ') << std::right << setw(num)
// std::left とすれば，右に '0' を埋めることができる

int main() {
    // input
    int a = 33, b = 5555, c = 67891;

    // calculation
    cout << zero_pad(0) << a << "\n";
    cout << zero_pad(2) << a << "\n";
    cout << zero_pad(4) << a << "\n";
    cout << zero_pad(4) << b <<  "\n";
    cout << zero_pad(6) << b <<  "\n";
    cout << zero_pad(10) << b <<  "\n";
    cout << zero_pad(3) << b <<  "\n";
    cout << zero_pad(5) << b <<  "\n";
    cout << zero_pad(10) << b <<  "\n";

    return 0;
}
```

出力

```bash
33
33
0033
5555
005555
0000005555
5555
05555
0000005555
```

* [【C++】左詰め／右詰め／ゼロ埋めの方法と注意点【cout／iostream 文字揃え】](http://marycore.jp/prog/cpp/padding-left-right-zero/)

### 標準出力での精度

出力に精度が必要なときは，`std::iomanip` の `std::setprecision(桁数)` を使う．`std::cout` と合わせて利用する．

下記のコードを `main` 関数内で書いておけば，double 型などの数値が 20 桁分出力される．

```cpp
int main() {
  std::cout << fixed << setprecision(20);

  const double PI = acos(-1);
  std::cout << PI << "\n";

  return 0;
}
```
