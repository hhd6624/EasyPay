# 支付宝商家账单
## 支付宝商家账单(无需CK,无需挂机)
::: danger 注意
之前没有申请过的用户，已无法使用
:::
## 前期准备工作
1. 首先到支付宝开放平台完成注册及实名认证
    - [支付宝开放平台](https://open.alipay.com/)

2. 进入控制台，选择网页/移动应用，点击创建网页/移动应用。在创建页面选择网页应用。
   ![创建网页应用](https://s2.loli.net/2024/03/20/b9FZSxDsUR6q425.png)
   ![创建网页应用步骤](https://s2.loli.net/2024/03/20/KLb85iRxp9XnfrA.png)

3. 创建完成后需要审核，一般在1天内完成。

## 配置网页应用
1. 点击网页应用后的详情
   ![网页应用详情](https://s2.loli.net/2024/03/20/AeMm2CTzjIOfpbq.png)

2. 在弹出的新页面中点击产品绑定，开通基础功能产品（建议将所有免费的服务全部开通）
   ![产品绑定](https://s2.loli.net/2024/03/20/2XbTBmc4dNCkeJ8.png)

3. 进入开发设置，配置接口加签方式（密钥/证书）
   ![配置接口加签方式](https://s2.loli.net/2024/03/20/jF4x1GAgqKyVhvJ.png)

    - 这里演示的账号已经开通过，所有选项显示为变更，但步骤一样。

4. 配置页面后，选择密钥（普遍适用）。
   ![选择密钥](https://s2.loli.net/2024/03/20/Fqp5xwGXzbZKslT.png)

5. 下载并安装提示中的密钥工具，按照新页面提示下载指定程序包，然后进行安装。
   ![安装密钥工具](https://s2.loli.net/2024/03/20/l8SK9eay1ZgQRIu.png)

6. 打开工具，按下图所示选择，然后点击生成密钥。
   ![生成密钥](https://s2.loli.net/2024/03/20/R9XTZjeB62yOzvb.png)

7. 保存好生成的公钥和私钥。
   ![公钥和私钥](https://s2.loli.net/2024/03/20/JKgItQVvroApfR5.png)

8. 在网页中点击下一步，按照提示填写公钥，然后点击确认上传，提示密钥保存成功即可。
   ![上传公钥](https://s2.loli.net/2024/03/20/7HEKgfORalezWI6.png)

9. 如果提示稍后操作，点击即可。
   ![稍后操作提示](https://s2.loli.net/2024/03/20/PrRNckz97LKxWl6.png)

## 通道配置
1. 进入简付管理后台，选择通道管理，按照下图新增通道，使用方式可以选择任意一种。
   ![新增通道](/Zfb/QQ20240924-211444.png)

2. 应用AppId，在支付宝开放平台控制台中查询，如下图所示，私钥填写刚刚生成的软件私钥。
   ![查询AppId](https://s2.loli.net/2024/03/20/bglvcIVWtBof5x6.png)

3. 获取PID：
    - 方法一：支付宝扫码获取PID
      ![扫码获取PID](https://s2.loli.net/2024/03/20/nV1Shlz7AxPX8Tc.png)

    - 方法二（三个链接选一个即可）：
     
     - - [上面链接的-商户号(收单账号)](https://b.alipay.com/page/store-management/infomanage)
     - - [上面链接的-账号ID](https://open.alipay.com/develop/manage/account/manage)
     - - [上面链接的-合作伙伴身份（PID）](https://open.alipay.com/platform/keyManage.htm?keyType=partner)

4. 配置好后，使用通道自带的支付测试，测试配置是否正确。
