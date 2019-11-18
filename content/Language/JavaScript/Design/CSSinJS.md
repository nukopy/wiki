---
title: "CSS in JS"
metaTitle: "JavaScript - Library - CSS in JS"
metaDescription: "$2"
---

## What is "CSS-in-JS"?

- [FAQ: Styling and CSS | React](https://reactjs.org/docs/faq-styling.html)
- [CSS in JS ライブラリの比較: MicheleBertoli/css-in-js | GitHub](https://github.com/MicheleBertoli/css-in-js)

`CSS-in-JS` は，JavaScript で CSS を書く実装手法（？）である．

CSS を外部ファイル（所謂，スタイルシート）に書く代わりになる．Frontend のフレームワーク（ライブラリ）の React，Vue，Angular などに限ったものではなく，サードパーティ製のライブラリから提供される．

> “CSS-in-JS” refers to a pattern where CSS is composed using JavaScript instead of defined in external files.
>
> Note that this functionality is not a part of React, but provided by third-party libraries. React does not have an opinion about how styles are defined; if in doubt, a good starting point is to define your styles in a separate \*.css file as usual and refer to them using className.

## "CSS-in-JS" のライブラリ

`emotion`，`styled-components` が人気．GatbyJS のチュートリアルは `styled-components` から `emotion` に置き換えられており勢いがある．

- emotion（以下，4 つに inspire された後発ライブラリ．いいとこ取り！）
- styled-components
- glam
- glamor
- glamorous（emotion の登場により開発停止，emotion に移行）

## emotion

emotion は JavaScript で CSS を書くために設計されたライブラリである．ドキュメントも充実している．

> Emotion is a library designed for writing css styles with JavaScript. It provides powerful and predictable style composition in addition to a great developer experience with features such as source maps, labels, and testing utilities. Both string and object styles are supported.

- [ドキュメント：Emotion - Introduction](https://emotion.sh/docs/introduction)

- Getting Started

  - Introduction
  - Install
  - The css Prop
  - Styled Components
  - Composition
  - Object Styles
  - Nested Selectors
  - Media Queries
  - Global Styles

- Advanced

  - Keyframes
  - Server Side Rendering
  - Attaching Props
  - Theming
  - Labels
  - Class Names
  - CacheProvider
  - Migrating to Emotion 10

- Tooling

  - Babel Plugin
  - Babel Macros
  - Source Maps
  - Snapshot Testing
  - TypeScript

- Packages
  - @emotion/core
  - @emotion/styled
  - @emotion/cache
  - emotion
  - babel-plugin-emotion
  - eslint-plugin-emotion
  - emotion-server
  - emotion-theming
  - jest-emotion
  - @emotion/native
  - @emotion/primitives
  - create-emotion
  - create-emotion-server
  - @emotion/babel-preset-css-prop

### emotion の基本機能

- styled 記法による CSS
- Object Styles による CSS

例を示す．テーマを作る．

- styled 記法による CSS

style が付与されたコンポーネントタグを生成できる生成．これは styled-components でサポートされている書き方である．

```js
// styledの場合
import styled from "react-emotion";

const Button = styled("button")({
  color: "#000"
});

render(<Button>This is darkorchid.</Button>);
```

- Object Styles による CSS

Object Styles 機能でスタイルを追加することもできるのが emotion の良さです。

```js
// Object Stylesの場合
import { css } from "emotion";

const className = css({
  color: "#000"
});

render(<div className={className}>This is darkorchid.</div>);
```

### styled-components から emotion への書き換え

- `styled-components` の書き換え

```js
- import styled, {css} from "styled-components"
+ import {css} from "@emotion/core";
+ import styled from "@emotion/styled";
```

- `styled-icons` の書き換え

```js
- import { Search } from "styled-icons/fa-solid/Search";
+ import { Search } from "emotion-icons/fa-solid/Search";

- import { Algolia } from "styled-icons/fa-brands/Algolia";
+ import { Algolia } from "emotion-icons/fa-solid/Search";
```

## styled-system の ecosystem

### API

#### System

styled-system においてカスタム属性を作るための低レベルな API．他の Styled System の関数のように使うことのできる style 関数を返す．

To create custom props for other CSS properties, use the `system` low-level utility. The `system` function takes a configuration object as its only argument and returns a style function that can be used like any other Styled System function. Each key in the configuration object can define the following:

- `property`: the CSS property to use in the returned style object
- `properties`: an array of multiple properties (e.g. `[ 'marginLeft', 'marginRight' ]`)
- `scale`: a string referencing a key in the theme object
- `transform`: a function to transform the raw value based on the scale
- `defaultScale` a fallback scale object for when there isn't one defined in the theme object

- 基本的な使用

```js
// example
import styled from "styled-components";
import { system } from "styled-system";

const Text = styled("div")(
  system({
    fontSize: {
      property: "fontSize",
      scale: "fontSizes",
      defaultScale: [12, 14, 16, 20, 24, 32, 48]
    },
    lineHeight: {
      property: "lineHeight",
      scale: "lineHeights"
    },
    // shorthand definition
    textAlign: true
  })
);
```

- gatsby の starter での使用例

```js
// container.js
const Container = system(
  {
    is: "div",
    px: 3,
    mx: "auto",
    maxWidth: 1024
  },
  "maxWidth"
);
Container.displayName = "Container";

// pre.js
const Pre = system(
  {
    is: "pre",
    fontSize: 1,
    // fontFamily: "mono",
    m: 0
  },
  {
    overflow: "auto"
  },
  "fontFamily",
  "space",
  "color"
);
Pre.displayName = "Pre";

export default Pre;

// heading.js
const Heading = system(
  {
    is: "h2",
    fontSize: 5,
    fontWeight: "700",
    lineHeight: 1.5,
    mt: 4,
    mb: 3
  },
  "fontFamily",
  "color",
  "textAlign"
);
Heading.displayName = "Heading";

export default Heading;
```
