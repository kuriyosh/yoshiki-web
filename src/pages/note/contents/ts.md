---
title: TypeScript
updateDate: 2021-11-20T08:18:09.433Z
template: note
image: /assets/ts-icon.png
---
# 型定義メモ
## 文字列リテラルを key にしたオブジェクトの型
以下のような文字列リテラルがあるとする
```ts
type KeyType = 'test1' | 'test2' | 'test3'
```

文字列リテラルのいずれかを key に持つオブジェクトの型
```ts
const keyValue: Record<KeyType, string> = {
    'test1': 'value1',
    'test2': 'value2'
}
```

文字列リテラルの全てを key に持つオブジェクトの型
```ts
const keyValue: { [key in KeyType]: string } = {
    'test1': 'value1',
    'test2': 'value2',
    'test3': 'value3'
}
```

## Object.keys とインスタンスメソッドを組み合わせた時の型注釈
Array のインスタンスメソッドを利用して、`Object.keys()` で列挙したキーにメソッド内でアクセスすると型エラーになる。

```ts
type TestType = {
    test1: string
    test2: number
    test3: object
}

const testObj: TestType = {
    test1: "",
    test2: 0,
    test3: {}
}

Object.keys(testObj).map((v) => v[test1])
/*
 * → ERROR
 * 型 'string' の式を使用して型 'TestType' にインデックスを付けることはできないため、要素は暗黙的に 'any' 型になります。
 * 型 'string' のパラメーターを持つインデックス シグネチャが型 'TestType' に見つかりませんでした。ts(7053)
*/
```

以下のように型定義を入れる方法がよく紹介されている。

```ts
(Object.keys(testObj) as (keyof TestType)[]).map((v) => testObj[v])
```