exportCsv
=========

jqGridからCSVをエクスポートするためのjavascript & google apps script処理セットです。<br>
CSVをエクスポートする際、ローカルのjavascriptだけでファイル出力するのは困難なので、<br>
サーバにPOSTする必要がありますが、そのサーバ側の処理をgoogle apps scriptで作成しています。<br>
<br>
気軽にCSVファイルを出力したい際に、google apps scriptなら無料でサクっと用意できるので便利かなと。<br>
自分のwebページにCSV出力を付けたいが、レンタルサーバだったりで勝手にサーバサイドプログラムを置けない<br>
事情があることも多いと思いますが、そういった際に便利です。<br>
(サーバサイドは、google apps scriptの単独スクリプトプロジェクトを作り、exportCsv.gsを貼り付け、<br>
 公開設定にしてそのURLをjavascript側からPOSTで叩かせるだけです)<br>
<br>
	exportCsv.js   クライアント側(javascript)<br>
	exportCsv.gs   サーバサイド側(google apps script)<br>
<br> 
