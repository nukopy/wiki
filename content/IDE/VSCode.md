---

title: "VSCode"
metaTitle: "VSCode | IDE"
metaDescription: "Visual Studio Code tips"

---

Visual Studio Code の tips．

## スニペット

`easy-snippet` が楽．コードを選択した状態で `cmd + k, cmd + shift + s` を押すと新しくスニペットが作られる．

- [easy-snippet](https://marketplace.visualstudio.com/items?itemName=inu1255.easy-snippet)

### スニペット入力時のカーソル設定

- [参考：VsCodeのスニペットのススメ](https://qiita.com/xx2xyyy/items/fd333368db548167f15a#%E8%87%AA%E4%BD%9C%E3%81%AE%E6%96%B9%E6%B3%95)

スニペット用の文法によって，「tab ストップ」，「プレースホルダ」という機能が使える．スニペットを入力した時に，スニペット内のカーソルの初期位置の指定，タブによるカーソルの移動，プレースホルダなどが利用できる．

- tab ストップ，プレースホルダ：`${[順序]:デフォルト値}`（コロン `:` の後ろはスペースを入れない）

スニペットの例．tab を押すと 1 から 2 へ移動できる．`N` はデフォルト値．

```cpp
for (ll i = 0; i <  ${1:N}; i++) {
    for (ll j = 0; j < ${1:N}; i++) {
    ${2:/* code */}
}
```
