# RuleApi支付配置教程
## 1. 登录简付后台
::: tip 复制下列接口配置信息
**`接口地址`:如图❶**

**`商户ID`:如图❷**

**`商户密钥`:如图❸**

**`易支付一般接口配置`: https://jf.dghhd.top/xpay/epay/**

:::
![127c570e6ec28720be3da8.png](/RuleProject/QQ20240919-191051.png)

## 2. 登录RuleApi后台

点击左侧菜单栏中的`支付模块`， 选择`易支付配置`

![127c570e6ec28720be3da8.png](/RuleProject/QQ20240928-194154.png)

## 3. 配置支付接口

**`易支付接口地址`**

填这个地址：
https://jf.dghhd.top/xpay/epay/

**`易支付商户ID`**

简付API基础信息中获取到的商户ID

**`易支付商户密钥`**

简付API基础信息中获取到的商户密钥

**`易支付回调地址`**

填这个地址：
**您的`RuleApi的域名`/pay/EPayNotify**

::: danger 提示
**`易支付地址`：如果`https://jf.dghhd.top/xpay/epay/`不行，请去掉最后面的`/`。**
:::