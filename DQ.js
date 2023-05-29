[MITM]
hostname=*.dairyqueen.com.cn

[rewrite_local]
^https:\/\/wxxcx\.dairyqueen\.com\.cn\/UserXueLi\?_actionName=getXueLiSign url script-request-body https://raw.githubusercontent.com/chouchoui/QuanX/master/Scripts/dq/dq.sign.js


[task_local]
22 8,9 * * * https://raw.githubusercontent.com/chouchoui/QuanX/master/Scripts/dq/dq.sign.js, tag=DQ点单小程序签到, img-url=https://raw.githubusercontent.com/chouchoui/QuanX/master/Scripts/dq/dq.task.png, enabled=true
