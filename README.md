# Mkweli Grid — marketing site

Product page for **Mkweli Grid**.

- **Live:** https://grid.mkweli.tech
- **App repo:** https://github.com/gilbertbouic/ceb

## Hostinger DNS

Domains → mkweli.tech → DNS:

| Type  | Name | Value                    | TTL  |
|-------|------|--------------------------|------|
| CNAME | `grid` | `gilbertbouic.github.io` | 3600 |
| URL redirect (optional) | `ceb` | `https://grid.mkweli.tech` | — |

After DNS, GitHub Pages issues HTTPS for `grid.mkweli.tech` (see `CNAME`).

## Stack

Static HTML/CSS/JS on GitHub Pages.

## Evaluation APK

Hosted on this site (not GitHub Releases):

- **Product page:** https://grid.mkweli.tech/#download
- **Direct APK:** https://grid.mkweli.tech/downloads/mkweli-grid-0.3.3.apk

Publish a new build from the app repo:

```bash
./gradlew assembleRelease
cp app/build/outputs/apk/release/app-release.apk \
  ../ceb-website/downloads/mkweli-grid-X.Y.Z.apk
sha256sum ../ceb-website/downloads/mkweli-grid-X.Y.Z.apk
# update download URLs + SHA-256 on this site and push
```
