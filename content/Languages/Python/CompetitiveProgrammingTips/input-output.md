---
title: "標準入出力"
metaTitle: "標準入出力 | Python"
metaDescription: "Python での標準入出力"
---

標準入出力に関する tips．標準出力は `print` 関数で純分のため，主に標準入力について扱う．

## 参考

- [Python3 で競技プログラミングする時に知っておきたい tips（入力編）(Qiita, 2019/04)](https://qiita.com/kyuna/items/8ee8916c2f4e36321a1c)

## 基本

- 入力用いる関数
  - `input()`
    文字列として 1 行分の入力を受け取る．整数として利用するためにはキャストする必要がある．
  - `input().split()`
    `input` で 1 行の文字列を入力として受け取り，`split` で文字列を空白で区切ったリストを作る．

## 1 行で大量の入力を行う

`sys.stdin.readline()` を使うと入力が早くなることがある．このとき，Python の組み込み関数 `input` を以下のように上書きすると良い（競プロ以外のコードではこのような書き方は良くないので注意）．

```python
import sys
input = sys.stdin.readline
```

## 1 行，文字列 1 つ

- 入力

```python
S
```

- コード

```python
s = input()
```

## 1 行，整数 1 つ

- 入力

```txt
N
```

- コード

```python
n = int(input())
```

## 1 行，整数 2 つ

- 入力

```txt
N M
```

- コード：整数 2 つ

```python
# 空白区切り
n, m = map(int, input().split())

# カンマ区切り（`split` の dilimiter を変更する）
n, m = map(int, input().split(','))
```

- コード：整数 3 つ

```python
n, m, k = map(int, input().split())
```

## N 行，整数 N 個

- 入力

```txt
N M
a_1
...
a_n
```

- コード

```txt
n, m = map(int, input().split())
```

## 入力行に制限が無い場合

例）CSV の入力

CSV ファイルなど，ヘッダーとそれ以降の行を入力するという状況においては，入力行に制限が無い場合がある．

```txt
col1,col2,col3,...
num11,num12,num13,...
num21,num22,num23,...
...
```

- コード

```python
header = input().split(',')
rows = []  # 行を格納するための空リスト

while True:
    try:
        # 各行の入力
        inp = list(map(int, input().split(',')))

        # 行を格納する
        rows.append(inp)
    except:
        break
```
