var strSeperator="-";
//var MSG_KEY = new Array();
/**
 * I18n �곸슜愿���
 */
function getLabel(inKey){
    var clsCd=MSG_KEY[inKey];
    return clsCd;
}
function getLabel2(inKey, objArr){
    var clsCd=MSG_KEY[inKey];
    for(var i=0; i<objArr.length; i++){
        clsCd=clsCd.replace("@", objArr[i]);
    }
    return clsCd;
}
/**
 * To Upper Case
 */
function strToUpper(obj){
    obj.value=obj.value.toUpperCase();
    // TestArea�� 寃쎌슦 Tab�� Space濡� 移섑솚�쒕떎.
    if ("textarea" == obj.type) {
    	obj.value=obj.value.replaceAll("\t"," ");
    }
}
/**
 * 怨듯넻 �앹뾽李� GET�쇰줈 �몄텧. 湲곕낯 �ㅽ��쇱씠 吏��뺣릺�댁엳��
 * @param : url     - �몄텧�� �앹뾽 二쇱냼
 * @param : str     - �꾩텧 �앹뾽�� ID
 * @param : inWidth - �앹뾽 �볦씠
 * @param : inHeight- �앹뾽 �믪씠
 * @return Open Window object
 */
function popGET(url, str, inWidth, inHeight)
{
    var height=screen.height;
    var width=screen.width;
    var leftpos=width/2 - inWidth/2;
    var toppos=height/2 - inHeight/2;
    if(leftpos<0) leftpos=0;
    if(toppos<0) toppos=0;
    if (url.indexOf('RPT_RD') >= 0) {
    	str=str + getTimeStamp();
    }
    //var popName = window.open('./blank.screen', str, "status=no,  width="+inWidth+", height="+inHeight+", resizable=no, scrollbars=no, left="+leftpos+", top="+toppos);
    /* 
    var popName=window.open('./blank.screen', str, "status=yes,  width="+inWidth+", height="+inHeight+", resizable=no, scrollbars=no, left="+leftpos+", top="+toppos);
    popName.location.href=url;
    */
    var popName=window.open(url, str, "status=yes,  width="+inWidth+", height="+inHeight+", resizable=no, scrollbars=no, left="+leftpos+", top="+toppos);
    popName.focus();
    return popName;
}
/**
 * 怨듯넻 �앹뾽李� GET�쇰줈 �몄텧. �ㅽ��쇱쓣 吏��뺥븿.
 * @param : url     - �몄텧�� �앹뾽 二쇱냼
 * @param : str     - �꾩텧 �앹뾽�� ID
 * @param : inWidth - �앹뾽 �볦씠
 * @param : inHeight- �앹뾽 �믪씠
 * @param : inStyle - �앹뾽�� �ㅽ���
 * @return Open Window object
 */
function popGET(url, str, inWidth, inHeight, inStyle)
{
    var height=screen.height;
    var width=screen.width;
    var leftpos=width/2 - inWidth/2;
    var toppos=height/2 - inHeight/2;
    if(leftpos<0) leftpos=0;
    if(toppos<0) toppos=0;
    if (url.indexOf('RPT_RD') >= 0) {
    	str=str + getTimeStamp();
    }
    /*
    var popName=window.open('./blank.screen', str, "status=yes,  width="+inWidth+", height="+inHeight+","+inStyle+",left="+leftpos+", top="+toppos);
    popName.location.href=url;
    */
    var popName=window.open(url, str, "status=yes,  width="+inWidth+", height="+inHeight+","+inStyle+",left="+leftpos+", top="+toppos);
    popName.focus();
    return popName;
}
/**
 * 怨듯넻 �앹뾽李� POST�쇰줈 �몄텧. parameter濡� 吏��뺣맂 ��ぉ�� 蹂� 硫붿냼�� �몄텧�� �깅줉�� �섏뼱�쇳븿. 湲곕낯 �ㅽ��쇱씠 吏��뺣릺�댁엳��.
 * @param : inForm  - �몄텧�� �ъ슜�� form instance
 * @param : url     - �몄텧�� �앹뾽 二쇱냼
 * @param : str     - �꾩텧 �앹뾽�� ID
 * @param : inWidth - �앹뾽 �볦씠
 * @param : inHeight- �앹뾽 �믪씠
 * @return Open Window object
 */
function popPOST(inForm, url, str, inWidth, inHeight)
{
    var height=screen.height;
    var width=screen.width;
    var leftpos=width/2 - inWidth/2;
    var toppos=height/2 - inHeight/2;
    if(leftpos<0) leftpos=0;
    if(toppos<0) toppos=0;
    if (url.indexOf('RPT_RD') >= 0) {
    	str=str + getTimeStamp();
    }
    var orgAction=inForm.action;
    /*
    var popName=window.open('./blank.screen', str, "status=no,  width="+inWidth+", height="+inHeight+", resizable=no, scrollbars=no, left="+leftpos+", top="+toppos);
    inForm.method='POST';
    inForm.action=url;
    */
    var popName=window.open(url, str, "status=no,  width="+inWidth+", height="+inHeight+", resizable=no, scrollbars=no, left="+leftpos+", top="+toppos);
    inForm.method='POST';
    inForm.action=url;
    inForm.target=str;
    inForm.submit();
    inForm.action=orgAction;
    inForm.target='_self';
    return popName;
}
/**
 * 怨듯넻 �앹뾽李� POST�쇰줈 �몄텧. parameter濡� 吏��뺣맂 ��ぉ�� 蹂� 硫붿냼�� �몄텧�� �깅줉�� �섏뼱�쇳븿. �ㅽ��쇱쓣 吏��뺥븿.
 * @param : inForm  - �몄텧�� �ъ슜�� form instance
 * @param : url     - �몄텧�� �앹뾽 二쇱냼
 * @param : str     - �꾩텧 �앹뾽�� ID
 * @param : inWidth - �앹뾽 �볦씠
 * @param : inHeight- �앹뾽 �믪씠
 * @param : inStyle - �앹뾽�� �ㅽ���
 * @return Open Window object
 */
function popPOST(inForm, url, str, inWidth, inHeight, inStyle)
{
    var height=screen.height - 80;
    var width=screen.width;
    var leftpos=width/2 - inWidth/2;
    var toppos=height/2 - inHeight/2;
    if(leftpos<0) leftpos=0;
    if(toppos<0) toppos=0;
    leftpos=25;
    toppos=25;
    height -= 50;
    width -= 50;
    if (url.indexOf('RPT_RD') >= 0) {
    	str=str + getTimeStamp();
    }
    var orgAction=inForm.action;
//	var popName = window.open('./blank.screen', str, "status=no,  width="+inWidth+", height="+inHeight+","+inStyle+",left="+leftpos+", top="+toppos);
    /*
    var popName=window.open('./blank.screen', str, "resizable=yes, status=no,  width="+width+", height="+height+","+inStyle+",left="+leftpos+", top="+toppos);
    inForm.method='POST';
    inForm.action=url;
    */
    var popName=window.open(url, str, "resizable=yes, status=no,  width="+width+", height="+height+","+inStyle+",left="+leftpos+", top="+toppos);
    inForm.method='POST';
    inForm.action=url;
    inForm.target=str;
    inForm.submit();
    inForm.action=orgAction;
    inForm.target='_self';
    return popName;
}
/**
 * Ajax瑜� �ъ슜�� 泥섎━�� Return Value瑜� 泥섎━�섍린 �꾪븳 硫붿냼�쒖엫
 * @param regVal XML 硫붿떆吏�
 */
function getAjaxMsgXML(reqVal){
    var rtnArr;
    var doc;
    try{
         rtnArr=new Array(2);
         var root;
        // Mozilla and Netscape browsers
        if (document.implementation.createDocument) {
        	 var xmlDoc = ComGetXmlDoc(reqVal.responseText);
             if (xmlDoc == null) return;
             var xmlRoot = xmlDoc.documentElement;
             root=xmlRoot;
             var node = root.childNodes;
             var iNode = 0;
             for (i=0; i < node.length; i++) {
            	 if(node[i].attributes != null && node[i].textContent != ""){
            		 rtnArr[iNode++]=node[i].textContent;
            	 }
            }
        // MSIE
        } else if (window.ActiveXObject) {
            doc=new ActiveXObject("Microsoft.XMLDOM");
            doc.async="false";
            doc.loadXML(reqVal.responseText);
            root=doc.getElementsByTagName('ajaxRtn').item(0);
            //alert(reqVal.responseText);
            for (var iNode = 0; iNode < root.childNodes.length; iNode++) {
                var node = root.childNodes.item(iNode);

                for (i = 0; i < node.childNodes.length; i++) {
                   var sibling = node.childNodes.item(i);
                   rtnArr[iNode] = sibling.data;
                }
             }
        }
        
    }catch (err) {
    	if(!!err.description) {
    		alert("Error is : "  + err.description + " <br>Error number is " + err.number);
    	}
    	else {
    		console("Session Check");
    	}
    }
    return rtnArr;
}
/**
 * Document�� Object瑜� return��
 */
function getObj(objName){
    return document.getElementById(objName);
}
/**
 * �낅젰諛쏆� 臾몄옄�댁뿉 �대떦�섎뒗 議곌굔�ㅼ쓣 鍮꾧탳�섏뿬 臾몄옄�댁쓣 蹂��섑븿
 *
 * 臾몄옄��.replaceAll('>', '&alt;');  => 臾몄옄�댁뿉 �ы븿�� '>'瑜� ' '&alt;'濡쒕�寃�
 *
 * @param searchStr 李얠쓣 臾몄옄
 * @param replaceStr 蹂�寃쏀븷 臾몄옄
 */
String.prototype.replaceAll=function( searchStr, replaceStr ){
    var temp=this;
    while( temp.indexOf( searchStr ) != -1 ){
        temp=temp.replace( searchStr, replaceStr );
    }
    return temp;
}
/**
 * �꾩옱 Window�� Center�� �꾩튂瑜� 李얠쓣 �� �ъ슜�쒕떎.
 */
function getCenterPosition(){
    var winCenter=new Array(2);
    //Explorer 6 Strict紐⑤뱶
    if(document.documentElement&&document.documentElement.clientHeight){
//		x = (screen.Width-document.documentElement.clientWidth)/2;
//		y = (screen.Height-document.documentElement.clientHeight)/2;
//        x = (coordinates.x-document.body.scrollLeft+window.screenLeft)/2;
//        y = (coordinates.y-document.body.scrollTop+window.screenTop)/2;
        winCenter[0]=document.body.clientWidth/2;
        winCenter[1]=document.body.clientHeight/2;
    //IE6�댄븯
    }else if(document.body){
        winCenter[0]=document.body.clientWidth/2;
        winCenter[1]=document.body.clientHeight/2;
    }
    return winCenter;
}
function doShowProcess(){
    disFullProcess('WORKING', document);
}
function disFullProcess(objName, curDoc){
    var tmpName=objName+'_IMG';
    var dispObj=curDoc.getElementById(tmpName);
    /*
    dispObj.style.posLeft=3;
    dispObj.style.posTop=0;
    dispObj.style.posWidth += 5;
    */
    if (dispObj != null)
    	dispObj.style.display='block';
}
/**
 * �꾨줈�몄뒪諛� 3珥� �쒖떆
 * @param objName �쒖떆�� Progress Bar ID
 * @param curDoc Process Bar媛� �좎뼵�섏뼱 �덈뒗 �대떦 Document�� Instance
 */
function showCompleteProcess(){
	 var objName='COMPLETE';
	 var curDoc=document;
	 var tmpName=objName+'_IMG';
	 var dispObj=curDoc.getElementById(tmpName);
	 dispObj.style.display='block';
     setTimeout(function(){
    	   hideProcess(objName, curDoc);
    	   
    	   if(saveCloseBtnYn == "Y"){
    	         window.close();
    	   }
    	}, 1000);
}
/**
 * �꾨줈�몄뒪諛� �쒖떆
 * @param objName �쒖떆�� Progress Bar ID
 * @param curDoc Process Bar媛� �좎뼵�섏뼱 �덈뒗 �대떦 Document�� Instance
 */
function showProcess(objName, curDoc){
    var tmpName=objName+'_IMG';
    var dispObj=curDoc.getElementById(tmpName);
    var barPosition=getCenterPosition();
    dispObj.style.posLeft=parseInt(barPosition[0])-180;
    dispObj.style.posTop=parseInt(barPosition[1])-180;
    dispObj.style.display='block';
}
function doHideProcess(){
    hideProcess('WORKING', document);
}
/**
 * �꾨줈�몄뒪諛� �④린湲�
 * @param objName �쒖떆�� Progress Bar ID
 * @param curDoc Process Bar媛� �좎뼵�섏뼱 �덈뒗 �대떦 Document�� Instance
 */
function hideProcess(objName, curDoc){
    var tmpName=objName+'_IMG';
    var dispObj=curDoc.getElementById(tmpName);
    if(dispObj!=null&&typeof(dispObj)!='undefined'){
        dispObj.style.display='none';
    }
}
/**
 *Input type=text�� �낅젰媛믪쓽 湲몄씠瑜� 鍮꾧탳�쒕떎.
 *@param docObj 泥댄겕�� document Instance
 *@param objStr 泥댄겕�� ��ぉ�ㅼ쓽 String 援щЦ. ��ぉ�� 援щ텇�� Semicolon(;)�쇰줈
 *       ��) kck;kdke;
 *@return Array瑜� 由ы꽩��. Array[0]: Maxlength瑜� 珥덇낵�� ��ぉ�� name.  ��ぉ�� 援щ텇�� Semicolon(;)�쇰줈
 *        Array[1]: �낅젰媛믪씠 �녿뒗 ��ぉ�� name.  ��ぉ�� 援щ텇�� Semicolon(;)�쇰줈
 *        Array[2]: Maxlength蹂대떎 湲몄씠媛� 湲� 媛믪씠 �ㅼ뼱媛� ��ぉ��. ��ぉ�� 援щ텇�� Semicolon(;)�쇰줈
 *        Array[3]: 泥섎━以� �ㅻ쪟�� ��ぉ��. ��ぉ�� 援щ텇�� Semicolon(;)�쇰줈
 **/
function checkLen(docObj, objStr){
     var objArr=objStr.split(';');
     var totLen=objArr.length-1;
     var rtnObjs=new Array(2);
     var overObj='';    //MaxLength瑜� 珥덇낵�섎뒗 媛앹껜�대쫫
     var zeroObj='';    //�낅젰媛믪씠 �녿뒗 媛앹껜�대쫫
     var errorObj='';    //寃�利앹떎�⑦븳 媛앹껜�대쫫
     for(var i=0; i< totLen; i++){
         var tmpObj=docObj.getElementsByName(objArr[i])
         if(tmpObj.length>0){
             for(var j=0; j < tmpObj.length; j++){
                 if(typeof(tmpObj[j])!='undefined'){
                     //�낅젰媛믪씠 �녿뒗寃쎌슦
                     if(tmpObj[j].value.length==0){
                         zeroObj+= tmpObj[j].name+';';
                     }else if(tmpObj[j].value.length>tmpObj[j].maxLength){
                         overObj+= tmpObj[j].name+';';
                     }
                 }
             }
        }else{
             errorObj+= objArr[i]+';';
        }
     }
     rtnObjs[0]=zeroObj;
     rtnObjs[1]=overObj;
     rtnObjs[2]=errorObj;
     return rtnObjs;
}
function getShowErrMsg(errObj){
    if(typeof(errObj.title)!='undefined'){
        return 'Error! At'+errObj.title+'. Please check your input value!', 'Error!Please check your input value';
    }else{
        return 'Error!Please check your input value';
    }
}
/**
 * 二쇱뼱吏� �뚯씪紐�(URL)�� �뱀씤 諛쏆� �뺤떇�� �뚯씪�몄�瑜� �뺤씤�� �� �ъ슜��
 * @param curUrl �뺤씤�댁빞�� �뚯씪紐�(URL)
 * @param apprDocExt �낅줈�� 媛��ν븳 �뚯씪 �뺤옣�� �뺤떇
 * @return true: �뱀씤�� �뺤떇�� �뺤옣�먯씤 寃쎌슦, false: �뱀씤 諛쏆� �딆� �뺤옣�먯씤 寃쎌슦
 */
function checkFileExt(curUrl, apprDocExt){
    var isOk=false;
    if(curUrl!=''){
        var curExt='';
        for(var i=curUrl.length-1; i >0; i-- ){
            if(curUrl.charAt(i)=='.'){
                curExt=curUrl.substring(i+1);
                curExt=curExt.toLowerCase();
                break;
            }
        }
        var tmpExt=apprDocExt.split('.');
        for(var i=0; i<tmpExt.length; i++){
            if(tmpExt[i]==curExt){
                isOk=true;
                break;
            }
        }
    }else{
        isOk=true;
    }
    return isOk;
}
function getFileNameLength(curUrl){
    var fileLen=0;
    if(curUrl!=''){
        var dirStr='/';
        if(curUrl.indexOf('\\')!=-1){
            dirStr='\\';
        }
        for(var i=curUrl.length-1; i >0; i-- ){
            if(curUrl.charAt(i)==dirStr){
                break;
            }
            fileLen++;
        }
    }
    return fileLen;
}
/**
 * 臾몄옄濡쒕맂 湲덉븸 �щ㎎�섍린
 * @author Kang,Jung-Gu
 */
function doMoneyFmt(orgStrVal){
    orgStrVal+= '';
    var isMin=false;
    var idxLen=orgStrVal.substring(0, 1);
    if(idxLen=='-'){
        orgStrVal=orgStrVal.substring(1);
        isMin=true;
    }
    var len=0;
    var inStrVal=orgStrVal.replace(/,/g, '');
    var dotIdx=inStrVal.indexOf('.');
    var dotStr='';
    if(dotIdx>0){
        dotStr=inStrVal.substr(dotIdx);
        inStrVal=inStrVal.substring(0, dotIdx);
    }
    len=inStrVal.length;
    var str1='';
    if(len>3){
        var toLen=len-i-3;
        for(var i=0; len-i-3 > 0; i+=3){
            var tmpVal=inStrVal.substring(len-3-i, len-i);
            str1=','+tmpVal+str1;
        }
        str1=inStrVal.substring(0, len-i)+str1;
        str1=str1+dotStr;
    }else{
        str1=orgStrVal;
    }
    if(idxLen=='-'){
        str1=idxLen+str1;
    }
    return str1;
}
function rmMoneyFmt(formattedVal){
	formattedVal += "";
    if(formattedVal==''){
        return '0';
    }else{
        return formattedVal.replace(/,/g, '');
    }
}
//-----------------------------------�낅젰媛� �뺤씤-----------------------------------
/**
 * <select>媛� �좏깮�섏뿀�붿�瑜� �뺤씤�� �� �ъ슜�섎뒗 �⑥닔��.
 * ��)   checkSelectVal('', '�좎옄');
 *@param inStr �뺤씤�� Value
 *@msgStr �ㅻ쪟�� �쒖떆�� ��ぉ紐�
 *@return O:�깃났, S: �좏깮�� ��ぉ�� �놁쓬
 **/
function checkSelectVal(inStr, msgStr){
    var inStr=inStr.replaceAll(' ', '');
    if(inStr.length==0){       //理쒖냼媛� 鍮꾧탳
        alert(' \"'+msgStr+'\" '+CM_MSG2);
        return 'S';
    }else{
        return 'O';
    }
}
function getStringLength (str){
 var retCode=0;
 var strLength=0;
 for (i=0; i < str.length; i++)
 {
  var code=str.charCodeAt(i)
  var ch=str.substr(i,1).toUpperCase()
  code=parseInt(code)
  if ((ch < "0" || ch > "9") && (ch < "A" || ch > "Z") && ((code > 255) || (code < 0)))
   strLength=strLength + 2;
  else
   strLength=strLength + 1;
 }
 return strLength;
}
/** [�꾨㈃ �ъ젏寃�. Data Type/Validation/Message] - S.Y BAIK (2013.01.31)
 * �낅젰媛믪쓽 理쒖냼,理쒕� 媛� 諛� �뺤떇�� �뺤씤 �⑸땲��.
 * ��)   checkInputVal('2008-02', 7, 7, 'd', '�좎옄');
 *       checkInputVal('333.33.02', 1, 10, 'M', '怨꾩빟湲�');
 *       checkInputVal('333.33.02', 1, 10, 'N', '�몄븸');
 *@param inStr �뺤씤�� Value
 *@minLen 理쒖냼 湲몄씠.
 *@maxLen 理쒕� 湲몄씠. �묒떇�� �ы븿�� 寃쎌슦 �ы븿�� �묒떇�� �ы븿. 2008-09-11 -> 10
 *@inType �낅젰諛쏆� 媛믪쓽 ����. T: Text, D: yyyyMMdd �쇱옄, d: yyyyMM �쇱옄, N: Number, M: 湲덉븸
 *@msgStr �ㅻ쪟�� �쒖떆�� ��ぉ紐�
 *@return O:�깃났, S: 理쒖냼湲몄씠 誘몃떖, M: 理쒕�媛� 珥덇낵, T: �낅젰���� 遺덉씪移�(Number�몃뜲 臾몄옄媛� �ㅼ뼱媛� 寃쎌슦)
 **/
function checkInputVal(inStr, minLen, maxLen, inType, msgStr){
    var inLen=0;
    var isChar=true;
    //NUMBER & AMOUNT Minus�멸꼍�� 泥섎━
    inStr=trim(inStr+"");	//String 蹂���
    if(inType=='N'||inType=='M'){
        if(inStr!=''){
            inStr=rmMoneyFmt(inStr);
            var dotIdx=inStr.indexOf('.');
            if(dotIdx>0){
                inStr=inStr.substring(0, dotIdx);
            }
            inLen=inStr.length;
            if(inLen>1){
                if(inStr.charAt(0)=='-'){
                    inLen--;
                    inStr=inStr.substr(1);
                }
            }
            isChar=false; 
        }
    }
    else{
        inLen=getStringLength(inStr);        
    }
    if(inLen<minLen){ //理쒖냼媛� 鍮꾧탳    	
        //alert(CM_MSG1_1+msgStr+CM_MSG1_2+minLen+CM_MSG1_3);    	
    	var paramArr=new Array(1);
    	paramArr[0]=minLen;
    	alert(getLabel('FMS_COM_ALT007') + "\n - " + msgStr + getLabel2('FMS_COM_ALT077', paramArr));
        return 'S';
    }else if(inLen>maxLen){ //理쒕�媛� 鍮꾧탳
        var krAmt=maxLen/2;
        if(isChar){
            //alert(CM_MSG1_1+msgStr+CM_MSG1_4+maxLen+' Alphabet Characters or '+krAmt+' Korean Characters'+CM_MSG1_5);
        	//msgStr�� getlabel()�� �듯빐 �꾨떖�� Label紐� 
        	var paramArr=new Array(1);
        	paramArr[0]=maxLen;
        	alert(getLabel('FMS_COM_ALT007') + "\n - " + msgStr + getLabel2('FMS_COM_ALT030', paramArr));
        }else{
            //alert(CM_MSG1_1+msgStr+CM_MSG1_4+maxLen+CM_MSG1_5);
        	alert(getLabel('FMS_COM_ALT007') + "\n - " + msgStr);
        }
        return 'M';
    }
    else if(!checkInType(inStr, inType)){  //���낅퉬援�
        //alert(CM_MSG1_1+msgStr+CM_MSG1_6);
    	alert(getLabel('FMS_COM_ALT007') + "\n - " + msgStr);
        return 'T';
    }
    else{
        return 'O';
    }
}
function checkInType(inStr, inType){
    var checkResult=false;
    if(inType=='T'){    //Text
        checkResult=true;
    }else if(inType=='D'){  //�좎옄 yyyyMMdd
        if(inDateValid(inStr, 'MMddyyyy')){
            checkResult=true;
        }
    }else if(inType=='d'){  //�좎옄 yyyyMM
        if(inDateValid(inStr, 'yyyyMM')){
            checkResult=true;
        }
    }else if(inType=='N'){  //Number
        if(inNumValid(inStr)){
            checkResult=true;
        }
    }else if(inType=='M'){  //Money
        if(inNumValid(inStr)){
            checkResult=true;
        }
    }else if(inType=='DD'){  //�좎옄 yyyyMMdd
        if(inDateValid(inStr, 'MMddyyyy')){
            checkResult=true;
        }
    }
    return checkResult;
}
/**
 * �낅젰諛쏆� �뺣낫媛� Number留� �덈뒗吏� �뺤씤�쒕떎.
 */
function inNumValid(inStr){
    var tmpStr=inStr.replaceAll(',', '');
    var isDot=false;
    var isOk=true;
    var cmpStr='1234567890';
    var strLen=tmpStr.length;
    if(strLen<1){
        isOk=false;
    }
    else{
        for(var i=0; i < strLen; i++){
            var tmpVal=tmpStr.charAt(i);
            if(tmpVal=='.'){
                if(isDot){
                    isOk=false;
                    break;
                }
                else{
                    isDot=true;
                }
            }
            else{
                var strIdx=cmpStr.indexOf(tmpVal);
                if(strIdx==-1){
                    isOk=false;
                    break;
                }
            }
        }
    }
    return isOk;
}
/**
 * �낅젰諛쏆� �좎옄 �곗씠�곌� 留욌뒗吏� �뺤씤��
 **/
function inDateValid(inStr, dateTp){
    var tmpStr=inStr.replaceAll(strSeperator, '');
    var isOk=true;
    //臾몄옄�몄� �レ옄�몄� 鍮꾧탳
    if(inNumValid(tmpStr)){
        var tmpLen=tmpStr.length;
        if(dateTp=='yyyyMMdd'){
            if(tmpStr.substr(0, 1)=='0'){
                isOk=false;
            }else{
                var tmpDate=tmpStr.substr(4, 2);
                var intMonth=parseInt(tmpDate, 10);
                //�뷀솗��
                if(intMonth>0&&intMonth<13){
                    isOk=true;
                    //�쇳솗��
                    tmpDate=tmpStr.substr(6, 2);
                    var intDay=parseInt(tmpDate, 10);
                    if(intDay>0&&intDay<31){
                        isOk=true;
                        if(intMonth==2){
                            if(intDay>=30){
                                isOk=false;
                            }
                        }
                    }
                }
            }
        }else if(dateTp=='yyyyMM'){
            if(tmpStr.substr(0, 1)=='0'){
                isOk=false;
            }else{
                var tmpDate=tmpStr.substr(4, 2);
                var intMonth=parseInt(tmpDate, 10);
                //�뷀솗��
                if(intMonth>0&&intMonth<13){
                    isOk=true;
                }
            }
        }else if(dateTp=='MMddyyyy'){
        	// MM諛� dd 異붿텧 �섎せ�섏뼱�덉뼱�� �섏젙
        	/*
            var tmpDate = tmpStr.substr(2, 4);
            var intMonth= parseInt(0, 2);
            */
            var tmpDate = tmpStr.substr(2, 2);
            var intMonth= parseInt(tmpStr.substr(0, 2));
            
            //�뷀솗��
            if(intMonth>0&&intMonth<13){
                isOk=true;
                //�쇳솗��
                tmpDate=tmpStr.substr(2, 4);
                var intDay=parseInt(tmpDate, 10);
                if(intDay>0&&intDay<31){
                    isOk=true;
                    if(intMonth==2){
                        if(intDay>=30){
                            isOk=false;
                        }
                    }
                }
            }
        }else{
            isOk=false;
        }
    //臾몄옄媛� �ы븿�� 寃쎌슦
    }else{
        isOk=false;
    }
    return isOk;
}
/**
 * <select> Object�� �꾨룄 Options瑜� �뷀븯�� 硫붿냼�쒖엫. 湲곕낯 �꾩옱�댁뿉�� 2�꾩쓣 �뷀븯怨� �꾩껜 10�꾧퉴吏��� �꾨룄瑜� �ы븿��
 * Select Object瑜� 由ы꽩��.
 */
function getYearSelectList(yearSelectObj){
    mkYearSelect(yearSelectObj, 2, 10, true, '');
}
/**
 * <select> Object�� �꾨룄 Options瑜� �뷀븯�� 硫붿냼�쒖엫
 */
function mkYearSelect(yearSelectObj, addYear, loopCnt, isDecend, callYear){
    var curYear=todayYear();
    if(callYear.length==4){
        curYear=parseInt(callYear);
    }
    //�앹꽦��
    var fromYear=curYear+addYear;
    //�좎� 釉뚮씪�곗��곸쓽 �꾨룄瑜� �좏깮��
    var yearVals=yearSelectObj;
    if(isDecend){
        for(var i=0; i < loopCnt; i++){
            var tmpOpt=new Option(fromYear, fromYear);
            if(curYear==fromYear){
                tmpOpt.selected=true;
            }
            yearVals.add(tmpOpt);
            fromYear--;
        }
    }
}
//-----------------------------------------------------------------------
//                         Auto Search 愿��� Method
//-----------------------------------------------------------------------
var autoCurRow;
var autoCurCol;
var autoToCol;
var curEventSheet;
var autoCodeTp;
/**
 * Code議고쉶瑜� �쒖옉��
 * @param sheetObj �대깽�멸� �쇱뼱�� Sheet
 * @param row �대깽�멸� �쇱뼱�� row
 * @param col �대깽�멸� �쇱뼱�� col
 * @param codeTp 議고쉶�� �ъ슜�� 肄붾뱶����
 * @param codeStr �대떦 肄붾뱶媛�
 * @param curCellNm �꾩옱 Cell�� SaveName
 * @param toCellNm  �쒖떆�� Cell�� SaveName
 */
function doAutoSearch(sheetObj, row, col, codeTp, codeStr, curCellNm, toCellNm, param){
    //�좏깮�� Sheet瑜� Set��
    curEventSheet=sheetObj;
    autoCurRow=row;
    autoCurCol=col;
    autoCodeTp = codeTp;
    autoToCol=toCellNm;
    sheetObj.SetCellValue(row, curCellNm,codeStr.toUpperCase(),0);
    if(typeof(param) == "undefined"){
        param="";
    }
    //#3112 [IMPEX, STAR CLUSTER, BNX] #1968, 1600, 2657 �ы븿 �붿껌
ajaxSendPost(setRtnValToCell, 'reqVal', '&goWhere=aj&bcKey=searchCodeName&codeType='+codeTp+'&s_code='+escape(sheetObj.GetCellValue(row, curCellNm)) + param, './GateServlet.gsl');
}
/**
 * Code Return 媛믪쓣 Cell�� �대뒗��
 */
function setRtnValToCell(rtnMsg){
    var doc=getAjaxMsgXML(rtnMsg);
    if(doc[0]=='OK'){
        if(typeof(doc[1])=='undefined'){
            //curEventSheet.SelectCell(autoCurRow, autoCurCol);
            curEventSheet.SetCellValue(autoCurRow, autoCurCol,'',0);
            curEventSheet.SetCellValue(autoCurRow, autoToCol,'',0);
            alert(CODE_NOT_FND);
        }else{
            var rtnArr=doc[1].split('@@;');
            var masterVals=rtnArr[0].split('@@^');
            curEventSheet.SetCellValue(autoCurRow, autoToCol, masterVals[3], 0);
            //(2017/06/08 1李�)  由대━�� �뚯뒪�� �댁뿭 - 誘몄쭊 �ы빆 
            if(autoCodeTp == "freight"){
            	var objPfx = autoToCol.replaceAll("fr_frt_cd_nm", "");
            	curEventSheet.SetCellValue(autoCurRow, objPfx + "fr_vat_rt",masterVals[24],0);	//Tax Rate
            	//#1773 [PATENT] Freight Default Unit Option
            	if (masterVals[30]!= ""&& masterVals[30]!= "null"){
            	curEventSheet.SetCellValue(autoCurRow, objPfx + "fr_aply_ut_cd",masterVals[30]);	//Unit
            	}
            	//#1774 [Split - 1] [PATENT] Freight Default Unit Option
               	curEventSheet.SetCellValue(autoCurRow, objPfx + "fr_ru",masterVals[33]);	//sell_buy_rate
            	//#1824 [Split - 1] [PATENT]Freight Local Name �곸슜(AR, AP)
            	if (objPfx!="dc_"){
            		curEventSheet.SetCellValue(autoCurRow, objPfx + "fr_frt_cd_nm",masterVals[16]);	//local name
            	}
            	
            }else if(autoCodeTp == "trdpcode"){
            	var objPfx = autoToCol.replaceAll("fr_trdp_nm", "");
            	if (objPfx !=	"dc_"){
            		curEventSheet.SetCellValue(autoCurRow, objPfx + "fr_trdp_nm",masterVals[16]);	//local name
            	}
            }
        }
    }else{
        alert(AJ_FND_ERR);
    }
}
//--------------------------------------------
var units=new Array("ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE");
var teens=new Array("TEN","ELEVEN","TWELVE","THIRTEEN","FOURTEEN","FIFTEEN","SIXTEEN","SEVENTEEN","EIGHTEEN ","NINETEEN");
var tens=new Array("TWENTY","THIRTY","FORTY","FIFTY","SIXTY","SEVENTY","EIGHTY","NINETY");
var illions=new Array('M','B','TR','QUADR','QUINT','SEXT','SEPT','OCT','NON','DEC','UNDEC','DUODEC','TREDEC','QUATTUORDEC','QUINDEC','SEXDEC','SEPTENDEC','OCTODEC','NOVEMDEC','VIGINT','UNVIGINT','DUOVIGINT','TREVIGINT','QUATTUORVIGINT','QUINVIGINT','SEXVIGINT','SEPTENVIGINT','OCTOVIGINT','NOVEMVIGINT','TRIGINT','UNTRIGINT','DUOTRIGINT','TRETRIGINT','QUATTUORTRIGINT','QUINTRIGINT','SEXTRIGINT','SEPTENTRIGINT','OCTOTRIGINT','NOVEMTRIGINT','QUADRAGINT','UNQUADRAGINT','DUOQUADRAGINT','TREQUADRAGINT','QUATTUORQUADRAGINT','QUINQUADRAGINT','SEXQUADRAGINT','SEPTENQUADRAGINT','OCTOQUADRAGINT','NOVEMQUADRAGINT','QUINQUAGINT','UNQUINQUAGINT','DUOQUINQUAGINT','TREQUINQUAGINT','QUATTUORQUINQUAGINT','QUINQUINQUAGINT','SEXQUINQUAGINT','SEPTENQUINQUAGINT','OCTOQUINQUAGINT','NOVEMQUINQUAGINT','SEXAGINT','UNSEXAGINT','DUOSEXAGINT','TRESEXAGINT','QUATTUORSEXAGINT','QUINSEXAGINT','SEXSEXAGINT','SEPTSEXAGINT','OCTOSEXAGINT','NOVEMSEXAGINT','SEPTUAGINT','UNSEPTUAGINT','DUOSEPTUAGINT','TRESEPTUAGINT','QUATTUORSEPTUAGINT','QUINSEPTUAGINT','SEXSEPTUAGINT','SEPTSEPTUAGINT','OCTOSEPTUAGINT','NOVEMSEPTUAGINT','OCTOGINT','UNOCTOGINT','DUOOCTOGINT','TREOCTOGINT','QUATTUOROCTOGINT','QUINOCTOGINT','SEXOCTOGINT','SEPTOCTOGINT','OCTOOCTOGINT','NOVEMOCTOGINT','NONAGINT','UNNONAGINT','DUONONAGINT','TRENONAGINT','DUATTUORNONAGINT','QUINNONAGINT','SEXNONAGINT','SEPTNONAGINT','OCTONONAGINT','NOVEMNONAGINT','CENT','CENUNT','DUOCENT','CENTRET');
/**
 * �レ옄瑜� �곷Ц 臾몄옄濡�
 */
function changeNumTostr(s){
  if (s.length>315) {
//    alert("Your number is "+s.length+" digits long.\nThe maximum length is 303  digits.");
    alert(BIZ_MSG1_1+s.length+BIZ_MSG1_2);
    return false;
  }
  var r="", temp="";
  while(s.length%3>0)s="0"+s;
  var max=Math.ceil(s.length/3);
  for (var i=0; i<max; i++) {
    temp=toChgSmallNum(s.substr(i*3, 3));
    if (temp!="") {
      if (max-i==1 && r!="" && s.substr(i*3, 3)<100) r+=" AND ";
      else if (r!="") r+=", ";
      if (max-i==2) temp+=" THOUSAND";
      if (max-i>2) temp+=" "+illions[max-i-3]+"ILLION";
    }
    r+=temp;
  }
  if(s==0){
      r="zero";
  }
  r=r.charAt(0).toUpperCase()+r.substring(1,r.length);
  return r;
}
function toChgSmallNum(num, mag){
  var a=num.charAt(0);
  var b=num.charAt(1);
  var c=num.charAt(2);
  var s="";
  if (a!=0) {
    s+=units[a-1] + " HUNDRED";
    if (b==0 && c==0) return s;
    else s+=" and ";
  }
  if (b==0) {
    if (c==0) return "";
    return s+units[c-1];
  }
  if (b==1) {
    return s+teens[c];
  }
  if (b>1) {
    s+=tens[b-2];
    if (c>0) s+="-" + units[c-1];
    return s;
  }
}
/**
 * HTML�쒓렇(Object)�� onKeyPress �대깽�몄뿉�� �� �⑥닔瑜� �몄텧�좎닔 �덉쑝硫�, �ㅻ낫�쒕줈 �낅젰�섎뒗 媛믪쓣 �レ옄留뚯쑝濡� �쒖뼱�쒕떎. <br>
 * �덈� �ㅼ뼱 �ㅼ쓬怨� 媛숈씠 �ъ슜�쒕떎.<br>
 *     &lt;input type="text" name="txtAmt" <font color="red">onKeyPress="onlyNumberCheck()"</font>&gt; <br>
 * �몄옄濡� �ъ슜�섎뒗 sSubChar �몄옄�� �レ옄�댁쇅�� 遺�媛��곸쑝濡� �낅젰�좎닔 �덈뒗 臾몄옄瑜� �щ윭媛� �곌껐�섏뿬 �ㅼ젙�쒕떎.<br>
 * <font color="red">二쇱쓽!</font> style="ime-mode:disabled"�� 諛섎뱶�� �ㅼ젙�댁빞 湲곕뒫�� �뺥솗�� 泥섎━�쒕떎. <br>
 * <br><b>Example :</b>
 * <pre>
 *     &lt;input type="text" name="txtAmt" onKeyPress="onlyNumberCheck()"&gt;
 *     &lt;input type="text" name="txtAmt" onKeyPress="onlyNumberCheck('-')"&gt;
 *     &lt;input type="text" name="txtAmt" onKeyPress="onlyNumberCheck('-.,')"&gt;
 * </pre>
 * @param {string} sSubChar �좏깮,�レ옄�댁쇅�� 遺�媛� 湲���
 * @returns �놁쓬 <br>
 */


function onlyNumberCheck(sSubChar) {
    var keyValue=ComGetEvent("keycode") ? ComGetEvent("keycode") : event.which ? event.which : event.charCode;
    if((keyValue >= 48 && keyValue <= 57) || keyValue == 8 || keyValue == 9 || keyValue == 46) {
		//�レ옄
        event.returnValue=true;
    } else if(sSubChar != undefined && sSubChar != null && sSubChar.constructor==String && sSubChar.length > 0) {
    	//SubChar媛� �щ윭媛� �ㅼ젙�� 寃쎌슦 �щ윭媛� 湲��� 紐⑤몢 泥섎━�쒕떎.
    	for(var i=0; i<sSubChar.length; i++) {
     		if (keyValue == sSubChar.charCodeAt(i)) {
                event.returnValue=true;
                return;
    		}
    	}
        event.returnValue=false;
    } else {
        event.returnValue=false;
    }
}
/**
 * OnKeyPress�� TEXTAREA�� ���� MaxLength湲곕뒫
 */
function keyPress_maxLength(obj) {
    if (obj.value.length > obj.maxlength - 1) {
        event.returnValue=false;
    } else {
        event.returnValue=true;
    }
}
/**
 * OnKeyUp�� TEXTAREA�� ���� MaxLength湲곕뒫
 */
function keyUp_maxLength(obj) {
    if (obj.value.length > obj.maxlength) {
        obj.value=obj.value.substring(0, obj.maxlength);
    }
}
/**
 * OnKeyPress�� TEXTAREA�� ���� MaxLength湲곕뒫
 */
function keyPress_maxLength2(obj, len) {
    if (obj.value.length > len - 1) {
        event.returnValue=false;
    } else {
        event.returnValue=true;
    }
}
/**
 * OnKeyUp�� TEXTAREA�� ���� MaxLength湲곕뒫
 */
function keyUp_maxLength2(obj, len) {
    if (obj.value.length > len) {
        obj.value=obj.value.substring(0, len);
    }
}
/**
 * 11�먮━(10�먮━�� �섎쾭 11踰덉㎏�� CheckDigit(�レ옄)
 *    - Sample Value: RDMU2128271
 *    - Sample Value: OOLU7086955
 * Container Number Check
 */
/*
function cntrNumCheck(strCntrNo){
    var cntrLen=strCntrNo.length;
    if(cntrLen!=11){
        alert('This is wrong Container Number!\nPlease check the Contaienr Number!');
        return false;
    }else{
        //怨좉컼 �붿껌�쇰줈 Disable
        //return true;
        if(true){
            var orgCntrNo=strCntrNo.substring(0, 10);
            var digitNum=strCntrNo.substring(10);
            var addNumStr="A10*B12*C13*D14*E15*F16*G17*H18*I19*J20*K21*L23*M24*N25*O26*P27*Q28*R29*S30*T31*U32*V34*W35*X36*Y37*Z38";
            var alphaNumeric=new Array (10);
            for(var i=0; i <= 3; i++){
                var charVal=orgCntrNo.charAt(i);
                var charIdx=addNumStr.indexOf(charVal);
                alphaNumeric[i]=addNumStr.substring(charIdx+1, charIdx+3);
            }
            for(var i=4; i < 10; i++){
                alphaNumeric[i]=orgCntrNo.charAt(i);
            }
            var calcNum=0;
            for(var i=0; i < 10; i++){
                var strCheckNum=alphaNumeric[i] * Math.pow(2,i);
                calcNum=calcNum + strCheckNum;
            }
            if (calcNum){
                 var val1=calcNum / 11;
                 var val2=Math.floor(val1);
                 var tmpSum=val1 - val2;
                 var secuNum=Math.round(tmpSum*11);
                 if(secuNum!=digitNum){
                    alert('This is wrong Container Number!\nPlease check the Contaienr Number!');
                    return false;
                 }else{
                    return true;
                 }
            }else{
                alert('This is wrong Container Number!\nPlease check the Contaienr Number!');
                return false;
            }
        }
    }
}
*/
/*
 *  2011.12.28
 * �꾩쓽 �앷낵 媛숈� �댁슜�몃뜲 怨꾩궛�� modulo �곗궛�쇰줈 媛꾨떒�� �섑뻾��
 */
function cntrNumCheck(strCntrNo){
//	var alertMsgEn = 'Wrong Number!\nPlease check the Contaienr Number!';
    var alertMsgEn=BIZ_MSG2;
    var cntrLen=strCntrNo.length;
    if(cntrLen!=11){
        alert(alertMsgEn);
        return false;
    }else{
        var cntrNo=strCntrNo.substr(0,10);
        var chkDgt;
        var cntr;
        var i=0;
        var temp=0;
        var total=0;
        while(i < 10){
            cntr=cntrNo.substr(i,1);
            if(cntr.charCodeAt(0) >= "A".charCodeAt(0) && cntr.charCodeAt(0) <= "Z".charCodeAt(0)){
                temp=cntr.charCodeAt(0) - 55;
                if(cntr.charCodeAt(0) >= "B".charCodeAt(0) && cntr.charCodeAt(0) <= "K".charCodeAt(0)){
                    temp=temp + 1;
                }else if(cntr.charCodeAt(0) >= "L".charCodeAt(0) && cntr.charCodeAt(0) <= "U".charCodeAt(0)){
                    temp=temp + 2;
                }else if(cntr.charCodeAt(0) >= "V".charCodeAt(0) && cntr.charCodeAt(0) <= "Z".charCodeAt(0)){
                    temp=temp + 3;
                }
            }else{
                temp=cntr.charCodeAt(0) - 48;
            }
            total=total + Math.pow(2, i) * temp;
            i++;
        }
        total=total % 11;
        if(total >= 10){
            total=total - 10;
        }
        chkDgt=cntrNo + total;
        if(strCntrNo != chkDgt){
            alert(alertMsgEn);
            return false;
        }else{
            return true;
        }
    }
}
/**
 * 二쇱냼泥댄겕
 */
function checkAddr(obj, cntPerLn, perRow, msgTxt){
    var inAddrTxt=obj.value;
    var addrArr=(inAddrTxt.replace(/\r(?!\n)|\n(?!\r)/g, "\r\n")).split('\r\n'); //cross browser inAddrTxt.split('\r\n');
    var arrLen=addrArr.length;
    if(arrLen>perRow){
//		alert('Please input ['+msgTxt+'] in '+perRow+' rows!\nCurrent line count is '+arrLen);
        alert(BIZ_MSG3_1+msgTxt+BIZ_MSG3_1+perRow+BIZ_MSG3_1+arrLen);
    }else{
        var lineCnt=1;
        for(var i=0; i < arrLen; i++){
            if(cntPerLn<addrArr[i].length){
//				alert('Please input ['+msgTxt+'] in '+cntPerLn+' words per line!\nCheck line '+lineCnt+'. Current character count is '+addrArr[i].length);
                alert(BIZ_MSG4_1+msgTxt+BIZ_MSG4_2+cntPerLn+BIZ_MSG4_3+lineCnt+BIZ_MSG4_4+addrArr[i].length);
                break;
            }
        }
    }
}
/**
* Description �낅젰�� �ㅽ겕濡ㅼ떆 罹먮┃�� 移댁슫�곕� 泥댄겕
* @Object Textarea Object
* @len    �섎굹�� Line�� �낅젰�� �� �덈뒗 湲��먯쓽 ��
*/
function mkDescChk(obj, len, perMsg){
    if(obj.scrollWidth>0){
        mkDescChck(obj, len, 1000, perMsg);
    }
}
/**
* Description �낅젰�� �ㅽ겕濡ㅼ떆 罹먮┃�� 移댁슫�곕� 泥댄겕
* @Object Textarea Object
* @len    �섎굹�� Line�� �낅젰�� �� �덈뒗 湲��먯쓽 ��
*/
function mkChck(obj, len){
    if(obj.scrollWidth>0){
        mkDescChck(obj, len, 1000, 'Mark');
    }
}
/**
* Description �낅젰�� �ㅽ겕濡ㅼ떆 罹먮┃�� 移댁슫�곕� 泥댄겕
* @Object Textarea Object
* @len    �섎굹�� Line�� �낅젰�� �� �덈뒗 湲��먯쓽 ��
*/
function descChk(obj, len){
    if(obj.scrollWidth>0){
        mkDescChck(obj, len, 1000, 'Description');
    }
}
/**
 * Textarea�� Line蹂� 湲��먯닔�� Row�� �섎� 泥댄겕��
 * @Object Textarea Object
 * @cntPerLn �섎굹�� Line�� �낅젰�� �� �덈뒗 湲��먯쓽 ��
 * @perRow �낅젰諛쏆쓣 �� �덈뒗 Row�� ��
 * @msgTxt 議곌굔�� �꾨같�덉쓣 �� Alter Msg
 */
function mkDescChck(obj, cntPerLn, perRow, msgTxt){
    var inAddrTxt=obj.value;
    var splStr='\r\n';
    var addrArr= (inAddrTxt.replace(/\r(?!\n)|\n(?!\r)/g, "\r\n")).split(splStr); //cross browser - inAddrTxt.split(splStr);
    var arrLen=addrArr.length;
    var isOk=false;
    var rtnMsg='';
    if(arrLen>perRow){
        alert('Please input ['+msgTxt+'] in '+perRow+' rows!\nCurrent line count is '+arrLen);
    }else{
        var isOver=false;
        var lineCnt=1;
        for(var i=0; i < arrLen; i++){
            if(i>0){
                rtnMsg+=splStr;
            }
            if(cntPerLn<addrArr[i].length){
                rtnMsg+=addrArr[i].substring(0, cntPerLn);
                isOver=true;
            }else{
                rtnMsg+=addrArr[i];
            }
        }
        if(isOver){
            alert('Please input ['+msgTxt+'] in '+cntPerLn+' character per line!');
        }
    }
    obj.value=rtnMsg;
}
/**
 * 二쇱냼��ぉ�� �쇱씤�섏� �쇱씤蹂� Character count瑜� 泥댄겕��
 */
function checkTxtAreaLn(obj, cntPerLn, totRow, msgTxt){
    var inAddrTxt=obj.value;
    var addrArr=(inAddrTxt.replace(/\r(?!\n)|\n(?!\r)/g, "\r\n")).split('\r\n'); //cross browser -  inAddrTxt.split('\r\n');
    var arrLen=addrArr.length;
    var isOk=true;
    if(arrLen>totRow){
        //alert('Please input ['+msgTxt+'] in '+totRow+' rows!\nCurrent line count is '+arrLen);
    	//#47415 - BL Entry�붾㈃�� Trade Partner�� Address Line Limit Message 蹂�寃�
        //alert('Please input text in '+totRow+' rows!\nCurrent line count is '+arrLen);
        alert("The maximum number of lines allowed for trade partners' address field box is " + totRow + ".\nCurrent line count is " + arrLen + ".");
        isOk=false;
    }else{
        var lineCnt=1;
        for(var i=0; i < arrLen; i++){
            if(cntPerLn<addrArr[i].length){
                //alert('Please input ['+msgTxt+'] in '+cntPerLn+' words per line!\nCheck line '+lineCnt+'. Current character count is '+addrArr[i].length);
            	//#47415 - BL Entry�붾㈃�� Trade Partner�� Address Line Limit Message 蹂�寃�
            	//alert('Please input text in '+cntPerLn+' words per line!\nCheck line '+lineCnt+'. Current character count is '+addrArr[i].length);
                alert("The maximum number of words per line allowed for trade partners' address field box is " + cntPerLn + ".\nCheck line "+lineCnt+". Current character count is "+addrArr[i].length+".");
                isOk=false;
                break;
            }
            lineCnt++;
        }
        if(!isOk){
            //obj.scrollTop = obj.scrollHeight;
            //obj.focus();
        }
    }
    return isOk;
}
/**
 * Paging�� �ъ슜�섎뒗 硫붿냼�쒖엫
 */
function doDispPaging(msgStr, tbObj){
	if(msgStr == -1 ){
		msgStr = '';
	}
    if(msgStr!=''){
        msgStr=msgStr.replaceAll('&lt;', '<');
        msgStr=msgStr.replaceAll('&gt;', '>');
        msgStr=msgStr.replaceAll('&#39;', '"');
        msgStr=msgStr.replaceAll('&quot;', '\'');
        tbObj.innerHTML=msgStr;
    }else{
        tbObj.innerHTML='';
    }
}
/*
 * form hidden �앹꽦
 */
function createHidden(n,v) {
    var o=document.createElement("input");
    o.type="hidden";
    o.name=n;
    o.value=v;
    return o;
}
/*
 * 2011.10.14 Kim,Jin-Hyuk
 *  �붾㈃蹂� 踰꾪듉 沅뚰븳 �ㅼ젙
 * 踰꾪듉�� 理쒕� 9媛쒕줈 �쒗븳
 * �� �쒖감�곸쑝濡� Retrieve, New, Save, Delete, Print 5媛쒕� �좎���
 */
function roleBtnControl(document, attr1, attr2, attr3, attr4, attr5, attr6, attr7, attr8, attr9){
    var Retrieve=document.getElementById("Retrieve");
    var New=document.getElementById("New");
    var Save=document.getElementById("Save");
    var Delete=document.getElementById("Delete");
    var Print=document.getElementById("Print");
    var attr6=document.getElementById("attr6");
    var attr7=document.getElementById("attr7");
    var attr8=document.getElementById("attr8");
    var attr9=document.getElementById("attr9");
    if(Retrieve!=null){
        attr1=="Y" ? Retrieve.style.display="block" : Retrieve.style.display="none";
    }
    if(New!=null){
        attr2=="Y" ? New.style.display="block" : New.style.display="none";
    }
    if(Save!=null){
        attr3=="Y" ? Save.style.display="block" : Save.style.display="none";
    }
    if(Delete!=null){
        attr4=="Y" ? Delete.style.display="block" : Delete.style.display="none";
    }
    if(Print!=null){
        attr5=="Y" ? Print.style.display="block" : Print.style.display="none";
    }
    if(attr6!=null){
        attr6=="Y" ? attr6.style.display="block" : attr6.style.display="none";
    }
    if(attr7!=null){
        attr7=="Y" ? attr7.style.display="block" : attr7.style.display="none";
    }
    if(attr8!=null){
        attr8=="Y" ? attr8.style.display="block" : attr8.style.display="none";
    }
    if(attr9!=null){
        attr9=="Y" ? attr9.style.display="block" : attr9.style.display="none";
    }
}
//�붾㈃�� flag value 媛믪쓣 蹂�寃쏀븳��.
function flgChange(check) {
    var formObj=document.frm1;
    if(check.checked==true){
        check.value='Y';
    }else{
        check.value='N';
    }
}
//�몄옄媛� 臾몄옄�� 以� �レ옄留� 諛섑솚
function onlyNumberRtn(str){
    var rtnVal="";
    var curStr="";
    var numStr="0123456789";
    for(var i=0 ; i < str.length ; i++){
        curStr=str.substring(i, i+1);
        if(numStr.indexOf(curStr) != -1){
            rtnVal += curStr;
        }
    }
    return rtnVal;
}
/**
     * HTML�쒓렇(Object)�� onKeyPress �대깽�몄뿉�� �� �⑥닔瑜� �몄텧�좎닔 �덉쑝硫�, �ㅻ낫�쒕줈 �낅젰�섎뒗 媛믪쓣 �곷Ц��臾몄옄 �먮뒗 �곷Ц�뚮Ц�먮줈 �먮룞 蹂�寃� �쒖뼱�쒕떎. <br>
     * �덈� �ㅼ뼱 �ㅼ쓬怨� 媛숈씠 �ъ슜�쒕떎.<br>
     *     &lt;input type="text" name="txtName" <font color="red">style="ime-mode:disabled" onKeyPress="ComKeyOnlyAlphabet('upper')"</font>&gt; <br>
     * �몄옄濡� �ъ슜�섎뒗 sFlag �몄옄�� �ㅼ젙媛믪� �ㅼ쓬怨� 媛숇떎. <br>
     * sFlag = "upper"      : �곷Ц��臾몄옄留� �낅젰�좎닔 �덇퀬, ��臾몄옄濡� �먮룞 蹂��섎맂��. <br>
     * sFlag = "lower"      : �곷Ц�뚮Ц�먮쭔 �낅젰�좎닔 �덇퀬, �뚮Ц�먮줈 �먮룞 蹂��섎맂��. <br>
     * sFlag = "uppernum"   : �곷Ц��臾몄옄�� �レ옄留� �낅젰�좎닔 �덇퀬, ��臾몄옄濡� �먮룞 蹂��섎맂��. <br>
     * sFlag = "lowernum"   : �곷Ц�뚮Ц�먯� �レ옄留� �낅젰�좎닔 �덇퀬, �뚮Ц�먮줈 �먮룞 蹂��섎맂��. <br>
     * sFlag = "num"        : �곷Ц怨� �レ옄 �낅젰�좎닔 �덇퀬, �먮룞 蹂��섏뾾�� 洹몃�濡� �쒖떆�쒕떎. <br>
     * sFlag = �ㅼ젙�덊븳寃쎌슦 : �곷Ц留� �낅젰�좎닔 �덇퀬, �먮룞蹂��섏뾾�� 洹몃�濡� �쒖떆�쒕떎. <br>
     * <font color="red">二쇱쓽!</font> style="ime-mode:disabled"�� 諛섎뱶�� �ㅼ젙�댁빞 湲곕뒫�� �뺥솗�� 泥섎━�쒕떎. <br>
     * <br><b>Example :</b>
     * <pre>
     *     ComKeyOnlyAlphabet('lower');
     *     ComKeyOnlyAlphabet('uppernum',"32|64");    //�ㅽ럹�댁뒪�� @臾몄옄 �낅젰�� �낅젰媛���
     * </pre>
     * @param {string} sFlag �좏깮,�곷Ц紐⑤뱶, default=""
     * @param {string} KeyCodes �좏깮,�덉쇅  �ㅼ퐫��, default=""
     * @returns �놁쓬 <br>
     * @see #ComKeyOnlyNumber
     */
function ComKeyOnlyAlphabet(sFlag, KeyCodes)
{
    try {
        var keyValue = ComGetEvent("keycode");
        var keyValue2 = keyValue;
        var bCanNum  = false;
        var flag = false;

        if (sFlag==undefined || sFlag==null || sFlag.constructor!=String) sFlag="";
        sFlag = sFlag.toLowerCase();
        if (KeyCodes==undefined || KeyCodes==null) flag=false;
        else{
            var KeyArray = KeyCodes.split("|");
            for(var i =0;i<KeyArray.length;i++){
            	if(KeyArray[i] == keyValue) flag = true;
            }
        }
        
        if (sFlag.length >= 3){
            if (sFlag.substr(sFlag.length-3)=="num") bCanNum=true;
            if (sFlag.length > 5) sFlag = sFlag.substr(0,5);
        }
        if(keyValue >= 97 && keyValue <= 122){                  //챙�졙뮼ヂ�맡�억옙
            if (sFlag=="upper") keyValue2 = keyValue + 65 - 97;
        } else if(keyValue >= 65 && keyValue <= 90){            //챘흸��ヂ�맡�억옙
            if (sFlag=="lower") keyValue2 = keyValue + 97 - 65;
        } else if(bCanNum && keyValue >= 48 && keyValue <= 57) {//챙�짬챙탑占�
        } else if(flag) {									    //챙��챙�◈맡ヂ�맡�억옙.
        } else {
        	ComJsEventStop();
        	return false;
        }
        if (keyValue!=keyValue2){
        	event.keyCode = keyValue2;
        	event.which = keyValue2;
        	event.charCode = keyValue2;
        }
        
        return true;
    } catch(err) { ComFuncErrMsg(err.message); }
}
    /**
     * HTML�쒓렇(Object)�� onKeyPress �대깽�몄뿉�� �� �⑥닔瑜� �몄텧�좎닔 �덉쑝硫�, �ㅻ낫�쒕줈 �낅젰�섎뒗 媛믪쓣 �レ옄留뚯쑝濡� �쒖뼱�쒕떎. <br>
     * �덈� �ㅼ뼱 �ㅼ쓬怨� 媛숈씠 �ъ슜�쒕떎.<br>
     *     &lt;input type="text" name="txtAmt" <font color="red">onKeyPress="ComKeyOnlyNumber(this)"</font>&gt; <br>
     * �몄옄濡� �ъ슜�섎뒗 sSubChar �몄옄�� �レ옄�댁쇅�� 遺�媛��곸쑝濡� �낅젰�좎닔 �덈뒗 臾몄옄瑜� �щ윭媛� �곌껐�섏뿬 �ㅼ젙�쒕떎.<br>
     * <font color="red">二쇱쓽!</font> style="ime-mode:disabled"�� 諛섎뱶�� �ㅼ젙�댁빞 湲곕뒫�� �뺥솗�� 泥섎━�쒕떎. <br>
     * <br><b>Example :</b>
     * <pre>
     *     &lt;input type="text" name="txtAmt" onKeyPress="ComKeyOnlyNumber(this)"&gt;
     *     &lt;input type="text" name="txtAmt" onKeyPress="ComKeyOnlyNumber(this, "-")"&gt;
     *     &lt;input type="text" name="txtAmt" onKeyPress="ComKeyOnlyNumber(this, "-.,")"&gt;
     * </pre>
     * @param {object} obj      �꾩닔,���� HTML�쒓렇(Object)
     * @param {string} sSubChar �좏깮,�レ옄�댁쇅�� 遺�媛� 湲���
     * @returns �놁쓬 <br>
     * @see #ComKeyOnlyAlphabet
     */
    function ComKeyOnlyNumber(obj,sSubChar)
    {
        try {
	        var keyValue=ComGetEvent("keycode") ? ComGetEvent("keycode") : event.which ? event.which : event.charCode;
            if(keyValue >= 48 && keyValue <= 57) {//�レ옄
                event.returnValue=true;
            } else if(sSubChar != undefined && sSubChar != null && sSubChar.constructor==String && sSubChar.length > 0) {
            	//SubChar媛� �щ윭媛� �ㅼ젙�� 寃쎌슦 �щ윭媛� 湲��� 紐⑤몢 泥섎━�쒕떎.
            	for(var i=0; i<sSubChar.length; i++) {
             		if (keyValue == sSubChar.charCodeAt(i)) {
		                event.returnValue=true;
		                return;
            		}
            	}
                event.returnValue=false;
            } else {
                event.returnValue=false;
            }
        } catch(err) { ComFuncErrMsg(err.message); }
    }
    function ComFuncErrMsg(err_msg) {
        var sFuncName="";
        try {
            sFuncName=ComFuncErrMsg.caller.toString();
            sFuncName=sFuncName.substring(9, sFuncName.indexOf("("));
        } catch(err){;}
        alert("["+sFuncName+" Error] " + err_msg);
    }
   /*
   BL踰덊샇.
style="ime-mode:disabled;text-transform:uppercase;" 
�묒닔 �뚯닔�� 誘명룷��.
onKeyPress="ComKeyOnlyNumber(this)"
�묒닔 �뚯냼�� �ы븿.
onKeyPress="ComKeyOnlyNumber(this, '.')"
�뚰뙆踰노�臾몄옄
onKeyPress=ComKeyOnlyAlphabet('upper');
�뚰뙆踰노�臾몄옄 + �レ옄
onKeyPress=ComKeyOnlyAlphabet('uppernum');
�뚰뙆踰녹냼臾몄옄 + �レ옄
onKeyPress=ComKeyOnlyAlphabet('lowernum'); 
*/
function chkSearchCmprAmt(isReq, fmObj, toObj){
 	//Amount field is mandatory.
 	if(isReq){
 		if(fmObj.value==''){
 			alert(getLabel('FMS_COM_ALT002'));
 			fmObj.focus();
 			return false;
 		}else if(toObj.value==''){
 			alert(getLabel('FMS_COM_ALT002'));
 			toObj.focus();
 			return false;
 		}
 	//Amount field is optional.	
 	}else{
 		if(fmObj.value==''&&toObj.value!=''){
 			alert(getLabel('FMS_COM_ALT002'));
 			fmObj.focus();
 			return false;
 		}else if(fmObj.value!=''&&toObj.value==''){
 			alert(getLabel('FMS_COM_ALT002'));
 			toObj.focus();
 			return false;
 		}
 	}
 	if(fmObj.value!=''&&toObj.value!=''){
	     if(compareTwoAmt(fmObj.value, toObj.value)){
	     	curObj.value='';
	     	alert(getLabel('FMS_COM_ALT002'));
	     	curObj.focus();
	     	return false;
	     }else{
	     	return true;
	     }
 	}else{
 		return true;
 	}
}
function chkCmprAmt(flagVal, isReq, curObj, fmObj, toObj){
	if(flagVal){
 		if(curObj.value==''){
 			return;
 		}
 	}
	if(isNaN(curObj.value.replaceAll(',', ''))){
		alert(getLabel('FMS_COM_ALT002'));
		curObj.value='';
		curObj.focus();
		return;
	}
 	//If the amount is mandatory item. 
 	if(isReq){
 		if(curObj.value==''){
 			alert(getLabel('FMS_COM_ALT002'));
 			curObj.focus();
 			return;
 		}
 	 	if(curObj==fmObj&&fmObj.value==''&&toObj.value!=''){
 	 		alert(getLabel('FMS_COM_ALT002'));
 	 		fmObj.focus();
 	 		return;
 	 	}else if(curObj==toObj&&toObj.value==''&&fmObj.value!=''){
 	 		alert(getLabel('FMS_COM_ALT002'));
 	 		toObj.focus();
 	 		return;
 	 	}
 	}
 	if(fmObj.value!=''&&toObj.value!=''){
 	 	//Compare Amount
 	    if(compareTwoAmt(fmObj.value, toObj.value)){
 	     	curObj.value='';
 	     	alert(getLabel('FMS_COM_ALT002'));
 	     	curObj.focus();
 	     	return;
 	     }
 	}
}
function compareTwoAmt(fromVal, toVal){
	var fmAmt=parseInt(fromVal.replaceAll(',', ''));
	var toAmt=parseInt(toVal.replaceAll(',', ''));
	var rtnSts=false;
	if(fmAmt>toAmt){
		rtnSts=true;	
	}
	return rtnSts;
}
/**
 * RD �섏씠吏�瑜� �� �� �덈줈�� 李쎌뿉�� �닿린�꾪빐�� STR 媛믪쓣 �좊땲�ы븯寃� 蹂�寃쏀븿.
 */
function getTimeStamp() {
	var d=new Date();
	var s=""+d.getHours()+""+d.getMinutes()+""+d.getSeconds();
	return s;
}
/**
 *  Role 蹂� Program �묎렐沅뚰븳 泥댄겕
 */
var PGM_ROLE_YN="N";
function dispPgmRoleYn(reqVal){
	PGM_ROLE_YN="N";
	var doc=getAjaxMsgXML(reqVal);
	if(doc[0]=='OK'){
		if(typeof(doc[1])!='undefined'){
			if(doc[1] == 'Y'){
				PGM_ROLE_YN="Y";
			}else{
				PGM_ROLE_YN="N";
			}
		}
	}
}
/**
 * �섏씠吏� 濡쒕뵫�� �ㅻ옒 嫄몃━�� 寃쎌슦 IBSeet�� �숈쟻 �앹꽦�� 紐⑹쟻�쇰줈 �ъ슜
 * @param {htmlTag} String : IBSheet <OBJECT>�쒓렇瑜� �댁쓣 html�쒓렇
 * @param {ID} String : �앹꽦�� IBSheet ID
 */
function callSheetObject(htmlTag, ID) {
	if (document.all[ID] == undefined || document.all[ID] == "undefined") {
		// htmlTag�� IBSheet <OBJECT>�쒓렇 insert
		document.getElementById(htmlTag).innerHTML=SheetObjectTag(ID);    // IBSheetConnfig.js 李몄“
		var shtObj=document.all[ID];
		// �앹꽦�� IBSheet瑜� docObjects諛곗뿴�� 異붽�
		setDocumentObject(shtObj);    // �대떦�섏씠吏��� js 李몄“
		// �앹꽦�� IBSheet <OBJECT>�쒓렇瑜� htmlTag�� insert
		SheetEventTag(ID);    // IBSheetConnfig.js 李몄“ (2013.04.12 異붽��뺤쓽)
		comConfigSheet(shtObj, SYSTEM_FIS);    // IBSheetConnfig.js 李몄“
		for (var i=0; i<docObjects.length; i++) {
			if (docObjects[i] != undefined && docObjects[i] != "undefined" && docObjects[i].id == ID) {
				initSheet(shtObj, i+1);    // �대떦�섏씠吏��� js 李몄“
			}
		}
		comEndConfigSheet(shtObj);    // IBSheetConnfig.js 李몄“
	}
}
 /**
  * To Upper Case
  */
 function strAuto(obj){
	 if(obj.value == 'AUTO')
	 {
		 obj.value='';
	 }
     //obj.value = obj.value.toUpperCase();
     //frm1.bl_no.value=='AUTO'?frm1.bl_no.value='':frm1.bl_no.value = frm1.bl_no.value;
 }

 
 /**
  * xml 臾몄옄�댁쓣 �뚯떛�섏뿬 xmlDoc�� 諛섑솚�쒕떎.<br>
  * <b>Example :</b>
  * 
  * <pre>
  * var xmlDoc = ComGetXmlDoc(sXml);
  * if (xmlDoc==null) return;
  * </pre>
  * 
  * @param {String}
  *            sXml �꾩닔, xml 臾몄옄��
  * @return xml document, �놁쓣寃쎌슦 null
  */
 function ComGetXmlDoc(sXml){
 	if (sXml==undefined || sXml=="" || sXml==null || sXml=="null") return null;

 	if (sXml.indexOf("?>") > 0) {
 		sXml = sXml.substring(sXml.indexOf("?>") + 2);
 	}
 	xmlDoc = $.parseXML(sXml);
 	if (xmlDoc.documentElement==null) return null;

 	return xmlDoc;
 }