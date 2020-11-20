---
description: 介绍商户API私钥、证书和微信支付平台证书的获取和使用方式
---

# 私钥和证书

## 商户API证书

商户API证书是指由商户申请的，包含商户的商户号、公司名称、公钥信息的证书。

微信支付API v3使用由**证书授权机构**\(Certificate Authority ，简称CA\)签发颁发的证书。商户需下载证书工具生成证书请求串，并将证书请求串提交到商户平台后才能获得商户API证书文件。

* 新接入商户请参考[什么是API证书？如何获取API证书？](http://kf.qq.com/faq/161222NneAJf161222U7fARv.html)。
* 已经接入并使用微信支付颁发证书的商户请参考[微信支付API证书升级指引（技术人员）](http://kf.qq.com/faq/180824JvUZ3i180824YvMNJj.html)。API v3已不支持使用微信支付颁发的证书。

{% hint style="info" %}
* 证书升级不影响已有服务。
* 微信支付颁发的证书，将在升级后14天后失效。请务必尽快用新证书替换服务器上的老证书。
{% endhint %}

## 商户API私钥

商户申请商户API证书时，会生成商户私钥，并保存在本地证书文件夹的文件`apiclient_key.pem`中。私钥也可以通过工具从商户的p12证书中导出。请妥善保管好你的商户私钥文件。

{% hint style="danger" %}
不要把私钥文件暴露在公共场合，如上传到Github，写在客户端代码等。
{% endhint %}

## 平台证书

平台证书是指由**微信支付**负责申请的，包含微信支付平台标识、公钥信息的证书。商户可以使用平台证书中的公钥进行验签。

微信支付平台证书请调用“[获取平台证书接口](../jie-kou-wen-dang/ping-tai-zheng-shu.md#huo-qu-ping-tai-zheng-shu-lie-biao)“获取。

{% hint style="info" %}
不同的商户，对应的微信支付平台证书是不一样的
{% endhint %}

{% hint style="danger" %}
平台证书会周期性更换。商户应定时通过API下载新的证书。请参考我们的[更新指引](../qian-ming-zhi-nan-1/wei-xin-zhi-fu-ping-tai-zheng-shu-geng-xin-zhi-yin.md)，不要依赖人工更新证书。
{% endhint %}

## 声明所使用的证书

某些情况下，将需要更新密钥对和证书。为了保证更换过程中不影响API的使用，请求和应答的HTTP头部中包括**证书序列号**，以声明签名或者加密所用的密钥对和证书。

* 商户签名使用**商户私钥**，证书序列号包含在请求HTTP头部的`Authorization`的`serial_no`
* 微信支付签名使用**微信支付平台私钥**，证书序列号包含在应答HTTP头部的`Wechatpay-Serial`
* 商户上送敏感信息时使用**微信支付平台公钥**加密，证书序列号包含在请求HTTP头部的`Wechatpay-Serial`

{% hint style="info" %}
请参考[如何查看证书序列号](../chang-jian-wen-ti/zheng-shu-xiang-guan.md#ru-he-cha-kan-zheng-shu-xu-lie-hao)。
{% endhint %}

