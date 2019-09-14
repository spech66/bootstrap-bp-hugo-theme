---
title: "{{ replace .Name "-" " " | title }}"
type: link
author: Sebastian
date: {{ .Date }}
publishdate: {{ now.Format "2006-01-02" }}
lastmod: {{ now.Format "2006-01-02" }}
draft: true
description: "Text about this post"
tags:
    - "tag 1"
categories:
    - Link
link: "https://www.spech.de" # URL
---

## Post Header

CONTENT
