---
title: "React"
metaTitle: "React | JavaScript - Library"
metaDescription: "React tips"
---

## React べからず集

良記事！！！React でやるべきでない書き方のまとめ．

- [React のべからず集](https://qiita.com/jkr_2255/items/041f238a940f923e4dfc)

## 良くあるエラー集

### Property '[component-name]' does not exist on type 'JSX.IntrinsicElements'.

- [よく分からない React エラーメッセージ[メモ]](https://qiita.com/ta2roo/items/5d97e5d655deae8de8d3)

コンポーネントの命名の 1 文字目が大文字じゃないときにこのエラーが起こる．ただ 1 文字目を大文字にすればこのエラーは解決する．

ex) `item` -> `Item`

- 修正前

```js
- const item = () => {
+ const Item = () => {
  return <div>hello world</div>;
};

const ItemList = () => {
  return <item />;
};
```

## TypeScript での children type の型定義

- [stackoverflow: TypeScript and React - children type?](https://stackoverflow.com/questions/53688899/typescript-and-react-children-type)

```ts
interface ChildrenProps {
  children: JSX.Element[] | JSX.Element;
}

const Parent = (children: ChildrenProps) => {
  return <div>{children}</div>;
};
```

## Styling and CSS

- [API REFERENCE: DOM Elements - style | React](https://reactjs.org/docs/dom-elements.html#style)

### Q. コンポーネントに対してインラインスタイル（`style` 属性）は使えるか？

- A. 使える．しかし，**非推奨**．`className` で外部 CSS スタイルシートに定義されたクラスを参照するべき．
  nn
  `style` 属性は React アプリケーション内においてレンダー時に動的に計算されてしまい，パフォーマンスが悪くなる．

### React でアニメーション

`React Spring` と `react-useranimation` が良さげ？

- [React Transition Group](https://reactcommunity.org/react-transition-group/)
- [React Motion](https://github.com/chenglou/react-motion)
- [React Spring](https://github.com/react-spring/react-spring)
- `react-useranimation`
