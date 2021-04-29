---
title: 評価版 Windows Server 2019 UEFI boot を Hyper-V に構築する
date: 2021-04-28T11:12:59.624Z
template: blog
image: /assets/blog428-head.png
tags:
  - Windows
---
# はじめに

以下のような要件を持った VM を Hyper-V 上に起動したかったのでメモがてら記事にしました。

* ゲスト OS は Windows Server 2019 OS 評価版
* UEFI ブート
* インターネット接続可能

# 環境

* ホスト OS Windows Server 2019 (1809)

  * ホスト OS はインターネット接続可能
* Hyper-V Manager version 10.0.17763.1

# 手順

早速手順を説明していきます。

## 1. Windows Server 2019 評価版をダウンロードします

ISO の OS イメージをダウンロードします。

[Windows Server 無料試用版 | マイクロソフト](https://www.microsoft.com/ja-jp/windows-server/trial)

## 2. NAT 仮想ネットワークの構築

ほとんど以下の公式ドキュメントの内容と同じです。

[NAT ネットワークのセットアップ | Microsoft Docs](https://docs.microsoft.com/ja-jp/virtualization/hyper-v-on-windows/user-guide/setup-nat-network)

ホスト OS 経由で VM がインターネット接続します。

まず、仮想スイッチを作成します。

```powershell
New-VMSwitch -SwitchName "<任意のスイッチ名>" -SwitchType Internal
```

今回は、ホスト OS で NAT して外部に通信する構成なので、スイッチタイプは Internal にします。
インターネット接続が目的なら External で作成するのもありなのですが、外部ネットワークの設定が触れなかったのでこういう構成です。

続いて、Get-NetAdapter でインターフェイスインデックスを確認します。

```powershell
Get-NetAdapter
```

以下のような形で表示されます。

![get-netadapter](/assets/blog428-fig1.png "get-netadapter")


作成した仮想スイッチの ifIndex をメモしてください。

続いて、作成した仮想スイッチにホスト OS の NAT ゲートウェイとして利用する IP アドレスを定義します。

```powershell
New-NetIPAddress -IPAddress <NAT GW の IP アドレス> -PrefixLength <サブネットのプレフィックス長> -InterfaceIndex <先に調べた ifIndex>
```

最後に NAT ネットワークを構築します。

```powershell
New-NetNat -Name <任意のネットワーク名> -InternalIPInterfaceAddressPrefix <NAT ネットワーク CIDR>
```

例) サブネット 192.168.0.0/24 で IP アドレス 192.168.0.1 の NAT GW を作成する場合には以下です。

```powershell
New-NetIPAddress -IPAddress 192.168.0.1 -PrefixLength 24 -InterfaceIndex <調べた ifIndex>
New-NetNat -Name <任意のネットワーク名> -InternalIPInterfaceAddressPrefix 192.168.0.0/24
```

## 3. VM を作成

Hyper-V Manager から VM を作成していきます。

Action > New > Virtual Machine をクリックします。

New Virtual Machine Wizard を以下のように入力していきます。

* Before You Begin: 何もせず Next
* Specify Name and Location: Name に VM の名前を入力して Next

  * VM を保存する場所を変更したいなら設定
* Specify Generation: 今回は UEFI ブートしたいので、Generation 2 を選択して Next
* Assign Memory: Startup memory を適当に設定して Next

  * 私は 1024 MB で起動することを確認しました。
* Configure Networking: Connection にて 2 で作成した仮想スイッチを選択して Next
* Connect Virtual Hard Disk: 

  * 新規にインストールするので Create a virtual hard disk を選択
  * vhdx のファイル名や Location は任意に選択
  * Size はホスト OS のストレージを見て余裕のある範囲で設定して Next

    * (ここでホスト OS より大きいサイズを指定しても何も Warning してくれず、私はしばらくそれに気づけずハマってました)
* Installation Options: 

  * Install an operating ssytem from a bootable CD/DVD-ROM を選択
  * Image file に 1 でダウンロードした ISO ファイルを選択

## 4. Windows Server 2019 評価版のインストール

VM を起動します。
ここでハマりポイントなのですが、UEFI ブートしようとすると以下の画面で Hung します。

![boot-hung](/assets/blog428-fig2.png "boot hung")

「Press any key」とあるのに、キーを押しても反応しません。
なぜかわからないのですが、何らかのキーを入力したまま改めて VM を起動 (画面中の start を押すか、電源マークをクリック) するとうまくいきます。

続いて画面に従ってインストールしていきます。

* 言語設定やキーボードの設定は任意に変更してください。
* インストールするオペレーティングシステムは今回はデスクトップ画面が欲しいので、デスクトップエクスペリエンスを選択します。

  * Standard か Datacenter かはどちらでもよかったので適当に選びます。
* 適用される通知とライセンス条項に同意して Next
* インストールの種類は、新規に VM にインストールするのでカスタムを選択します。
* インストール場所は VM のストレージをそのまま選択します。
* インストール終わるまで待ちます。
* Administrator ユーザーのパスワード設定を要求されるので設定します。

これでインストールが完了するはずです。

# 4. ネットワーク設定

インターネット接続できるようにします。
DHCP サーバー構築してもできそうなのですが、今回は静的 IP アドレスで設定します。

* Win+r キーを入力して ncpa.cpl を開きます。
* イーサネット > プロパティ > インターネットプロトコルバージョン (TCP/IPv4) を開きます。
* 「次の IP アドレスを使う」を選択し、以下のように設定します。

  * IP アドレス: NAT ネットワークの範囲から任意に設定
  * サブネットマスク: NAT ネットワークのサブネットマスクを指定
  * デフォルトゲートウェイ: NAT GW の IP アドレスを指定
* 「次の DNS サーバーのアドレスを使う」にチェックを入れ、適当な DNS サーバーの IP アドレスを入力します。

  * インターネットに接続できるので、一旦 8.8.8.8 でよいと思います。

疎通性の確認として、`ping 8.8.8.8` が正常であることを確認します。

**終了**

# まとめ

自分が思い出すように参照するつもりで書きましたが、誰かの役に立てれば幸いです。
ハマりポイントは少ないですが、ブートできない時は焦りました。
ネットワーク周りもいろいろやり方はあるのですが、とりあえずインターネット接続できるようにしたい時には簡単な構成かなと思います。