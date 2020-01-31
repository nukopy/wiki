---
title: "Gibo"
metaTitle: "Gibo | Git"
metaDescription: "Gibo tips."
---

`.gitignore` 自動生成コマンドラインツール Gibo の使い方．

## インストール

```sh
$ brew install gibo
```

## 使い方

### リスト

```sh
$ gibo list
```

### .gitignore を生成

基本的には，ターミナルから `gibo dump [item of list] >> .gitignore` を実行すれば良い（`>>` は既存のファイルの末尾に追加）．

下記は Node.js と Visual Studio Code を利用するプロジェクトの例．

```sh
$ gibo dump Node VisualStudioCode >> .gitignore
```
