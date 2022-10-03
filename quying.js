[rewrite_local]
^http:\/\/data\.nineton\.cn\/report\/index url script-response-body https://raw.githubusercontent.com/asdasd431/ceshi/main/quying.js
[mitm] 
hostname = data.nineton.cn

//hostname :data.nineton.cn
//重写链接：http:\/\/data\.nineton\.cn\/report\/index


/*
‼️规则完全免费，仅供学习交流，🈲️商业用途
*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/report/index';

if (url.indexOf(vip) != -1) {
    
    obj.is_vip = 1;
    
    body = JSON.stringify(obj);
}
$done({body});
