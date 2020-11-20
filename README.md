# 简介

为了在保证**支付安全**的前提下，带给商户**简单、一致且易用**的开发体验，我们推出了全新的微信支付API v3。

相较于的之前微信支付API，主要区别是：

* 遵循统一的Restful的设计风格
* 使用JSON作为数据交互的格式，不再使用XML
* 使用基于非对称密钥的SHA256-RSA的数字签名算法，不再使用MD5或HMAC-SHA256
* 不再要求HTTPS客户端证书
* 使用AES-256-GCM，对回调中的关键信息进行加密保护

在[接口规则中](wei-xin-zhi-fu-api-v3-jie-kou-gui-fan.md)，你将了解到微信支付API v3的基础约定，如数据格式，参数兼容性，错误处理等。随后我们重点介绍了微信支付API v3新的[认证机制](ren-zheng/)。你可以跟随着[签名指南](qian-ming-zhi-nan-1/)，使用命令行或者你熟悉的编程语言，一步一步实践如何签名和验签。在最后的[常见问题](chang-jian-wen-ti/)中，我们总结了商户接入过程中的各种常见和不常见的问题。

我们提供了API v3的`Postman`调试工具和某些开发语言的库。你可以通过我们的[Github](https://github.com/wechatpay-apiv3)获取。

如果你有任何问题，欢迎访问我们的[开发者社区](https://developers.weixin.qq.com/community/pay)。

