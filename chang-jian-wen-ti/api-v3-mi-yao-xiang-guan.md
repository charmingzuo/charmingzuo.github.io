# 其他

## 修改API v3密钥，会影响现有的使用APIKey密钥的交易吗？

API v3密钥：我不是（APIKey密钥），我（对交易）没有（影响），别找技术支持确认了。

## 使用Java加载密钥时，抛出异常InvalidKeyException: Illegal key size

受到美国法律的约束，早期Java的运行时限制了JCE支持的密钥长度，即默认不支持256位的AES。解决的方法有三个：

* （**推荐**）升级Java 8u162+，[默认使用ulimited policy](https://bugs.openjdk.java.net/browse/JDK-8170157)
* Java 8u151和8u152，可以在你的程序中直接放开策略

```java
Security.setProperty("crypto.policy", "unlimited");
```

* 其他版本，下载[无限强度权限策略文件补丁包](https://www.oracle.com/technetwork/java/javase/downloads/jce8-download-2133166.html)，并使用其中的文件覆盖`$JAVA_HOME/lib/security`目录下的对应的`local_policy.jar` 和 `US_export_policy.jar`

Java9及以上，均无限制。

## 使用Java解密时，抛出异常AEADBadTagException: Tag mismatch!

加密使用的AES-GCM包含了Galois Message Authentication Code \(GMAC\)的消息认证机制。解密时会对数据的完整性进行校验。出现tag mismatch异常，表示解密时的消息认证失败。通常有三种可能：

1. 使用了错误的API v3密钥，如使用了其他商户号的密钥，或者使用了APIv2的APIKey。
2. 密文不正确。请检查提交解密的密文和收到的密文。注意报文中的密文经过了Base64编码。
3. 解密时接口遗漏传入附加数据（associated\_data）。

开发者可以参考我们的[示例代码](../qian-ming-zhi-nan-1/zheng-shu-he-hui-tiao-bao-wen-jie-mi.md#jie-mi)。

## 请求返回{"code":"PARAM\_ERROR","message":"平台证书序列号Wechatpay-Serial错误"}

这个错误出现在上送参数需要敏感信息加密的接口中。请参考[申明加密使用的平台证书](../qian-ming-zhi-nan-1/min-gan-xin-xi-jia-mi.md#sheng-ming-jia-mi-shi-yong-de-ping-tai-zheng-shu)。

当证书序列号错误或者不是请求商户号对应的平台证书时，微信支付会返回问题中的错误提示。请检查：

1. 加密使用的证书是否是微信支付平台证书。有时会误用商户证书导致该错误。
2. 是否是请求商户对应的微信支付平台证书，如用了其他商户号的平台证书。
3. 证书是否过期。请按照指引检查证书是否过期，并更新并部署新证书。

