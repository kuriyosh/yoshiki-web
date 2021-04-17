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

まず、はじめに当ブログに利用されている技術概念、未だによくわかっていない点を整理したいと思い、本記事を執筆している次第です。
細かい構築方法等を説明すると長くなりそうなので別記事に記載しようと思います。

本ブログ作成前の知識レベルは React のコードが雰囲気で読める、Gatsby？、Netlify CMS？ なんだそれ？って感じでした。
なので本記事も React や Vue は何かわかるけど、Gatsby とは何かがわからない読者が一番参考になるかなと思います。

# 本ブログの概要
## 本ブログの機能
本ブログの機能は以下です。

- **プロフィールページ**: 単純なポートフォリオ
- **Note ページ**: 自分が勉強したことを ~~雑に殴り書きする~~ 体系的にまとめるための機能
- **Blog ページ**: 本記事のように粒度の小さい or Note でカテゴライズできない内容を書く機能
- **App ページ**: 制作物を供養、もとい、お披露目する機能

いずれも、Netlify CMS でページ管理しているだけで、機能と呼んでいますが、やっていることは同じです。

## 利用されている技術スタック
本ブログに利用されている技術スタックについて概要を説明したいと思います。

### フロントエンド関連
- **[Gatsby](https://www.gatsbyjs.com/)**: React で利用できる静的サイトジェネレーター、これを使ってみたく本ブログを作りました。
- **[TypeScript](https://www.typescriptlang.org/)**: これも使ったことがなかったので使ってみました。
- **[Material-UI](https://material-ui.com/)**: Material Design に習った UI コンポーネントライブラリです。

### バックエンド関連
- **[Netlify](https://www.netlify.com/)**: 単純なホスティングに加え、GitHub への特定ブランチへの push をトリガーにアプリを Build/Deploy してくれます。
- **[Netlify CMS](https://www.netlifycms.org/)**: 本記事のブログコンテンツ管理を担当する Headless CMS です。

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
静的サイトジェネレーターでは、SPA が JS をロードしてレンダリングする DOM を予めレンダリングして HTML ファイルとして出力します。
また、URL パスごとに異なるページが用意されているならそのパスに対応する HTML ページも予め用意してくれます。
本来、SPA アプリでは JS の処理が完了するまで UI が決定しなかったものを、ビルド時に JS をロードしてレンダリング済の HTML ファイルを作ってしまおうという発想です。

これにより、React で開発されたアプリでサーバー側でレンダリング処理 (Server Side Rendering) を実現でき、クライアントのリソースは大きく消費されることはありません。

こういう構成を **Jamstack** というらしいです。
英文ですが、[公式のページ](https://jamstack.org/)に Jamstack とは何か、なぜ利用するのか、ベストプラクティスは何かが記載されているので参考になると思います。

Gatsby は React で Jamstack を実現できる静的サイトジェネレーターの 1 つです。
React で開発した UI 資産を利用しつつ、静的な HTML コンテンツを作成することが可能となります。

「んじゃ Gatsby で Web ページ作る時には 外部 API 一切使えないの？ React でよくない？」という疑問が浮かんでくれると嬉しいのですが、そうではないです。
Gatsby はビルド時に Web サイト上で利用されている外部連携 (ローカルファイルの参照や外部の API 連携 等) が必要な部分は GraphQL 経由でビルド時に取得してくれます。
外部連携が必要な部分に、GraphQL 経由で予めデータを fetch し、外部から取得したデータを注入した上で HTML ファイルを生成してくれます。

### 通常の React の場合

### Gatsby の場合

## Netlify CMS
「んじゃ本ブログはブログ記事も静的コンテンツとして提供されていて、React コンポーネントを具に変更してブログ記事を一つ一つ書いているんやなぁ、大変どすなぁ」と言われると若干 No です。
Gatsby はコンテンツ管理を外部の [Headless content management system (Headless CMS)](https://en.wikipedia.org/wiki/Headless_content_management_system) で行ってくれます。
CMS とは Contents Manager System の略で WordPress に代表されるコンテンツ管理システムです。
WordPress 等の通常の CMS ではコンテンツを作成するフロントエンドもフレームワークでまとめて提供されていますが、Headless CMS ではコンテンツを管理するバックエンド、追加・更新・削除する API のみが提供されます。

Netlify CMS はこの Headless CMS の 1 つです。
(他の Headless CMS は色々あり、[このサイト](https://jamstack.org/headless-cms/)に一覧されています。)

Netlify 自体は Web サイトのホスティングに利用される CDN サービス的なものですが、GitHub/GitLab 等の特定のブランチに push されたことトリガーにデプロイを走らせたり、私は使っていませんがサーバーレス関数が利用できたりと高機能です。
中でも Netlify CMS と呼ばれる、静的サイトジェネレータにコンテンツ管理を注入できる機能が強力です。

ブログ記事は元のデータは全て Markdown 形式で書かれています。
Gatsby では、ビルド時にこの Markdown ファイルを読み込み、HTML として解釈する機能を用意してます。
コンテンツが追加される流れは以下です。

1. gatsby-plugin-netlify-cms を追加し、Netlify CMS 用のページ追加機能をアプリに用意しておく。
2. デプロイされているアプリから以下のような UI でページを追加する。
3. Publish を押すと、連携している GitHub リポジトリに編集したページが Markdown として push される。
4. push をトリガーとして、Netlify が Gatsby アプリのビルド・デプロイを開始する。
5. 実際にブログ記事が追加される。

# 勉強した流れ
上記のような知見をどのようなプロセスで習得していったかを記載していきます。
前述の通り、私は React x TypeScript はなんとなく理解できる感じでした。
React x TypeScript の勉強には以下の参考書を利用しました。

ちなみに以下の参考書は非常におすすめです。
React はまだまだ発展途上で旧式の実装方法と、新しい実装方法と様々に選択肢があり、実際どれを使えばよいの？と感じることが多々あります。
これらの本は歴史的敬意を踏まえて、筆者の方がどのように考えてこの実装方法を選択しているかが記載されています。

- [りあクト！ TypeScriptで始めるつらくないReact開発 第3.1版【Ⅰ. 言語・環境編】](https://oukayuka.booth.pm/items/2368045)
- [りあクト！ TypeScriptで始めるつらくないReact開発 第3.1版【Ⅱ. React基礎編】](https://oukayuka.booth.pm/items/2368019)
- [りあクト！ TypeScriptで始めるつらくないReact開発 第3.1版【Ⅲ. React応用編】](https://oukayuka.booth.pm/items/2367992)

まず、勉強のためにできるだけ primitive な start kit から Gatsby プロジェクトを作成しました。
本ブログは [gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default) から作成しました。

1. とりあえず始めに公式の Gatsby tutorial を実施しました
   - 内容は覚えてなかったりしたのですが、「こういうことしたいんだけど Tutorial に答えがあった気がするな」という場面が多々ありました。
2. そうは言いつつ Gatsby + Netlify CMS を一回 deploy してみる。
   - 本ブログの Starter Libirary には 利用していないのですが、一回 gatsby-starter-netlify-cms を Netlify 上に後悔することは非常に有益でした。「この箇所を変更するとこのファイルに影響する」、または、「こう言う設定を行いたいが、どういう実現するのか」等参考になりました。
3. 適当な UI テンプレートから、ブログ記事を作成
   - あまり CSS の知識がないので、今回は Creative Tim さんから提供されている無料の UI テンプレートを使いました。(ただ、TypeScript 非対応だったので TypeScript 用に書き直ました。)

# よくわかないこと or 痒いところ
**`gatsby develop` と `gatsby build` 時、本来なら TypeScript で型エラーしていたら指摘して欲しいがしてくれない**

TypeScript 的に型推論が効かないような場合も、VS Code としては注意してくれるのですが、ビルドエラーをすることはありません。
TypeScritp 使っているのだから厳しくビルド時にエラーくらい吐いてくれた方が良いような気もします。