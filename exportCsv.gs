/** 
 * @fileOverview CSVエクスポート用リダイレクト処理<br>
 * javascript側からPOSTで送られたcsv文字列とファイル名に従って、<br>
 * レスポンスオブジェクト作成(download file MimeType CSV)返却します<br>
 * → ブラウザ側に、ファイルダウンロードさせます。
 * 
 * @author ms32
 * @version 1.0.0
 */

/**
 * post handler
 * javascript側からPOSTされたcsv文字列を、mimetype CSVとして
 * ファイルダウンロードさせる
 * @param {e}  postパラメータ<br>
 * e.parameter.fileName 出力するファイル名指定<br>
 * e.parameter.csvBUffer 出力するcsv文字列<br>
 * @return {output} レスポンスオブジェクト
 */
function doPost(e){
	'use strict'; 
    var output = ContentService.createTextOutput();
    
    Logger.log('file name : ' + e.parameter.fileName);
    Logger.log('csvBuffer : ' + e.parameter.csvBuffer);
  
    output.setMimeType(ContentService.MimeType.CSV);
    output.setContent(e.parameter.csvBuffer);
    output.downloadAsFile(e.parameter.fileName);
    
    return output;  
}
