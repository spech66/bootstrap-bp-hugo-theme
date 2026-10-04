# bootstrap-bp-hugo-theme

Open source Hugo theme based on Bootstrap 5 (github.com/spech66/bootstrap-bp-hugo-theme).
Listed in the Hugo themes gallery, so `theme.toml`, `README.md` and `images/` are public facing.

## Versioning and tags

Tags follow the Bootstrap version the theme ships, plus an optional fourth number for theme releases:

- `vMAJOR.MINOR.PATCH` is the bundled Bootstrap version, e.g. `v5.3.8`.
- Theme changes on top of an already tagged Bootstrap version get a fourth number, counting up:
  `v5.3.8.1`, `v5.3.8.2`, ... Check the last one with `git tag -l "v5.3.8*"`.
- After a Bootstrap update the fourth number starts over: the first tag is the plain Bootstrap
  version (e.g. `v5.3.9`), later theme releases are `v5.3.9.1`, `v5.3.9.2`, ...

Release steps (always commit and push first, then tag):

```
git push origin master
git tag -a v5.3.8.7 -m "Short description of the release"
git push origin v5.3.8.7
```

## Updating Bootstrap

Run `update.ps1` (PowerShell, needs npm). It runs `npm update`, copies `bootstrap.bundle.min.js`
to `assets/js/` and the Bootstrap SCSS to `assets/sass/bootstrap/`, and prints the new version and
the matching tag commands. Then:

1. Build the example site and check the start page, a post and the dark/light/blue color themes.
2. Check `assets/sass/_bootstrap-imports.scss` against the new Bootstrap SCSS (new or renamed
   components, form parts, utility keys in the `map-remove` list), and `assets/js/navigation.js`
   if collapse or dropdown markup changed.
3. Commit, push, tag with the plain Bootstrap version (see above).

`node_modules/` and `resources/` are build artifacts, do not commit them.

## Example site

```
hugo server -s exampleSite --themesDir ../..
```

(run from the theme folder; the example site expects the theme two folders up).

## Gallery screenshots

The Hugo themes gallery uses `images/screenshot.png` (1500x1000) and `images/tn.png` (900x600).
`screenshot2.png` and `tn2.png` show the second start page layout and are used in the README.

- `screenshot.png` / `tn.png`: example site with default settings (`startPageColumns = false`).
- `screenshot2.png` / `tn2.png`: `startPageColumns = true` and `showPostSummary = true`.

For both, set `alwaysExpandMenu = true` and disable YouTube embeds (`[privacy.youtube] disable = true`),
the demo video does not render in headless browsers. An extra config file passed with
`--config hugo.toml,shots.toml` keeps `exampleSite/hugo.toml` unchanged. Capture at 1500x1000 with
device scale factor 1 (screenshots) and 0.6 (thumbnails), e.g. with headless Edge/Chrome
(`--headless=new --hide-scrollbars --window-size=1500,1000 --screenshot=...`).

## Conventions

- Performance first: no icon font (inline SVG via `partial "icon.html"`, icons in `data/bpicons.json`),
  no Bootstrap JS bundle by default (`navigation.js`, opt in with `params.bootstrapJS`), only the
  needed Bootstrap components in `_bootstrap-imports.scss`, images as WebP via `image-webp.html`.
- Keep site specific features out of the theme. Sites override partials in their own `layouts/`.
- Template structure of Hugo 0.146+: `layouts/_partials/`, `_shortcodes/`, `_markup/`, `home.html`,
  `page.html`, `list.html`, `taxonomy.html`. Embedded templates via `partial "opengraph.html"` etc.,
  not `template "_internal/..."`. Sites may still use the old paths for their overrides.
- Document new parameters, partials and shortcodes in `README.md` (and the table of contents there).
- Keep `min_version` in `theme.toml` in line with the Hugo features used.
