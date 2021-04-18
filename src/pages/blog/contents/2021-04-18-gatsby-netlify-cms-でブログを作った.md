---
title: Gatsby + Netlify CMS でブログを作った
date: 2021-04-18T13:17:28.140Z
template: blog
image: /assets/gatsby.png
tags:
  - React
  - Gatsby
---
# はじめに

はじめまして、佳輝といいます。以後よろしくお願い致します。
2019 年に大学院を卒業して移行、新卒 3 年目となりボチボチ input よりも output を重視していきたいと思い、技術ブログを自作しました。
これから更新頑張っていきたいと思います。

まず、はじめに当ブログに利用されている技術概念、未だによくわかっていない点を整理したいと思い、本記事を執筆している次第です。
細かい構築方法等を説明すると長くなりそうなので別記事に記載しようと思います。

本ブログ作成前の知識レベルは React のコードが雰囲気で読める、Gatsby？、Netlify CMS？ なんだそれ？って感じでした。
なので本記事も React や Vue は何かわかるけど、Gatsby とは何かがわからない読者が一番参考になるかなと思います。

# 本ブログの概要

## 本ブログの機能

本ブログの機能は以下です。

* **プロフィールページ**: 自己紹介ページ
* **Note ページ**: 自分が勉強したことを ~~雑に殴り書きする~~ 体系的にまとめるための機能
* **Blog ページ**: 本記事のように粒度の小さい or Note でカテゴライズできない内容を書く機能
* **App ページ**: 制作物を供養、もとい、お披露目する機能

いずれも、Netlify CMS でページ管理しているだけで、機能と呼んでいますが、やっていることは同じです。

## 利用されている技術スタック

本ブログに利用されている技術スタックについて概要を説明したいと思います。

### フロントエンド関連

* **[Gatsby](https://www.gatsbyjs.com/)**: React で利用できる静的サイトジェネレーター、これを使ってみたく本ブログを作りました。
* **[TypeScript](https://www.typescriptlang.org/)**: これも使ったことがなかったので使ってみました。
* **[Material-UI](https://material-ui.com/)**: [Material Design](https://material.io/design) に習った UI コンポーネントライブラリです。

### バックエンド関連

* **[Netlify](https://www.netlify.com/)**: 単純なホスティングに加え、GitHub への特定ブランチへの push をトリガーにアプリを Build/Deploy してくれます。
* **[Netlify CMS](https://www.netlifycms.org/)**: 本記事のブログコンテンツ管理を担当する Headless CMS です。

# 利用技術の概念

## Gatsby (静的サイトジェネレーター) とは？

(中学生の時初めて買ったヘアワックスは GATSBY でしたが、当然 mandom とは無関係です。)

Gatsby とは React で利用できる静的サイトジェネレーターと説明されることが多い気がします。

React や Vue といった SPA アプリは、index.html から import されている JavaScript 処理で DOM のレンダリングをします。
なのでサーバーから index.html をロードした瞬間にはブラウザには何も表示されておらず、JS が実行されて初めて UI らしいものが表示される動作となります。

また、URL のルーティングも特徴的です。
React の [react-router](https://reactrouter.com/) や Vue の [vue-router](https://router.vuejs.org/) といったライブラリにより、URL パスによってどのページを表示するかも JS を読み込んだクライアント側で調整することになります。
そのため、基本的にクライアント側のコンピューティングリソースを使用するのが SPA アプリケーションの特徴と言えます。

Web アプリ上で大量の API 呼び出しを行い動的にユーザーに見せるコンテンツが変更されるユースケースでは、通常の SPA 方式が適していますが、例えば 1 枚の HTML ページ 1 枚で会社の紹介をする Web ページを作成する時に、SPA アプリではクライアントリソースの無駄遣い感が否めません。
しかしながら、SPA developer は React で汎用性の高い UI 部品を持っていることが想定されます。

そこで、利用できるのが静的サイトジェネレーターです。
静的サイトジェネレーターでは、SPA が JS をロードしてレンダリングする DOM をビルド時に予めレンダリングして HTML ファイルとして出力します。
外部連携 (ローカルファイルの参照や外部の API 連携 等) が必要な部分は GraphQL 経由でビルド時にデータを取得し、データを注入した HTML ファイルを用意してくれます。

**通常の React の場合**

![fig-nonreact](/assets/nongatsby-request.png "通常の React の場合")

**Gatsby の場合**

![fig-gatsby](/assets/gatsby-request.png "Gatsby の場合")

これにより、React で開発されたアプリでサーバー側でレンダリング処理 (Server Side Rendering) を実現でき、クライアントのリソースは大きく消費されることはありません。

こういう構成を **Jamstack** というらしいです。
英文ですが、[公式のページ](https://jamstack.org/)に Jamstack とは何か、なぜ利用するのか、ベストプラクティスは何かが記載されているので参考になると思います。

Gatsby は React で Jamstack を実現できる静的サイトジェネレーターの 1 つです。
React で開発した UI 資産を利用しつつ、静的な HTML コンテンツを作成することが可能となります。

## Netlify CMS

Gatsby はコンテンツ管理を外部の [Headless content management system (Headless CMS)](https://en.wikipedia.org/wiki/Headless_content_management_system) で行います。
CMS とは Contents Manager System の略で WordPress に代表されるコンテンツ管理システムです。
CMS により、更新日時、タイトル、タグ等のメタ情報が付与されたブログ記事の管理 (追加・削除・更新) が容易になります。
WordPress 等の通常の CMS ではコンテンツを作成するフロント UI もフレームワークでまとめて提供されていますが、Headless CMS ではコンテンツを管理するバックエンド、追加・更新・削除する機能のみが提供されます。

Netlify 自体は Web サイトのホスティングに利用される CDN サービス的なものですが、GitHub/GitLab 等の特定のリポジトリ・ブランチに push されたことトリガーにデプロイを走らせたり、私は使っていませんがサーバーレス関数が利用できたりと高機能です。
その機能の 1 つとして提供されている、Netlify CMS はこの Headless CMS の 1 つです。
(他の Headless CMS は色々あり、[このサイト](https://jamstack.org/headless-cms/)に一覧されています。)

Netlify CMS では、Markdown 形式でコンテンツを管理します。
Gatsby 側でどのような種類の記事を投稿するのか、どのようなメタ情報が必要なのかを定義します。
本ブログでは以下のような定義をしています。

https://github.com/yosyos36/yoshiki-web/blob/main/static/admin/config.yml
```yml
collections:
  - name: blog
    label: Blog
    folder: src/pages/blog/contents
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields:
      - { name: title, label: Title }
      - { name: date, label: Date, widget: datetime }
      - {
          name: template,
          label: Template,
          widget: "select",
          options: ["blog", "note", "app"],
          default: "blog",
        }
      - { name: "image", label: "Image", widget: image }
      - {
          name: "tags",
          label: "Tags",
          widget: "select",
          multiple: true,
          options: ["React", "Gatsby", "Windows"],
        }
      - { name: body, label: Body, widget: markdown }
<略>
  - name: app
    label: App
    folder: src/pages/app/contents
    create: true
    fields:
      - { name: date, label: Date, widget: datetime }
      - { name: title, label: Title }
      - { name: body, label: Body, widget: markdown }
      - { name: "image", label: "image", widget: image }
      - { name: "githubUrl", label: "GitHub URL", required: false }
      - { name: "appUrl", label: "Application URL", required: false }
      - { name: "blogUrl", label: "Blog URL", required: false }
```

詳細は省略しますが、ブログ記事では題名、画像、タグがメタ情報として利用されています。
一方、App ページには本文は不要な代わりに、GitHub リポジトリの URL や、アプリの URL を設定できるようにしています。

これを元に、Netlify CMS はコンテンツを追加する機能を提供してくれます。
正確には、上記の情報を元に Netlify CMS のライブラリ (netlify-cms-app、gatsby-plugin-netlify-cms) がコンテンツ投稿を行う UI を提供してくれているような気がします。
以下のようなコンテンツ管理機能を提供してくれます。

**コンテンツ一覧画面**

![fig-netlify-list](/assets/list-netlify-cms-editor.png "コンテンツ一覧画面")

**コンテンツ編集画面**

![fig-netlify-editor](/assets/netlify-cms-editor.png "コンテンツ編集画面")

コンテンツを Publish すると、記事に対応する Markdown ファイルが GitHub リポジトリに Push されます。
Gatsby アプリ側ではこの Markdown ファイルの情報を参照して、コンテンツをレンダリング処理を記載しておく必要があります。
この Push をトリガーとして、Gatsby のビルドを実行し、ブログ記事がデプロイされます。
メタデータは Markdown ファイル上で以下のように表現されます。

https://github.com/yosyos36/yoshiki-web/blob/main/src/pages/blog/contents/2021-04-14-gatsby-netlify-cms-%E3%81%A7%E3%83%96%E3%83%AD%E3%82%B0%E3%82%92%E4%BD%9C%E3%81%A3%E3%81%9F.md
```markdown
---
title: Gatsby + Netlify CMS でブログを作った
date: 2021-04-14T15:15:28.140Z
template: blog
image: /assets/gatsby.png
tags:
  - React
  - Gatsby
---
# はじめに

はじめまして、佳輝といいます。以後よろしくお願い致します。
2019 年に大学院を卒業して移行、新卒 3 年目となりボチボチ input よりも output を重視していきたいと思い、技術ブログを自作しました。
これから更新頑張っていきたいと思います。
・・・
```

上記が Netlify CMS の機能です。

# 勉強した流れ

開発における知見をどのようなプロセスで習得していったかを記載していきます。
前述の通り、私は React x TypeScript はなんとなく理解できる程度でした。
React x TypeScript の勉強には以下の参考書を利用しました。

* [りあクト！ TypeScriptで始めるつらくないReact開発 第3.1版【Ⅰ. 言語・環境編】](https://oukayuka.booth.pm/items/2368045)
* [りあクト！ TypeScriptで始めるつらくないReact開発 第3.1版【Ⅱ. React基礎編】](https://oukayuka.booth.pm/items/2368019)
* [りあクト！ TypeScriptで始めるつらくないReact開発 第3.1版【Ⅲ. React応用編】](https://oukayuka.booth.pm/items/2367992)

上記の参考書は非常におすすめです。
React はまだまだ発展途上で旧式の実装方法と、新しい実装方法と様々に選択肢があり、実際どれを使えばよいの？と感じることが多々あります。
これらの本は歴史的敬意を踏まえて、筆者の方がどのように考えてこの実装方法を選択しているかが記載されています。

開発における方針として、勉強のためにできるだけ primitive な starter kit から Gatsby プロジェクトを作成し、Netlify CMS との連携機能は自作しました。
(というより、[gatsby-starter-netlify-cms](https://github.com/netlify-templates/gatsby-starter-netlify-cms) が Gatsby v3 に対応していないようで、依存関係苦しみたくないというのが本音です。)
本ブログは [gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default) から作成しました。

ブログ作成にあたっては以下のような方針で学習しました

1. とりあえず始めに公式の [Gatsby tutorial](https://www.gatsbyjs.com/docs/tutorial/) を実施しました

   * 最初呼んでいると内容が初歩的過ぎて心配になるのですが、後半は Gatsby 独自の概念が説明されていて有益でした。
2. そうは言いつつ Gatsby + Netlify CMS を一回 deploy してみる。

   * 本ブログの Starter Libirary には 利用していないのですが、一回 gatsby-starter-netlify-cms を Netlify 上に公開することで、検証環境的に使えて便利でした。
   * gatsby-starter-netlify-cms のソースコードも Gatsby と Netlify CMS の連携部分や、コンテンツのレンダリング部分を実装する上で有益でした。

# よくわかないこと or 痒いところ

**1. `gatsby develop` と `gatsby build` 時、本来なら TypeScript で型エラーしていたら指摘して欲しいがしてくれない**

TypeScript 的に型推論が効かないような場合も、VS Code としては注意してくれるのですが、ビルドエラーをすることはありません。
TypeScript 使っているのだから厳しくビルド時にエラーくらい吐いてくれた方が良いような気もします。

**2. TypeScript で export としたオブジェクトを、別のファイルでスプレッド構文で展開したオブジェクトを、さらに export した時に型推論が効かない**

以下のような時に TypeScript の型推論が失敗します。
tsconfig.json が悪い？Widening Literal Types 関連？
細かい話なのですが、一応詰まっている点なのでメモしておきます。

TypeScript ファイル 1
```typescript
const a = {
   test: "this is a"
}

default export a
```

TypeScript ファイル 2
```typescript
import a from "./a.ts"

const extendA = {
   ...a,
   b: "this is b"
}
```

TypeScript ファイル 3
```typescript
import b from "./b.ts"

console.log(b.test) // b.test があるかどうか保証されないエラー
```

# おわりに
読み返しても技術文章を書くのが下手だなという感じですが、これから output の機会を増やして慣れていきたいです。
今後、具体的な Gatsby x Netlify CMS プロジェクトを作成する手順をメモ代わりに記載できればと思います。