# 三网监控
::: tip 最低配置
本文挂机宝配置：2+2，Windows-2012R2-Datacenter
:::
## 安装运行
::: tip 下载地址
https://ww0.lanzoue.com/b05qpvhe
:::
下载后得到一个压缩包，将压缩包解压到任意目录，双击运行XarrPay三网监控
![image-20210914161932674](https://s2.loli.net/2024/07/25/WldZ3T2jDNnyitu.png)
## 配置

## 商户设置
在软件页面点击下载适配的微信(QQ、旺旺)版本
![image-20210914162022922](https://s2.loli.net/2024/07/25/aGsOdHfFlizbVDw.png)
下载并安装好版本后，填写`商户地址`、`商户ID`、`商户密钥`。 

后台对应的信息如下，需要注意的是商户地址只填写http://商户地址，不需要后面的/xpay/epay/
![image-20210914162102284](https://s2.loli.net/2024/07/25/jsoQENnKWvMqUTH.png)
## 程序配置
依次点击获取微信目录、获取旺旺目录、一键安装Edge。
![image-20210914162131979](https://s2.loli.net/2024/07/25/3ytVnPYHjaDKNcT.png)
## 添加账号
::: tip TIP
在添加前，请确保要添加的客户端已全部退出。
:::
微信
点击添加微信账户，会打开微信，登录后会在底面显示出来。
![image-20210914162202992](https://s2.loli.net/2024/07/25/jHXGyMhzE5UqcJF.png)
## 旺旺（支付宝）
点击添加旺旺账户，会打开旺旺，登录后，程序会自动获取旺旺（支付宝）ck,获取后会在底面显示出来
![image-20210914162230748](https://s2.loli.net/2024/07/25/W9OBw6XbLtpCoQj.png)
## QQ
添加QQ账户前请先登录好需要监控的QQ，然后点击添加QQ账户
![image-20210914162253976](https://s2.loli.net/2024/07/25/6eYbvGlmB2h1Z5a.png)
在弹出的窗口勾选需要监控的QQ，点击监控选择QQ
![image-20210914162312722](https://s2.loli.net/2024/07/25/c3amlujBn4GSt5K.png)
监控好后，在商户列表里会显示
![image-20210914162330979](https://s2.loli.net/2024/07/25/A1jfwshXtSrJB4y.png)
## 通知管理
 - 失效通知：当监控账号失效或者掉线后通知你
 - 订单通知：监控到新的付款信息并回调成功后通知你
 - 设定完成后点击测试通知配置确保配置正确
## 邮箱通知
在程序配置中选中邮箱模式，并填写相关信息。
![image-20210914162355792](https://s2.loli.net/2024/07/25/4shuy1BqzvxmjGE.png)
## 钉钉通知
创建钉钉群
![image-20210914162414969](https://s2.loli.net/2024/07/25/4ukACdIYmv9sZLq.png)
点击群设置->机器人->添加机器人->自定义
![image-20210914162432797](https://s2.loli.net/2024/07/25/QGWlAZcF2HD8reJ.png)
选择安全模式为加签，复制密钥，完成后复制webhook地址
![image-20210914162450179](https://s2.loli.net/2024/07/25/TMBtcPOheFd83Al.png)
在程序配置中选中钉钉模式，并填写相关信息。
![image-20210914162506929](https://s2.loli.net/2024/07/25/C35uv78YzkXwl1D.png)
## 企业微信通知
创建企业微信群，添加群机器人
![image-20210914162526166](https://s2.loli.net/2024/07/25/zSf3LUThAKoIaeZ.png)
填写好信息，新建机器人
![image-20210914162541797](https://s2.loli.net/2024/07/25/dgkehTr213oEIct.png)
复制webhook地址
![image-20210914162556908](https://s2.loli.net/2024/07/25/xDCc6Sti8UjT5qJ.png)
在程序配置中选中企业微信，并填写机器人的webhook地址。
![image-20210914162612691](https://fe-1304214004.file.myqcloud.com/images/ssp/20220919/9itpa768.png)