---
title: "Redux"
metaTitle: "Redux | JavaScript - Library"
metaDescription: "Redux tips"
---

## Redux の構成要素

- Action
- ActionCreator
- Store
- State
- Reducer

## Summary

- Store が状態を管理するグローバル変数みたいなもの
- Action は Store に対して行いたい操作を書いておくオブジェクト（`type` は必須．`type` は string 型で，Store に対して行う処理を書く）．
- ActionCreator はその名の通り Action を作る．
- Reducer は Action の受け口であり，Store へのアクセスを管理する．Action と State を受け取り，更新後の State を返す pure な関数．
- Store にデータ（状態）を入れる．このとき，`Action -> Reducer` を経由する．具体的には，Action を dispatch する．

## Redux の 3 原則

Redux の基本設計は以下の 3 つの原則に基づいて設計されている．上記のデータフローがこの原則に則っていることがよく分かる．

1. Single source of truth
   アプリケーション内で Store は 1 つのみとし，State は単独のオブジェクトとして Store に保持される．

2. State is read-only
   State を直接変更することはできず，action を Store へ dispatch することでしか State は変更できない．

3. Mutations are written as pure functions
   State を変更する関数(`Reducer`)は pure な関数にする．
