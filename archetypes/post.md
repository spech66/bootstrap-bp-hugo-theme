---
title: "{{ replace .Name "-" " " }}"
date: {{ .Date }}
publishdate: {{ now.Format "2006-01-02" }}
lastmod: {{ now.Format "2006-01-02" }}
draft: true
description: "Text about this post"
images:
    - "post-cover.png"
tags:
    - "tag 1"
categories:
    - "c 1"
---

## Post Header

Text