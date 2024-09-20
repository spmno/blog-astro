---
layout: '@/templates/BasePost.astro'
title: rust header 基本认证
description: 使用基本认证发送 HTTP 请求
pubDate: 2024-09-20T00:00:00Z
imgSrc: '/assets/images/image-post4.jepg'
imgAlt: 'Vscode'
---

```
let response = client.get("http://example.com/resource")
        .header(reqwest::header::AUTHORIZATION, auth)
        .send()
        .await?;

```

HTTP认证基础: https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication