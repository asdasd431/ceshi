

[rewrite_local]
http:\/\/mapi\.cqdingyan\.com\/report\/index url script-response-body 自己命名.js
[mitm] 
hostname = mapi.cqdingyan.com

//hostname :mapi.cqdingyan.com
//重写链接：http:\/\/mapi\.cqdingyan\.com\/report\/index

/*
‼️规则完全免费，仅供学习交流，🈲️商业用途
*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/report/index';

if (url.indexOf(vip) != -1) {
    
    obj.is_vip = "1";
    
    body = JSON.stringify(obj);
}
$done({body});
