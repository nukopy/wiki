---
title: "React"
metaTitle: "JavaScript - Library - React"
metaDescription: "React tips."
---

### Styling and CSS

- [API REFERENCE: DOM Elements - style | React](https://reactjs.org/docs/dom-elements.html#style)

#### Q. コンポーネントに対してインラインスタイル（`style` 属性）は使えるか？

- A. 使える．しかし，**非推奨**．`className` で外部 CSS スタイルシートに定義されたクラスを参照するべき．
  nn
  `style` 属性は React アプリケーション内においてレンダー時に動的に計算されてしまい，パフォーマンスが悪くなる．

### React でアニメーション

`React Spring` と `react-useranimation` が良さげ？

- [React Transition Group](https://reactcommunity.org/react-transition-group/)
- [React Motion](https://github.com/chenglou/react-motion)
- [React Spring](https://github.com/react-spring/react-spring)
- `react-useranimation`
