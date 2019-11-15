# GatsbyJS で自分用 wiki 立ててみた

React の CMS である GatsbyJS で自分用の wiki を立ててみました．
デプロイ先は Netlify です．

## 動機

自分がちょっと調べたけど忘れたくない tips を `#memo` というハッシュタグを使ってツイートしてるんですが，
それらを Markdown で簡単にまとめたいなと思ったのがきっかけです．
自分が wiki に求める条件としては，

- Markdown で書ける（更新がしやすい）
- シンタックスハイライト，画像埋め込みなどができる
- 階層構造を持った目次（大体の wiki にある）
- React で書いてみたい

そんで調べていたら React で静的ページを簡単に作れる GatsbyJS というものを hpp さんのツイートから知りました．

## 早速作ってみる

```bash
$ yarn global add gatsby
```

スターターがある．プロジェクトのテンプレみたいなものです．
今回はこれに思いっきり乗っかります．

[starter](https://www.gatsbyjs.org/starters/?c=Markdown&c=MDX&v=2)

GitBook のスタイルを持つスターターを見つけました．
目次もあって素晴らしいです．

```bash
$ gatsby
```
