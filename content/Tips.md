---
title: "Tips"
metaTitle: "Wiki - Tips"
metaDescription: "Some tips"
---

各種 tips．メモ書きに使う．

## Wiki の編集

### 編集方法

1. VSCode で `wiki` のプロジェクトディレクトリを開く．
2. （初回のみ）ターミナルで `yarn install`（Command Line Tools，というより C/C++ コンパイラが必要）を実行し，GatbyJS などの npm パッケージをインストール．
3. `yarn start` を実行し，`http://localhost:8000/` を開いて編集スタート（ホットリロードが有効）．

Wiki のコンテンツは `wiki/content/` 配下にあり，Markdown，MDX（React コンポーネントを Markdown に組み込む）で編集可能．

### サイドバーに項目を追加したい時

1．`wiki/content` に新しく作りたい項目名のディレクトリ，Markdown ファイルを作り，SEO の設定（`title`, `metaTitle` など）を書き加える．

ディレクトリ，ファイル作成後のディレクトリ構成

```sh
wiki/content
  - NewContent（ディレクトリ）
  - NewContent.md
```

2．`config.js` の編集．

`sidebar.forcedNavOrder`（サイドバーの表示順序の設定）に新しい項目 `/NewContent` を任意の位置に加える．

```js
const config = {
  ...
  sidebar: {
    forcedNavOrder: [
      "/Home",
      "/Language",
      "/Database",
      "/DevelopmentEnvironment",
      "/Web",
      "/Git",
      "/TechnicalTerms",
      "/Service",
      "/Tips",
+     "/NewContent",
    ],
    links: [{ text: "nukopy", link: "https://github.com/nukopy/" }],
    frontline: false,
    ignoreIndex: false
  },
  ...
}
```

3．再度ビルドを実行して新しい項目が `config.js` に設定した表示順序通りに表示されてれば OK．

新しい項目を加えたときにエラーが出るのは大抵この設定を忘れてる場合が多い．

### エラー処理

ローカル環境で開発時，mdx で React コンポーネントを新しく組み込んだ際のビルドにて Webpack などのエラーが出るときは，`wiki/.cache` を消して再度ビルドするとうまくいくことがある．
