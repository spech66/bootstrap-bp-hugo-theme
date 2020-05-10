
# Bootstrap-BP hugo theme

[Bootstrap v4](https://getbootstrap.com/) based Hugo theme which provides out of the box best practices like performance and SEO readiness. Featured images will be resized automatically. This is based on the [Hugo docs](https://gohugo.io/templates/homepage/), [hugo-best-practices](https://github.com/spech66/hugo-best-practices), [Front-End Checklist](https://github.com/thedaviddias/Front-End-Checklist) and the [Front-End Performance Checklist](https://github.com/thedaviddias/Front-End-Performance-Checklist). Contains four different color themes.

Other themes by Sebastian Pech: [Bootstrap-BP](https://github.com/spech66/bootstrap-bp-hugo-theme), [Materialize-BP](https://github.com/spech66/materialize-bp-hugo-theme),
[Bootstrap-BP hugo startpage](https://github.com/spech66/bootstrap-bp-hugo-startpage).

## Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Bootstrap-BP hugo theme](#bootstrap-bp-hugo-theme)
  - [Table of contents](#table-of-contents)
  - [Features](#features)
  - [Install the theme](#install-the-theme)
  - [Update the theme](#update-the-theme)
  - [Run example site](#run-example-site)
  - [Configuration and theme specific settings](#configuration-and-theme-specific-settings)
  - [Screenshots of cofigurations](#screenshots-of-cofigurations)
  - [Google Analytics](#google-analytics)
  - [Page templates / archetypes](#page-templates--archetypes)
  - [Schema.org support](#schemaorg-support)
  - [Images, Open Graph and Twitter Cards](#images-open-graph-and-twitter-cards)
  - [Menus](#menus)
  - [Social Icons](#social-icons)
  - [Custom CSS/JS](#custom-cssjs)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Features

- Color themes
- SEO best practices supported (Schema.org, open graph, meta information, ...)
- Automatically resizing of images
- One minified file per ressource only (js, css)
- CDN font support (Google Fonts, ...)
- Optional masonry-like mode for startpage
- Settings for easy customization of layouts and features
- Multiple page templates / archetypes supported
- Icons for Social Media
- Custom css/js
- Multilingual and i18n support
- ...

## Install the theme

With Git installed, run the following commands inside the Hugo site folder. If Hugo has not yet been installed, read the setup guide [here](https://gohugo.io/overview/installing/).

```sh
mkdir themes
cd themes
git clone https://github.com/spech66/bootstrap-bp-hugo-theme.git
```

You can get a zip of the latest version of the theme from the [home page](https://github.com/spech66/bootstrap-bp-hugo-theme) and extract it to the themes folder.

## Update the theme

Go to the themes folder as in the installation and run the following command.

```sh
git pull
```

## Run example site

Go to the `exampleSite` folder from the theme `themes/bootstrap-bp-hugo-theme/exampleSite` and run the following command.

```sh
hugo server --themesDir ../..
```

## Configuration and theme specific settings

Most settings should be done with hugo specific variables. There are only a few (optional) additional `[params]`.
Use the `config.toml` from the `exampleSite` subdirectory as base.

- `startPageColumns = true` will show the start page in a Masonry-like mode.
- `customDateFormat = "02.01.2006"` to override the date format.
- `showListsGrouped = true` to add headers for every year.
- `showPostSummary = true` to only show a summary on index and lists.
- `alwaysExpandMenu = true` to expand the menu on non-mobile devices otherwise the mobile button is shown on all devices.
- `themeColor` set to dark, light, blue (do not set for bootstrap default).
- `hideReadingTime` to hide reading time.

## Screenshots of cofigurations

`startPageColumns = false`

![startPageColumns = false](https://raw.githubusercontent.com/spech66/bootstrap-bp-hugo-theme/master/images/tn.png)

`startPageColumns = true`

![startPageColumns = true](https://raw.githubusercontent.com/spech66/bootstrap-bp-hugo-theme/master/images/tn2.png)

## Google Analytics

This theme uses the internal asynchronous template for Google Analytics tracking. You only have to provide your tracking id in your configuration file.

```yaml
googleAnalytics = "UA-123-45"
```

## Page templates / archetypes

This theme has support for the following archetypes. Based on the specified types the layout and functionality of a page is slightly changed.

- Page (not on the startpage)
- Post (regular post/blog pages)
- Audio (shows spotify in the header)
- Video (shows youtube in the header)
- Quote (highlights a quote and the author)
- Link (show a link with the page title)

## Schema.org support

Provide one author to enable the Schema.org support.

```yaml
[Author]  
  name = "Sebastian Pech"
```

## Images, Open Graph and Twitter Cards

This theme uses Hugos `feature/cover` name method to set the optimized feature image. The image named `*feature*` or `*cover*` is used for the posts featured image and get resized. This will also be in the Twitter Cards and Open Graph block.

The header image is automatically added if there is a file called `*feature*` or `*cover*`. The first wildcard is prefered over the second one. If there are multiple images the first one is used.

```yaml
# Site Config toml
title = "My hugo site"

[params]
  description = "Text about the site"

# Post yaml
---
title: "{{ replace .Name "-" " " }}"
date: {{ .Date }}
publishdate: {{ now.Format "2006-01-02" }}
lastmod: {{ now.Format "2006-01-02" }}
draft: true
description: "Text about this post"
tags:
    - "tag 1"
---
```

## Menus

There are two menus in the theme. `main` and `footer`. Specify the entries in the config or the header of the content.

```yaml
[menu]

  [[menu.main]]
    identifier = "about"
    name = "About"
    url = "/about/"
    weight = 10
    pre = "<i class='fas fa-newspaper'></i>"

  [[menu.footer]]
    identifier = "Imprint"
    name = "Imprint"
    url = "/imprint/"
    weight = 10

  [[menu.footer]]
    identifier = "categories"
    name = "Categories"
    url = "/categories/"
    weight = 20

  [[menu.footer]]
    identifier = "tags"
    name = "Tags"
    url = "/tags/"
    weight = 30
```

```yaml
---
[...]
menu = "main"
---
```

## Social Icons

Icons for Social Media. Add the block to the config.

```yaml
# Sets Social Media icons to appear and link to your account. Value should be your
# username unless otherwise noted.
# Code from https://themes.gohugo.io/future-imperfect/ theme
[social]
  # Coding Communities
  github           = ""
  gitlab           = ""
  stackoverflow    = "" # User Number
  bitbucket        = ""
  jsfiddle         = ""
  codepen          = ""
  # Visual Art Communities
  deviantart       = ""
  flickr           = ""
  behance          = ""
  dribbble         = ""
  # Publishing Communities
  wordpress        = ""
  medium           = ""
  # Professional/Business Oriented Communities
  linkedin         = ""
  linkedin_company = ""
  foursquare       = ""
  xing             = ""
  slideshare       = ""
  # Social Networks
  facebook         = "spechde" # https://fb.me/spech.de
  googleplus       = ""
  reddit           = ""
  quora            = ""
  youtube          = "/channel/UCrRRKovAoTYGIIB9T08pbHw" # https://www.youtube.com/channel/UCrRRKovAoTYGIIB9T08pbHw
  vimeo            = ""
  whatsapp         = "" # WhatsApp Number
  instagram        = "sebastian_pech" # https://www.instagram.com/flowartsde/
  tumblr           = ""
  twitter          = "spech84"
  skype            = ""
  snapchat         = ""
  pinterest        = ""
  telegram         = ""
  discord          = "" # invite link
  # Email
  email            = ""
```

## Custom CSS/JS

The theme provides two ways for custom css/js. The first way is writing your styles to `/assets/css/custom.css` and scripts to `/assets/js/custom.js`. This will merge and minify the styles/scripts with the theme specific files resulting in only one file for the whole website.

The second way is using the Site configuration or the post metadata to target specific files in the `/assets/` folder. This will result in one import line per script/style.

```toml
[params]
  js=["/js/test_site.js"]
  jscdn=["https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"]
  css=["/css/test_site.css"]
  csscdn=["https://fonts.googleapis.com/css?family=Roboto&display=swap"]
```

```yaml
---
js:
    - /js/test.js
jscdn:
    - https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js
css:
    - /css/test.css
csscdn:
    - https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900
---
```
