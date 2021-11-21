---
title: React
updateDate: 2021-06-04T10:06:44.954Z
template: note
image: /assets/react-icon.png
---
# Material UI
自分がよく利用する UI フレームワーク
## component の className と classes property の違い
className でだいたい調整できるけど、たまにコンポーネント内のこの部分だけ調整したいというユースケースがある
その時のために、コンポーネント毎にインターフェイスが定義されている
例えば、`Button` には以下のインターフェイスがある
Description を読んで、どのタイミングで適用される rule なのかを把握できる

https://material-ui.com/api/button/#css

このインターフェイスを利用して、CSS を適用する時に `classes` property を利用する

(使用例)
```jsx
<Button
  classes={{
    root: classes.root, // class name, e.g. `classes-nesting-root-x`
    label: classes.label, // class name, e.g. `classes-nesting-label-x`
  }}
>
  classes nesting
</Button>
```

参考
- https://material-ui.com/customization/components/#overriding-styles-with-classes

# TypeScript
(本当は React 配下でないと思うがここに配置)
## 型定義のテクニック
**文字列リテラル型をキーとした、新しい型を定義**
```ts
type Fruit = 'apple' | 'banana' | 'orange';
type FruitBacket = {[k in Fruit]: number};

const yoshikiFruitBacket: FruitBacket = {
    apple: 2,
    banana: 0,
    orange: 1
}

yoshikiFruitBacket.grape = 2; // error
}