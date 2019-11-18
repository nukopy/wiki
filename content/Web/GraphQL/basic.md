---
title: "basic"
metaTitle: "GraphQL - basic"
metaDescription: "GraphQL tips."
---

- [「GraphQL」徹底入門 ─ REST との比較、API・フロント双方の実装から学ぶ](https://employment.en-japan.com/engineerhub/entry/2018/12/26/103000)

## GraphQL とは？

GraphQL は Facebook が開発している **Web API の規格**．「クエリ言語」，「スキーマ言語」からなる．

- [GraphQL | A query language for your API](https://graphql.org/)

### クエリ言語：リクエストの記述

- クエリ言語：**GraphQL API のリクエストを記述するための言語**．操作の種類により 3 種類に分類される．
  - query：データ取得系
  - mutation：データ更新系
  - subscription：サーバーサイドからのイベント通知

### スキーマ言語：仕様を記述

- スキーマ言語：**GraphQL API の仕様を記述するための言語**．リクエストされたクエリは，スキーマ言語で記述したスキーマに従って GraphQL 処理系により実行され，レスポンスを生成する．

### スキーマ，クエリの例

- スキーマ

```graphql
type Query {
  currentUser: User!
}

type User {
  id: ID!
  name: String!
}
```

- クエリ

先頭の `query` はクエリのタイプがデータ取得系であることを意味する．

```graphql
query GetCurrentUser {
  currentUser {
    id
    name
  }
}
```

- レスポンス

```json
{
  "data": {
    "currentUser": {
      "id": "0033",
      "name": "foo"
    }
  }
}
```

レスポンスの特徴は以下の通り．

- スキーマに定義したフィールドの内，クエリに指定したフィールド**のみ**が返ってくる．
- クエリの構造とレスポンスデータの構造もよく似ている．

このように，

- レスポンスに含まれるデータの指定が必須
- クエリとレスポンスの構造がよく似ている

という 2 つが GraphQL の大きな特徴である．

この特徴により，GraphQL は優れた DX（Developer Experience）を持ち，生産性やクライアントコードの品質にもいい影響を与える．例えば，クエリからレスポンスの構造を予測できるため，**Web API に対する深い知識がなくても，GraphQL のクエリであればある程度は読み書きができる**．

また，スキーマの情報を利用してクエリを書くためのサポートを行うクエリエディタが存在する．これにより，ことクエリの読み書きという点でいえば**学習コストも非常に少なくなっている**．

### クエリ

GraphQL のクエリにより，ユーザは API からクエリ内で特定したデータだけを得ることができる．クエリを作るには，scalars(プリミティブな値のこと: Int, Float, String, Boolean, or ID など) を返すまでフィールド（field）内のフィールド（subfield）を指定する必要がある．

```json
query {
  JSON objects to return
}
```

For a real-world example, see "Example query."

## GitHub GraphQL tips

GraphQL のスキーマはプリミティブ型をベースに型を作り，その型をさらに他のフィールドの型として使用するという形式を取っている．

またある特定の型が別の型の組み合わせ（本記事では「下位の型」と呼ぶことにする）によって定義（実装）されている場合，その型のフィールドはそのまま使えるが，下位の型のインタフェースを使うためにはそれを明示的に宣言する必要がある．

例えば，GitHub の GraphQL API からコミット履歴を取得するクエリ（取得系のクエリを `query` という）の例を表す．

```graphql
query GetRepositoryCommitsHistory {
  github {
    repository(owner: "nukopy", name: "wiki") {
      ref(qualifiedName: "master") {
        target {
          ... on Commit {
            id
            history(first: 5) {
              edges {
                node {
                  id
                  message
                  committedDate
                  url
                  author {
                    name
                    email
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

明示的に呼び出している部分は，`target` を使っている部分で，ここでは `target` を構成する方のうちの一つ，`Commit` を明示的に宣言している部分である．

```graphql
target {
  ... on Commit {省略}
}
```

target は以下の型から実装されている．

- `Blob`
- `Commit`
- `Tag`
- `Tree`

例えば，`Blob` のインタフェースを使いたい場合は以下のように書けばいい．

```graphql
target {
  ... on Blob {省略}
}
```

### はまったポイント

GatsbyJS には GraphQL ためのインタフェースが用意されているが，その中で下位の型を使用したい場合には，`gatsby-config.js` 内の `typeName` を設定したアンダーバーで繋ぐ必要がある．今回は以下のように `typeName: GitHub` と設定したため，`GitHub_Commit` とすれば良い．

- gatsby-config.js

```js
{
  resolve: "gatsby-source-graphql",
  options: {
    typeName: "GitHub",
    fieldName: "github",
    url: "https://api.github.com/graphql",
    // HTTP headers
    headers: {
      // Learn about environment variables: https://gatsby.dev/env-vars
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`
    },
    // Additional options to pass to node-fetch
    fetchOptions: {}
  }
}
```

- query

```graphql
query GetRepositoryCommitsHistory {
  github {
    repository(owner: "nukopy", name: "wiki") {
      ref(qualifiedName: "master") {
        target {
-         ... on Commit {省略}
+         ... on GiHub_Commit {省略}
}
```

GitHub で用意されている GraphiQL というクエリをインタラクティブに実行できるサイトがあるが，そこでは `on GitHub_Commit` ではなく `on Commit` で実行できる．ネット上の情報は大体 `on Commit` で書いてあるが GatsbyJS 上では動かないため注意が必要である．

### 参考

- [Fahme/hoge](https://github.com/Fahme/fahmebnchi.com/blob/f9a177777e511278b6c9a4c1a7cbe9de5a0ca428/src/utils/githubQuery.js)

## Introduction to GraphQL

- [Introduction to GraphQL | GitHub](https://developer.github.com/v4/guides/intro-to-graphql/)

1. GraphQL terminology
2. Discovering the GraphQL API

### Schema & Query

GraphQL is "introspective". This means you can query a GraphQL schema for details about itself.

- Query `__schema` to list all types defined in the schema and get details about each:

```graphql
query {
  __schema {
    types {
      name
      kind
      description
      fields {
        name
      }
    }
  }
}
```

- Query `__type` to get details about any type:

```graphql
query {
  __type(name: "Repository") {
    name
    kind
    description
    fields {
      name
    }
  }
}
```
