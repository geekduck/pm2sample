# pm2のforkモードで動的にCPUと同じ数のhttpサーバを起動する

## 動かし方

$ npm install -g pm2

$ pm2 start process.json

CPUが4つの環境ではhttp://localhost:8080, http://localhost:8081, http://localhost:8082, http://localhost:8083でサーバが起動します。
