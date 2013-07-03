/**
 * @fileOverview jqGrid用CSVエクスポート<br>
 * @author ms32
 * @version 1.0.0
 */


/**
 * jqGridから呼び出され、CSVエクスポートを実行する(対象サーバにPOSTする)<br>
 * 指定したjqGridの各セルの内容をCSV文字列化し、<br>
 * リダイレクトするサーバにPOSTします。<br>
 * 
 * @param {String} jqGridName	対象のjqGrid
 * @param {String} postUrl		POST対象URL
 * @param {String} exportFileName 出力CSVファイル名
 * @param {String} delimiter CSV区切り文字(',' ならカンマ区切り。   '\t'ならタブ区切り)
 * 
 * sample arg
 * 
 * jqGridName
 *     '#jqGridList'
 * postUrl
 *     'https://script.google.com/macros/s/AKfycbynmMbo-iYuBSCjoUzKxmZkRYYkM3mv8IFSL5XORzIY7-P_l8U/exec';
 */
var exportCsv = function(jqGridName, postUrl, exportFileName, delimiter){
	'use strict';
	
	/*--- private -----------------------------------------------------------*/
	
	/**
	 * 指定文字列をCSV出力できる形に整形(HTMLタグ除去など)
	 * @param {String} argStr	整形対象の文字列
	 * @returns {String} result 整形後の文字列
	 */
	var strHtmlTagClear = function (argStr) {
		var result = '';
		var delete01 = new RegExp(/\n/g);
		var delete02 = argStr.replace(delete01, '');
		var delete03 = new RegExp(/>(.*?)</g);
		var delete04 = delete02.replace(delete03, '>$1<');
		var rgexp = new RegExp(/<("[^"]*"|'[^']*'|[^'">])*>/g);

		result = delete04.replace(rgexp, '');
		return result;
	};
	
	/*--- public ------------------------------------------------------------*/
	return {
		/**
		 * エクスポート実行
		 */
		run: function () {
			var i = 0, j = 0;
			var tmpStr = '', colProp = '', colName = '', value = '', html = '';
			var colNames = [];
			var allDataIdArray = jQuery(jqGridName).getDataIDs();
			var data = jQuery(jqGridName).getRowData(allDataIdArray[0]);
	
			// 先頭行を走査して、列名を収集する
			for (colName in data) {
				colNames[i++] = colName;
				colProp = jQuery(jqGridName).getColProp(colName);
				html = html + colProp.label + delimiter;	// 指定区切り文字で区切る
			}
			html = html + '\n';		// 行末改行
			
			// データ行を走査して各セル値をCSV要素として文字列連結する
			for ( i = 0; i < allDataIdArray.length; i++) {
				data = jQuery(jqGridName).getRowData(allDataIdArray[i]);
				for ( j = 0; j < colNames.length; j++) {
					colName = colNames[j];
					tmpStr = data[colName];
					value = strHtmlTagClear(tmpStr);
					html = html + value + delimiter;		// 指定区切り文字で区切る
				}
				html = html + '\n';		// 行末改行
			}
			html = html + '\n';
			
			// postオブジェクト作成
			document.formstyle.csvBuffer.value = html;
			document.formstyle.method = 'POST';
			document.formstyle.action = postUrl;
			document.formstyle.fileName.value = exportFileName;
			document.formstyle.target = '_blank';
			document.formstyle.submit();
		},
		
		/**
		 * メンバのログ出力
		 */
		log: function (){
			console.log('jqGridName : ' + jqGridName);
			console.log('postUrl : ' + postUrl);
			console.log('exportFileName : ' + exportFileName);
			console.log('delimiter : ' + delimiter);
		}
	
		
	};
};


