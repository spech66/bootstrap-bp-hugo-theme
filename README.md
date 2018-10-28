# bootstrap-best-practices-hugo-theme

Bootstrap based Hugo theme which provides out of the box best practices like performance and SEO readiness. Featured images will be resized automatically. This is based on the [Hugo docs](https://gohugo.io/templates/homepage/), [hugo-best-practices](https://github.com/spech66/hugo-best-practices), [Front-End Checklist](https://github.com/thedaviddias/Front-End-Checklist) and the [Front-End Performance Checklist](https://github.com/thedaviddias/Front-End-Performance-Checklist).

## Theme settings

Most settings should be done with hugo specific variables. There are only a few (optional) additional `[params]`.

* `startPageColumns = true` will show the start page in a Masonry-like mode.
* `customDateFormat` to override the date format.

## Google Analytics

This theme uses the internal asynchronous template for Google Analytics tracking. You only have to provide your tracking id in your configuration file:

```yaml
googleAnalytics = "UA-123-45"
```

## Schema.org support

Provide one author to enable the Schema.org support.

```yaml
[Author]  
  name = "Sebastian Pech"
```

## Images, Open Graph and Twitter Cards

This theme uses Hugos `images` array to set the optimized feature image. You can use the array to provide content images as well. The first immage in the array is used for the posts featured image.

```yaml
# Site Config toml
title = "My hugo site"

[params]
  description = "Text about the site"
  images = ["site-feature-image.jpg"]

# Post yaml
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
---
```

From the Docu of Open Graph:
> Hugo uses the page title and description for the title and description metadata. The first 6 URLs from the images array are used for image metadata.
> Various optional metadata can also be set: - Date, published date, and last modified data are used to set the published time metadata if specified.
> \- audio and video are URL arrays like images for the audio and video metadata tags, respectively. - The first 6 tags on the page are used for the tags metadata. - The series taxonomy is used to specify related “see also” pages by placing them in the same series.