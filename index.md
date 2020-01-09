## これはなに？

Splatoon2のブキを接続しているボイスチャンネルのメンバーにランダムにばらまくDiscord botです。

### botをサーバーに追加する

以下のURLにアクセスし、Botをサーバーに追加してください。  
[https://discordapp.com/api/oauth2/authorize?client_id=661600689495212083&permissions=0&scope=bot](https://discordapp.com/api/oauth2/authorize?client_id=661600689495212083&permissions=0&scope=bot)

### コマンド

botアカウントに対して`buki`とメンションを送ってください。

```
@ブキミ buki
```

### ローカルで動かす場合

- node v12.1.0
- yarn 1.15.2

ダウンロード＆インストール

```sh
git clone https://github.com/hisahana/spla-buki-bot.git
cd spla-buki-bot
yarn install
```

Discord botアカウントを用意し、Tokenを設定

```sh
cp .env.example .env
vi .env

# Discord botで発行したTokenを設定
TOKEN=YOUR-DISCORD-BOT-TOKEN
```

起動

```sh
node App.js
```

### その他

質問があれば[https://twitter.com/ykm1ya](@ykm1ya)までご連絡ください。
