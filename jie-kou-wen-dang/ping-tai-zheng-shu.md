# 平台证书

{% api-method method="get" host="https://api.mch.weixin.qq.com" path="/v3/certificates" %}
{% api-method-summary %}
 获取平台证书列表
{% endapi-method-summary %}

{% api-method-description %}
获取商户当前可用的平台证书列表。微信支付提供该接口，帮助商户后台系统实现平台证书的平滑更换。该请求无需身份认证信息之外的其他参数，请点击`Response`查看应答示例。
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
签名认证信息，详见【签名生成】
{% endapi-method-parameter %}

{% api-method-parameter name="Accept" type="string" required=true %}
application/json
{% endapi-method-parameter %}

{% api-method-parameter name="User-Agent" type="string" required=true %}
用户代理\(https://zh.wikipedia.org/wiki/User\_agent\)
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
    "data": [
        {
            "serial_no": "5157F09EFDC096DE15EBE81A47057A7232F1B8E1",
            "effective_time ": "2018-06-08T10:34:56+08:00",
            "expire_time ": "2018-12-08T10:34:56+08:00",
            "encrypt_certificate": {
                "algorithm": "AEAD_AES_256_GCM",
                "nonce": "61f9c719728a",
                "associated_data": "certificate",
                "ciphertext": "sRvt… "
            }
        },
        {
            "serial_no": "50062CE505775F070CAB06E697F1BBD1AD4F4D87",
            "effective_time ": "2018-12-07T10:34:56+08:00",
            "expire_time ": "2020-12-07T10:34:56+08:00",
            "encrypt_certificate": {
                "algorithm": "AEAD_AES_256_GCM",
                "nonce": "35f9c719727b",
                "associated_data": "certificate",
                "ciphertext": "aBvt… "
            }
        }
    ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% hint style="info" %}
该接口没有query参数或者path参数，仅需要必要的头部信息，如签名认证信息等
{% endhint %}

关于证书解密，请查阅【开发指南】中的[证书和回调报文解密](../qian-ming-zhi-nan-1/zheng-shu-he-hui-tiao-bao-wen-jie-mi.md)。

{% hint style="warning" %}
由于证书存在有效期的限制，微信支付会不定期地更换平台证书以确保交易安全。
{% endhint %}

更换平台证书的过程中，微信支付返回的应答消息和支付回调通知中会使用新老两个证书的某一个。商户要定期调用该接口获取到最新的证书，确保在微信支付更换平台证书的过程中不影响正常交易。

### 说明

1. 在启用新的平台证书前，微信支付会提前24小时把新证书加入到平台证书列表中
2. 接口的频率限制: 单个商户号1000 次/s
3. 首次下载证书，可以使用微信支付提供的[证书下载工具](https://github.com/wechatpay-apiv3/CertificateDownloader)

### 注意事项

如果自行实现验证平台签名逻辑的话，需要注意以下事项:

* 程序实现定期更新平台证书的逻辑，不要硬编码验证应答消息签名的平台证书
* 定期调用该接口，间隔时间小于12 小时
* 加密请求消息中的敏感信息时，使用最新的平台证书（即：证书启用时间较晚的证书）

