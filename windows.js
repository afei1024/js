var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
dom = new JSDOM('\n' +
    '<!DOCTYPE html>\n' +
    '<html>\n' +
    '<head>\n' +
    '    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n' +
    '    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n' +
    '    <meta charset="utf-8" />\n' +
    '    <meta content="width=device-width, height=device-height,initial-scale=1.0">\n' +
    '    <title>中国海关企业进出口信用信息公示平台</title>\n' +
    '    <link rel="stylesheet" href="../../../ccppwebserver/static/css/style.css?v=20220117155727">\n' +
    '    <link rel="stylesheet" href="../../../ccppwebserver/static/css/css.css?v=20220117155727">\n' +
    '    <script src="//aeu.alicdn.com/waf/antidomxss_v640.js"></script><script src="//aeu.alicdn.com/waf/interfaceacting211222.js"></script><script src="../../../ccppwebserver/static/js/jquery.min.js?v=2.1.4"></script>\n' +
    '    <!-- <script src="../../../ccppwebserver/pages/ccpp/js/inobounce.js?v=20220117155727"></script> -->\n' +
    '    <!-- <script src="../../../ccppwebserver/pages/ccpp/js/ccppJY.js?v=20220117155727"></script> -->\n' +
    '    <script src="../../../ccppwebserver/static/js/bootstrap.min.js?v=20220117155727"></script>\n' +
    '    <script src="../../../ccppwebserver/pages/ccpp/js/ccpp.js?v=20220117155727"></script>\n' +
    '    <script src="../../../ccppwebserver/pages/ccpp/js/common.js?v=20220117155727"></script>\n' +
    '    <script src="../../../ccppwebserver/static/js/layer/layer.js?v=20220117155727"></script>\n' +
    '    <script src="../../../ccppwebserver/static/js/Mu64.js?v=20220117155727"></script>\n' +
    '    <script src="../../../ccppwebserver/static/js/SwCaHu_p.js?v=20220117155727"></script>\n' +
    '    <link href="../../../ccppwebserver/static/js/layer/skin/default/layer.css?v=20220117155727" rel="stylesheet">\n' +
    '</head>\n' +
    '\n' +
    '<body>\n' +
    '<!--<form id="queryCopForm">-->\n' +
    '    <div class="container">\n' +
    '    \t<div class="head"></div>\n' +
    '        <div class=" header">\n' +
    '            <div class="logo"></div>\n' +
    '        </div>\n' +
    '         <table width="90%">\n' +
    '\t\t\t<tr>\n' +
    '\t\t\t\t<td align="right">\n' +
    '\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;当天访客：</span><span id="countDate"></span><span>&nbsp;&nbsp;&nbsp;您是第：</span><span id="countUser"></span>\n' +
    '\t\t\t\t</td>\n' +
    '\t\t\t</tr>\n' +
    '\t\t</table>\n' +
    '        <div class=" Absolute-Center">\n' +
    '            <div class="serch-content1">\n' +
    '                <div class="serch-1" id="ios">\n' +
    '                    <input name="copName" class="serch_input1" type="text" value="企业名称或统一社会信用代码" id="ID_codeName"\n' +
    '                          onfocus="clearCode()" onblur="checkCode()" style="color: #888" tabIndex="1" autocomplete="off"/>\n' +
    '                    <button  type="button" class="serch_ico1" onclick="return checkQueryInfo()"\n' +
    '                           value="搜  索" align="center" tabIndex="3" style="cursor:pointer">搜索</button>\n' +
    '                </div>\n' +
    '                <div class="check-1">\n' +
    '                \t<input id="checkCode" style="height: 32px;margin-top: 10px;width: 150px;border-radius: 6px;border: #0e529b 2px solid;" maxlength="4" placeholder="请输入验证码">\n' +
    '                \t<img id="verifyCode" src="" onclick="creatImage()" style="float: right;margin-top: 13px;margin-left: 10px;">\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            \n' +
    '            <div class="serch-2">\n' +
    '                 <table width="100%" style="margin-top: 4%;position:relative; left:0;padding-bottom:80px;"> \n' +
    '                 \t<tr align="center">\n' +
    '                 \t\t<td style="width: 220px;">\n' +
    '                   \t\t\t<img onclick="directory();" src="../../../ccppwebserver/static/images/highcredit.jpg" style="cursor:pointer;"></img>\n' +
    '                   \t\t</td>\n' +
    '               \t\t\t<td style="width: 220px;">\n' +
    '               \t\t\t\t<img onclick="lostcredit();" src="../../../ccppwebserver/static/images/lostcredit.jpg" style="cursor:pointer;"></img>\n' +
    '               \t\t\t</td>\n' +
    '<!--                \t\t\t<td style="width: 220px;">\n' +
    '               \t\t\t\t<img onclick="abnormalCompany();" src="../../../ccppwebserver/static/images/abnormal.jpg" style="cursor:pointer;"></img>\n' +
    '               \t\t\t</td> -->\n' +
    '               \t\t\t<td style="width: 220px;">\n' +
    '               \t\t\t\t<img onclick="declCompany()" src="../../../ccppwebserver/static/images/decl.jpg" style="cursor:pointer;"></img>\n' +
    '               \t\t\t</td>\n' +
    '               \t\t\t<td style="width: 220px;">\n' +
    '               \t\t\t\t<img onclick="crossBorder()" src="../../../ccppwebserver/static/images/cross.jpg" style="cursor:pointer;"></img>\n' +
    '               \t\t\t</td>\n' +
    '               \t\t\t<td style="width: 220px;">\n' +
    '               \t\t\t\t<img  onclick="skipToTradeList()" src="../../../ccppwebserver/static/images/special.jpg" style="cursor:pointer;"></img>\n' +
    '               \t\t\t</td>\n' +
    '                 \t</tr>\n' +
    '                   \t<tr align="center">\n' +
    '                       \t<td>\n' +
    '                           \t<a onclick="directory();" style="color:#1458ac;margin-top: 10px;font-size: 17px;cursor: pointer;font-family:黑体"><b>高级认证企业名录</b></a>\n' +
    '                          </td>\n' +
    '                          <td >\n' +
    '                          \t<a onclick="lostcredit();" style="color: #1458ac;margin-top: 10px;font-size: 17px;cursor: pointer;font-family:黑体"><b>失信企业名录</b></a>\n' +
    '                          </td>\n' +
    '<!--                           <td>\n' +
    '                           \t<a onclick="abnormalCompany();" style="color: #1458ac;margin-top: 10px;font-size: 17px;cursor: pointer;font-family:黑体"><b>信用信息异常企业名录</b></a>\n' +
    '                       \t</td> -->\n' +
    '                       \t<td>\n' +
    '                           \t<a onclick="declCompany()" style="color: #1458ac;margin-top: 10px;font-size: 17px;cursor: pointer;font-family:黑体"><b>报关企业名录</b></a>\n' +
    '                       \t</td>\n' +
    '                       \t<td>\n' +
    '                           \t<a onclick="crossBorder()" style="color: #1458ac;margin-top: 10px;font-size: 17px;cursor: pointer;font-family:黑体"><b>跨境电子商务企业名录</b></a>\n' +
    '                       \t</td>\n' +
    '                       \t<td>\n' +
    '                           \t<a onclick="skipToTradeList()" style="color: #1458ac;margin-top: 10px;font-size: 17px;cursor: pointer;font-family:黑体"><b>特定资质行政相对人名录</b></a>\n' +
    '                       \t</td>\n' +
    '                   \t</tr>\n' +
    '               \t</table>\n' +
    '              </div>\n' +
    '        </div>\n' +
    '        <div id="slideBar" style="display:none;margin-left: 30px;margin-top: 20px;"></div>\n' +
    '        <div class="footer3">\n' +
    '            <p>\n' +
    '                版权所有：中华人民共和国海关总署&nbsp;&nbsp;&nbsp;未经协议授权禁止转载\n' +
    '                <br />\n' +
    '                地址：北京市建国门内大街6号 邮编：100730\n' +
    '                <br />\n' +
    '                热线电话：12360\n' +
    '            </p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <script type="text/javascript">\n' +
    '        /* var dataList = ["0","1","queryList"];\n' +
    '        var options = {\n' +
    '            dataList: dataList,\n' +
    '            success:function(){  \n' +
    '                console.log("show");  \n' +
    '            },\n' +
    '            fail: function(){\n' +
    '                console.log("fail");  \n' +
    '            }\n' +
    '        };\n' +
    '        SliderBar("slideBar", options); */\n' +
    '        \n' +
    '\t\t$(function(){\n' +
    '\t\t\tvar baseUrl3  = location.href.split("ccppwebserver");\n' +
    '\t\t\t$("body").append("<script src=\'"+baseUrl3[0]+"ccppserver/menuManger\'/>");\n' +
    '\t\t\t$("#verifyCode").attr("src",baseUrl3[0]+"ccppserver/verifyCode/creator");\n' +
    '\t\t\t//访问量统计\n' +
    '\t\t\tgetVisitInfo();\n' +
    '\t\t\t//判断手机类型\n' +
    '\t\t\tvar u = navigator.userAgent;\n' +
    '\t\t\tvar isIOS = !!u.match(/\\(i[^;]+;(U;)? CPU.+Mac OS X/);\n' +
    '\t\t\tif(isIOS){\n' +
    '\t\t\t\t$("#ios").css("paddingBottom","6px")\n' +
    '\t\t\t}\n' +
    '\t\t\t\n' +
    '\t\t})\n' +
    '    </script>\n' +
    '</body>\n' +
    '</html>')
window = dom.window;
document = window.document;
