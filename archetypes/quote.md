{{ $author := slice "" -}}
{{ with .Site.Params.Author }}{{ $author = . }}{{ end -}}
---
title: "{{ replace .Name "-" " " | title }}"
type: link
author: {{ range $author }}
    - {{ . }}{{ end }} 
date: {{ .Date }}
publishdate: {{ now.Format "2006-01-02" }}
lastmod: {{ now.Format "2006-01-02" }}
draft: true
description: "Text about this post"
tags:
    - "tag 1"
categories:
    - Link
quoteauthor: Sebastian # author of quote
quote:  "" # text
---

## Post Header

CONTENT
