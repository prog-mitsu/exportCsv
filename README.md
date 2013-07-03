exportCsv
=========
jqGridからCSVをエクスポートするためのjavascript & google apps script処理セットです。
CSVをエクスポートする際、ローカルのjavascriptだけでファイル出力するのは困難なので、
サーバにPOSTする必要がありますが、そのサーバ側の処理をgoogle apps scriptで作成しています。

気軽にCSVファイルを出力したい際に、google apps scriptなら無料でサクっと用意できるので便利かなと。
自分のwebページにCSV出力を付けたいが、レンタルサーバだったりで勝手にサーバサイドプログラムを置けない
事情があることも多いと思いますが、そういった際に便利です。
(サーバサイドは、google apps scriptの単独スクリプトプロジェクトを作り、exportCsv.gsを貼り付け、
 公開設定にしてそのURLをjavascript側からPOSTで叩かせるだけです)
 
 exportCsv.js   クライアント側(javascript)
 exportCsv.gs   サーバサイド側(google apps script)
 
