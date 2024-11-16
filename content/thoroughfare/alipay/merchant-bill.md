# 支付宝商家账单

支付宝商家账单(无需CK,无需挂机)

## 通道名称：

通道名字（自定义）

## 收款码类型：

1. `PID`(推荐)
   模式选择
   模式9 /模式10 /模式11 /转账单确认

   模式根据运营场景模式自行测试

   获取PID：

   - 方法一：支付宝扫码获取PID
     ![扫码获取PID](https://s2.loli.net/2024/03/20/nV1Shlz7AxPX8Tc.png)

   - 方法二（三个链接选一个即可）：

   - - [上面链接的-商户号(收单账号)](https://b.alipay.com/page/store-management/infomanage)
   - - [上面链接的-账号ID](https://open.alipay.com/develop/manage/account/manage)
   - - [上面链接的-合作伙伴身份（PID）](https://open.alipay.com/platform/keyManage.htm?keyType=partner)

2. `二维码`
3. `二维码图片`

## 应用ID

在支付宝开放平台控制台中查询，如下图所示，私钥填写刚刚生成的软件私钥。
![查询AppId](https://s2.loli.net/2024/03/20/bglvcIVWtBof5x6.png)

## 应用私钥：

![应用私钥](https://s2.loli.net/2024/03/20/bglvcIVWtBof5x6.png)

### 配置好后，使用通道自带的支付测试，测试配置是否正确。
