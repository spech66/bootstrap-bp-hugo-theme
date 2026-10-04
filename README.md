
# Bootstrap-BP hugo theme

[Bootstrap v5](https://getbootstrap.com/) based Hugo theme which provides out of the box best practices like performance and SEO readiness. Featured images will be resized automatically. This is based on the [Hugo docs](https://gohugo.io/templates/homepage/), [hugo-best-practices](https://github.com/spech66/hugo-best-practices), [Front-End Checklist](https://github.com/thedaviddias/Front-End-Checklist) and the [Front-End Performance Checklist](https://github.com/thedaviddias/Front-End-Performance-Checklist). Contains four different color themes.

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
  - [Template structure and overrides](#template-structure-and-overrides)
  - [Configuration and theme specific settings](#configuration-and-theme-specific-settings)
  - [Screenshots of configurations](#screenshots-of-configurations)
  - [Google Analytics](#google-analytics)
  - [Page templates / archetypes](#page-templates--archetypes)
  - [Schema.org support](#schemaorg-support)
  - [Images, Open Graph and Twitter Cards](#images-open-graph-and-twitter-cards)
  - [Menus](#menus)
  - [Social Icons](#social-icons)
  - [Icons](#icons)
  - [Custom CSS/JS](#custom-cssjs)
  - [Post cards](#post-cards)
  - [Below posts: older/newer and related posts](#below-posts-oldernewer-and-related-posts)
  - [Markdown images and alerts](#markdown-images-and-alerts)
  - [Floating images](#floating-images)
  - [Performance: Bootstrap parts, JavaScript and Font Awesome](#performance-bootstrap-parts-javascript-and-font-awesome)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Features

- Color themes
- SEO best practices supported (Schema.org, open graph, meta information, ...)
- Automatically resizing of images and conversion to WebP (partial `image-webp.html`, used by cards, `optfigure` and `featurette-image`); card images in several widths (`srcset`), only the first cards load their image right away
- One minified file per resource only (js, css)
- CDN font support (Google Fonts, ...)
- Optional masonry-like mode for startpage
- Settings for easy customization of layouts and features
- Multiple page templates / archetypes supported
- Icons for Social Media as inline SVG (no icon font)
- No Bootstrap JavaScript bundle by default (~1 KB navigation script)
- Custom css/js
- Floating images in posts (shortcode `img-post`)
- Markdown images as WebP with width/height, GitHub style alerts (`> [!NOTE]`) as Bootstrap alerts
- Older/newer post and related posts below posts
- Multilingual and i18n support
- ...

## Install the theme

With Git installed, run the following commands inside the Hugo site folder. If Hugo has not yet been installed, read the setup guide [here](https://gohugo.io/getting-started/quick-start/).

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

## Template structure and overrides

The theme uses Hugo's template structure (Hugo 0.146 and later): `baseof.html`, `home.html`, `page.html`, `list.html`, `taxonomy.html`, partials in `layouts/_partials/`, shortcodes in `layouts/_shortcodes/` and render hooks in `layouts/_markup/`. To change a template, create a file with the same name in your site, e.g. `layouts/_partials/header.html`. The older paths (`layouts/partials/`, `layouts/shortcodes/`, `layouts/index.html`, `layouts/_default/...`, `layouts/<section>/single.html`) still work in your site and override the theme as before.

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
- `bootstrapJS = true` to load the full Bootstrap JavaScript bundle (modals, tooltips, carousels, ...). Default: only a small navigation script.
- `hidePostNav = true` / `hideRelated = true` to hide the older/newer links / related posts below posts.

## Screenshots of configurations

`startPageColumns = false`

![startPageColumns = false](https://raw.githubusercontent.com/spech66/bootstrap-bp-hugo-theme/master/images/tn.png)

`startPageColumns = true`

![startPageColumns = true](https://raw.githubusercontent.com/spech66/bootstrap-bp-hugo-theme/master/images/tn2.png)

## Google Analytics

The native Hugo Google Analytics template has been removed!

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
[params.author]  
  name = "Sebastian Pech"
```

Posts get a `BlogPosting` schema, the start page `WebSite` and `Person` (with `sameAs` links from `params.social`).

Own schema for other pages (e.g. an `Event` for courses): create `layouts/_partials/seo_schema_page.html` in your site and return a dict. It replaces the theme's data for that page, an empty dict keeps the default.

```go-html-template
{{- if .Params.eventDate -}}
{{- return dict "@context" "https://schema.org" "@type" "Event" "name" .Title "startDate" (.Params.eventDate | time.Format "2006-01-02T15:04:05-07:00") -}}
{{- end -}}
{{- return dict -}}
```

## Images, Open Graph and Twitter Cards

This theme uses Hugos `feature/cover` name method to set the optimized feature image. The image named `*feature*` or `*cover*` is used for the posts featured image and get resized. This will also be in the Twitter Cards and Open Graph block.

The header image is automatically added if there is a file called `*feature*` or `*cover*`. The first wildcard is preferred over the second one. If there are multiple images the first one is used.

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

There are two menus in the theme. `main` and `footer`. Specify the entries in the config or the header of the content. `params.icon` shows an icon from `data/bpicons.json` in front of the name (see [Icons](#icons)).

```yaml
[menu]

  [[menu.main]]
    identifier = "about"
    name = "About"
    url = "/about/"
    weight = 10
    [menu.main.params]
      icon = "newspaper"

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

Icons for Social Media in the footer. Add the block to the config, empty values are skipped. The links of profiles also go into the `sameAs` list of the start page schema and get `rel="me"` (e.g. for Mastodon verification).

```toml
# Value should be your username unless otherwise noted.
[params.social]
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
  facebook         = ""
  reddit           = ""
  quora            = ""
  youtube          = "" # e.g. "@name" or "channel/ID"
  youtube2         = "" # second channel
  vimeo            = ""
  whatsapp         = "" # WhatsApp Number
  instagram        = ""
  tiktok           = "" # @username
  tumblr           = ""
  twitter          = "" # links to x.com
  mastodon         = "" # full profile URL, e.g. "https://mastodon.social/@name"
  snapchat         = ""
  pinterest        = ""
  telegram         = ""
  discord          = "" # invite link
  twitch           = ""
  # Email
  email            = ""
```

The networks, their URLs, icons and order are defined in `data/bpsocial.yaml`. Copy it to `data/bpsocial.yaml` in your site to change the order or add a network (icon from `data/bpicons.json`).

**Upgrading from older versions:** `googleplus` and `skype` were removed (both services are shut down).

## Icons

All icons of the theme are inline SVGs rendered by the `icon.html` partial. Only the icons a page actually uses end up in its HTML, no icon font is downloaded.

```go-html-template
{{ partial "icon.html" "clock" }}
{{ partial "icon.html" (dict "name" "github" "class" "icon-2x") }}
```

The icons are stored in `data/bpicons.json` (glyphs from [Font Awesome Free 5](https://fontawesome.com/license/free), CC BY 4.0). To add your own icon, create `data/bpicons.json` in your site with an entry `"name": {"w": <width>, "d": "<path>"}`. The path uses font units (512 units high, baseline at 0, like the Font Awesome 5 SVG fonts).

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

## Post cards

Cards show the categories as a small line above the title, a meta line (date, reading time; on the full page also last updated and author) and the tags below. Tags that are also a category are skipped, lists show at most three tags. In lists the whole card links to the post and the summary is cut after four lines.

- Accent color of the category line: set `--bp-accent` in your `assets/css/custom.css`, e.g. `:root { --bp-accent: #c2410c; }`. Default is the `$primary` color of the color theme.
- Extra content below the meta line: create `layouts/_partials/content_card_body_extra.html` in your site. The theme ships an empty one.
- Reading time label: i18n key `readingTimeShort`.

The card partials (`content_card_header.html`, `content_card_body.html`, `content_card_body_subtitle.html`, `content_card_footer.html`) get a dict with `page`, `fullsize`, `summary` and `list` from `content.html` / `content_index.html` (called with a page they render the full page). `content_card_body_extra.html` gets the page. In lists the title is an `h2` styled as `h1`, only the page itself has an `h1`.

**Upgrading from older versions:** sites with their own copy of `content_card_body.html` should remove it (or compare it with the new one), otherwise the old meta line and "Read more" link stay. Own copies of the card partials that use `.Scratch.Get "fullsize"` / `"showPostSummary"` must read `.fullsize` / `.summary` / `.page` from the dict instead. The `Event` schema for pages with `datum` moved out of the theme, use `seo_schema_page.html` for it.

## Below posts: older/newer and related posts

Pages of the main sections (Hugo's `mainSections`, by default the section with the most pages) show links to the older and newer post of the section and up to three related posts. Related posts use Hugo's [related content](https://gohugo.io/content-management/related-content/) (by default tags, keywords and date). Older/newer links are only shown for pages with a date.

- Turn off with `hidePostNav = true` / `hideRelated = true` in `[params]`.
- Change the markup: create `layouts/_partials/post_footer.html` in your site.
- Labels: i18n keys `olderPost`, `newerPost`, `relatedPosts`.

## Markdown images and alerts

Images in Markdown that are page resources (or files in `assets/`) are converted to WebP (max. 1108 px wide) with `width` and `height`; images in `static/`, remote images and SVGs stay as they are. All Markdown images load lazily.

```markdown
![Alt text](photo.jpg "Optional title")
```

GitHub style alerts are rendered as Bootstrap alerts. Types: `NOTE`, `TIP`, `IMPORTANT`, `WARNING`, `CAUTION`; a title after the type is optional (default: i18n keys `alertNote`, `alertTip`, ...).

```markdown
> [!TIP] Optional title
> Helpful advice for doing things better or more easily.
```

## Floating images

`img-post` shows a resource of the page (max. 384 px wide, WebP) floating right or left of the text, or centered.

```
{{< img-post file="photo.jpg" alt="Description" type="right" >}}
```

`type` is `right`, `left` or `center` (default). Positional parameters (`path`, `file`, `alt`, `type`) still work, `path` is ignored.

## Performance: Bootstrap parts, JavaScript and Font Awesome

To keep pages small the theme only compiles the Bootstrap parts it uses (see `assets/sass/_bootstrap-imports.scss`):

- Components: modal, carousel, tooltip, popover, offcanvas, accordion, toasts and a few others are left out.
- Forms: no range slider (`form-range`), floating labels and validation styles (`was-validated`, `is-invalid`, ...).
- Utilities: rarely used groups are left out, e.g. `align-content-*`, `row-gap-*`/`column-gap-*`, `flex-grow-*`/`flex-shrink-*`, `object-fit-*`, `overflow-x/y-*`, `vh-*`/`vw-*`, `link-*` (opacity, offset, underline), `focus-ring`, `user-select-*`, `pointer-events`, `z-*`, `bg-gradient`.
- Bootstrap's color modes (`data-bs-theme="dark"`) are off, the color themes are separate stylesheets (`themeColor`).

If you need one of them, copy `assets/sass/_bootstrap-imports.scss` from the theme to `assets/sass/_bootstrap-imports.scss` in your site and uncomment the component or remove the utility group from the `map-remove` list. Components that need JavaScript also require `bootstrapJS = true`.

**Upgrading from older versions:** Font Awesome is no longer part of the theme and the Bootstrap JavaScript bundle is no longer loaded by default. Since v5.3.8.11 the form parts and utility groups listed above are left out as well. `content_index.html` gets a dict (`page`, `eager`) from `index.html`; own copies of `content_index.html` that are called by the theme's `index.html` must read `.page` (or also override `index.html`).

- Bootstrap JavaScript components (modal, tooltip, ...): set `bootstrapJS = true`.
- Menu icons via `pre = "<i class='fas fa-...'></i>"`: replace them with `[menu.main.params] icon = "..."`.
- Font Awesome classes in your content or layouts (`<i class="fas fa-...">`): switch to `{{ partial "icon.html" "name" }}`, or load Font Awesome yourself with the existing `csscdn` parameter:

```toml
[params]
  csscdn = ["https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"]
```
