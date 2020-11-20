# 认证

微信支付API v3只接受已经开通微信支付账号的商户请求，并使用数字签名对接口的调用方进行认证。数字签名是通过数学算法或者某种方式运算得到的电子签章，可以确定请求的完整性和真实性。我们使用SHA-256 with RSA作为数字签名的算法。

同样的，微信支付API v3也会对应答进行签名，商户可以通过签名确定应答是来自微信支付的。

商户的技术人员，请按照以下的顺序了解微信支付API v3的认证机制。

1. 了解什么是[商户API证书](zheng-shu.md#shang-hu-api-zheng-shu)，并获取商户证书和私钥
2. 设置[API v3密钥](api-v3-mi-yao.md)
3. 参照[签名生成](../qian-ming-zhi-nan-1/qian-ming-sheng-cheng.md)，使用**商户私钥**实现对请求的签名
4. 通过API下载[微信支付平台证书](zheng-shu.md#ping-tai-zheng-shu)，并使用API v3密钥解密证书
5. 参照[签名验证](../qian-ming-zhi-nan-1/qian-ming-yan-zheng.md)，使用**平台公钥**实现对应答签名的验证

我们建议商户基于微信支付官方提供的SDK来开发应用。SDK为商户的技术人员封装了请求的签名和应答的验签，简化了商户系统的开发工作。


