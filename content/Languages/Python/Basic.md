---
title: "Basic"
metaTitle: "Basic | Python"
metaDescription: "Python Basic tips."
---

## 式と文の違い

**式は値を返すが，文は値を返さない**．

### 式は値を返す

例えば，`print` 関数や，リストの `sort` メソッドは，パッと見ると値を返していないように見えるが，正確には `None` を返している．

```python
>>> lis = [3, 1, 5]
>>> lis.sort()

# lis.sort() の戻り値を出力してみる
>>> print(lis.sort())
# None
# リストの sort メソッドが None を返していることが分かる

# print(lis.sort()) の戻り値を出力してみる
>>> print('print(lis.sort() の戻り値):', print('lis.sort() の戻り値:', lis.sort()))
# lis.sort() の戻り値: None
# print(lis.sort() の戻り値): None
```

### 文は値を返さない

例えば，`del` 文は文なので，値を返さない．そのため，変数に代入できず，SyntaxError になる．

```python
>>> a = 'foo'
>>> del a  # 文が実行される．エラーは起きない．
>>> a = 'foo'
>>> b = del a  # 文を変数に代入しようとしている．エラーが起きる．
File "<ipython-input-8-54b1e435e69c>", line 1
  b = del a
      ^
SyntaxError: invalid syntax
```

## リストを任意の値，要素数で初期化

[神記事：（nkmk）Python のリスト（配列）を任意の値・要素数で初期化](https://note.nkmk.me/python-list-initialize/)

- 空リストを作成

**空のリストは falsy であることに注意**．

```python
# 空のリストを作成
lis_empty = []

# 空のリストが falsy であることの確認
print(bool(lis_empty))
# False
```

- 任意の値・要素数で初期化

```python
length = 10
lis = [0] * length
# [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

print(len(lis))
# 10
```

要素数によらず，元のリストの要素が繰り返されたリストが生成される．

```python
lis = [0, 1, 2] * 3
# [0, 1, 2, 0, 1, 2, 0, 1, 2]
```

- 2 次元配列（リストのリスト）を初期化する際の注意
- タプル、配列（array 型）の場合

## デコレータを理解する

- [正直これ見流だけで十分：Python：デコレータについて](https://blog.amedama.jp/entry/2018/09/02/013351)
- [良記事：Decorators I: Introduction to Python Decorators](https://www.artima.com/weblogs/viewpost.jsp?thread=240808)
- [Python のでコレータを理解するための 12 Step](https://qiita.com/_rdtr/items/d3bc1a8d4b7eb375c368)
