---
title: "Google Colaboratory"
metaTitle: "Google Colaboratory | Platforms"
metaDescription: "Google Colaboratory"
---

## インスタンスの時間制限

- 12 時間 & 90 分ルール

Google Colaboratoryでは以下の条件を満たす場合，実行中のプログラムがあってもインスタンスの状態が全てリセットされる．

- 【12 時間ルール】新しいインスタンスを起動してから 12 時間経過
- 【90 分ルール】ノートブックのセッションが切れてから 90 分経過

1 つ目の 12 時間ルールについては，学習データや中間生成物を Google Drive に退避させることで学習を継続することができるGoogle Drive との連携もでき，そっちに出力できる．

2 つ目の 90 分ルールにも対策がある．ノートブックのセッションが切れて 90 分経過すると，書いたコードは残ってはいるものの，また環境準備の一連の流れをやり直す必要がある．
