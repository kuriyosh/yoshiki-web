---
title: Vue
update_date: 2021-04-11T22:29:45.969Z
updateDate: 2021-06-19T03:05:06.791Z
template: note
image: /assets/vue-icon.png
---

# Nuxt.js

## プロジェクトの作成

```bash
yarn create nuxt-app <project_name>
```

### src ディレクトリの利用
Nuxt.js を利用しているとプロジェクトのルートディレクトリ直下にファイルが作成され続けて分かりづらい  
nuxt.config.js に `srcDir` の設定を書いて、 `src` 配下のソースコードを配置する

```js
export default {
  srcDir: 'src'
}
```

下記のディレクトリを `src/` 配下にする
- assets/
- components/
- layouts/
- middleware/
- pages/
- plugins/
- static/
- store/

自分は開発中基本的に `src/` をルートとした絶対パスで指定したいので、TypeScript を利用している場合には、`tsconfig.json` の設定も記載する

```json
{
    "baseUrl": "src",
}
```