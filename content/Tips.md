---
title: "Tips"
metaTitle: "Tips | Wiki"
metaDescription: "Some tips"
---

各種 tips，忘れやすそうな操作のメモ書き．

## Wiki の編集

### 編集方法

1. VSCode で `wiki` のプロジェクトディレクトリを開く．
2. （初回のみ）ターミナルで `yarn install`（Command Line Tools，というより C/C++ コンパイラが必要）を実行し，GatbyJS などの npm パッケージをインストール．
3. `yarn start` を実行し，`http://localhost:8000/` を開く．
4. `wiki/content/` 配下の Markdown を編集する編集スタート（ホットリロードが有効）．

（必要であれば `src/components/myMdxComponents/WikiContentsTree.jsx` のフラグ `isLocal` を `true` にしてから編集を始める）

Wiki のコンテンツは `wiki/content/` 配下にあるが，Markdown と MDX（React コンポーネントを Markdown に組み込む）による編集が可能である．

### サイドバーに項目を追加したい時

1．`wiki/content` に新しく作りたい項目名のディレクトリ，Markdown ファイルを作り，SEO の設定（`title`, `metaTitle` など）を書き加える．

ディレクトリ，ファイル作成後のディレクトリ構成

```sh
wiki/content
  - NewContent（ディレクトリ）
  - NewContent.md
```

2．`config.js` の編集

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

2．`src/components/sidebar/tree.js` の編集

コンポーネント `Tree` 内の Hooks `setCollapsed` の初期値に，新しい項目の設定を加える．

```js
const [collapsed, setCollapsed] = useState({
  // Edit here WHEN the order of right sidebar is changed or new chapter is added in `config.js`.
  '/Language': true,
  '/Database': true,
  '/DevelopmentEnvironment': true,
  '/Web': true,
  '/Git': true,
  '/TechnicalTerms': true,
  '/Service': true,
+ '/NewContent': true,
});
```

3．再度ビルドを実行して新しい項目が `config.js` に設定した表示順序通りに表示されてれば OK．

新しい項目を加えたときにエラーが出るのは大抵この設定を忘れてる場合が多い．

### エラー処理

ローカル環境で開発時，mdx で React コンポーネントを新しく組み込んだ際のビルドにて Webpack などのエラーが出るときは，`wiki/.cache` を消して再度ビルドするとうまくいくことがある．

### Markdown のデザインの編集

基本的には，Chrome の Inspect（Dev Tool）でコンポーネントの構成を見れば，各要素のデザインがどのコード由来なのか（CSS ファイル, CSS in JS，など）見当がつけられる．

--

探すのが面倒だったデザインの由来を以下に列挙しておく．

- `src/mdxComponents` 配下のファイルが Markdown の設定を担っている
  - `src/mdxComponents/heading.js`: 見出し要素 `h1`, `h2`, ... の設定

### MDX の設定

コンポーネント `MDXProvider` の props に，Markdown を変換する際の設定のためのオブジェクトを渡すことで，レンダリングされる Markdown の装飾を変えることができる．

現状では，以下のようなオブジェクトが

- `src/components/mdxComponents/index.js`

Markdown がどのようにレンダリングされるかを変えたい場合は，このファイル内で読み込まれている各種設定ファイル（`./anchor.js`, `./code.js` など）を編集すれば良い．

```js
import React from "react";

import AnchorTag from "./anchor";
import Code from "./code";
import CodeBlock from "./codeBlock";
import Heading from "./heading";
import List from "./list";
import Text from "./text";
import Pre from "./pre";

export default {
  h1: Heading.h1,
  h2: Heading.h2,
  h3: Heading.h3,
  h4: Heading.h4,
  h5: Heading.h5,
  h6: Heading.h6,
  p: Text,
  // ul: List,
  // ol: List,
  pre: Pre,
  code: CodeBlock,
  inlineCode: props => <Code {...props} />,
  a: props => <AnchorTag {...props} />
  // TODO add `img`
  // TODO add `blockquote`

  // TODO add `table`
};
```

- `src/components/layout.js`

`MDXProvider` に設定を渡している部分を抽出．

```js
import React from "react";
import { MDXProvider } from "@mdx-js/react";
import mdxComponents from "./mdxComponents";  // mdxComponents/index.js を読み込み
...
const Layout = ({ children, location }) => (
  <ThemeProvider location={location}>
    <MDXProvider components={mdxComponents}>
      ...
    </MDXProvider>
  </ThemeProvider>
);
...
```
