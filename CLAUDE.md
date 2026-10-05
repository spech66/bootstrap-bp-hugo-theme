# bootstrap-bp-hugo-theme

Open source Hugo theme based on Bootstrap 5 (github.com/spech66/bootstrap-bp-hugo-theme).
Listed in the Hugo themes gallery, so `theme.toml`, `README.md` and `images/` are public facing.

## Versioning and tags

Tags must be valid semver (`vMAJOR.MINOR.PATCH`): the Hugo themes gallery
(github.com/gohugoio/hugoThemesSiteBuilder) and `hugo mod get` resolve versions through the Go
module proxy, which ignores everything else and shows the highest semver tag as the latest version.

The tag encodes the bundled Bootstrap version plus the theme release:
`vMAJOR.MINOR.(PATCH * 100 + RELEASE)`

- Bootstrap 5.3.8, theme release 14: `v5.3.814`; next release `v5.3.815`.
- After a Bootstrap update the release starts at 0: Bootstrap 5.3.9 is `v5.3.900`, then `v5.3.901`.
  Bootstrap 5.4.0 is `v5.4.0`, then `v5.4.1`; Bootstrap 5.4.1 is `v5.4.100`.
- Check the last tag with `git tag -l "v5.3.8[0-9][0-9]"` (or `git tag --sort=-v:refname | head`).
- The old four part tags (`v5.3.8.1` ... `v5.3.8.13`) stay for history but are invisible to Go.
  Do not create new ones.

Release steps (always commit and push first, then tag):

```
git push origin master
git tag -a v5.3.815 -m "Short description of the release"
git push origin v5.3.815
```

Check what the gallery will see (can take a few minutes after pushing the tag):
`curl https://proxy.golang.org/github.com/spech66/bootstrap-bp-hugo-theme/@latest`

## Updating Bootstrap

Run `update.ps1` (PowerShell, needs npm). It runs `npm update`, copies `bootstrap.bundle.min.js`
to `assets/js/` and the Bootstrap SCSS to `assets/sass/bootstrap/`, and prints the new version and
the matching tag commands. Then:

1. Build the example site and check the start page, a post and the dark/light/blue color themes.
2. Check `assets/sass/_bootstrap-imports.scss` against the new Bootstrap SCSS (new or renamed
   components, form parts, utility keys in the `map-remove` list), and `assets/js/navigation.js`
   if collapse or dropdown markup changed.
3. Commit, push, tag with the new Bootstrap version and release 0 (see above, `update.ps1` prints it).

`node_modules/` and `resources/` are build artifacts, do not commit them.

## Example site

```
hugo server -s exampleSite --themesDir ../..
```

(run from the theme folder; the example site expects the theme two folders up).

## Gallery screenshots

The Hugo themes gallery uses `images/screenshot.png` (1500x1000) and `images/tn.png` (900x600).
`screenshot2.png` and `tn2.png` show the second start page layout and are used in the README.

- `screenshot.png` / `tn.png`: grid layout (`startPageColumns = true`, `showPostSummary = true`), shown in the gallery
  and first in the README.
- `screenshot2.png` / `tn2.png`: default settings (`startPageColumns = false`).

Every post on the first start page needs a feature image (page bundle with `feature-*.jpg`), otherwise
the grid has gaps. The demo photos are from Pixabay (sources at the end of `post/005-theme-info`).

For both, set `alwaysExpandMenu = true` and disable YouTube embeds (`[privacy.youtube] disable = true`),
the demo video does not render in headless browsers. An extra config file passed with
`--config hugo.toml,shots.toml` keeps `exampleSite/hugo.toml` unchanged. Capture at 1500x1000 with
device scale factor 1 (screenshots) and 0.6 (thumbnails), e.g. with headless Edge/Chrome
(`--headless=new --hide-scrollbars --window-size=1500,1000 --screenshot=...`).
Building with `-b "file:///<output dir>/"` and opening `index.html` needs no server, but then Edge needs
`--allow-file-access-from-files`, otherwise the CSS (with SRI) is not loaded.

## Conventions

- Performance first: no icon font (inline SVG via `partial "icon.html"`, icons in `data/bpicons.json`),
  no Bootstrap JS bundle by default (`navigation.js`, opt in with `params.bootstrapJS`), only the
  needed Bootstrap components in `_bootstrap-imports.scss`, images as WebP via `image-webp.html`.
- Keep site specific features out of the theme. Sites override partials in their own `layouts/`.
- Template structure of Hugo 0.146+: `layouts/_partials/`, `_shortcodes/`, `_markup/`, `home.html`,
  `page.html`, `list.html`, `taxonomy.html`. Embedded templates via `partial "opengraph.html"` etc.,
  not `template "_internal/..."`. Sites may still use the old paths for their overrides.
- Document new parameters, partials and shortcodes in `README.md` (and the table of contents there).
- Keep `min_version` in `theme.toml` and `module.hugoVersion.min` in `hugo.toml` in line with the
  Hugo features used.
