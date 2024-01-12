# WebSocket-BOT
discord.jsをサポート役に回してWebSocketとAPIを直で叩いて動かすBOT

## 起動手順
クローンしてモジュールを一通り入れる
```
git clone https://github.com/KiRura/WebSocket-BOT.git
cd WebSocket-BOT
npm i
```
ルートディレクトリに`.env`ファイルを作る
```
DISCORD_TOKEN=ここにトークンを入力
```
node.jsで起動させる vscodeのデバッグでやった方がログが見やすい
```
C:\Program Files\nodejs\node.exe .\main.js

2024-01-12 21:21:20.693 INFO            Loaded modules
2024-01-12 21:21:20.698 INFO            Loaded ready.js
2024-01-12 21:21:20.698 INFO            Fetching ws...
2024-01-12 21:21:21.000 INFO            Success
2024-01-12 21:21:21.001 INFO            Connecting ws...
(node:29088) [UNDICI-WS] Warning: WebSockets are experimental, expect them to change at any time.
(Use `node --trace-warnings ...` to show where the warning was created)
{t: null, s: null, op: 10, d: {…}}
2024-01-12 21:21:21.315 INFO            Connected
2024-01-12 21:21:21.315 INFO            Successful login
{t: 'READY', s: 1, op: 0, d: {…}}
2024-01-12 21:21:21.608 INFO            Your Bot#1234 ALL READY
```