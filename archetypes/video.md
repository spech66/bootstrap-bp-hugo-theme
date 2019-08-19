---
title: "{{ replace .Name "-" " " | title }}"
type: video
author: Sebastian
date: {{ .Date }}
publishdate: {{ now.Format "2006-01-02" }}
lastmod: {{ now.Format "2006-01-02" }}
draft: true
description: "Text about this post"
tags:
    - "tag 1"
categories:
    - Video
videos: [https://www.youtube.com/v/wURYk4M6uHU] # for og information - you MUST use the /v/ link NOT watch?v=
youtube: "" # https://www.youtube.com/watch?v=wURYk4M6uHU => wURYk4M6uHU
---

## Post Header

CONTENT
