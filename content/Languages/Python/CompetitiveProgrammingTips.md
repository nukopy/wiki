---
title: "競プロ Tips"
metaTitle: "Competitive Programming Tips | Python"
metaDescription: "Python Competitive Programming Tips"
---

Python での競プロの Tips．

忘れやすいけど調べたらすぐ分かるやつをまとめる．

## 再帰の深さの変更

Python では，デフォルトで再帰の深さ（スタックの深さ？）の限界が `10000` になっている．そのため，再帰を扱う場合，以下のようにして再帰の深さの限界を変更する必要がある．

```python
import sys
sys.setrecursionlimit(10**9)
```
