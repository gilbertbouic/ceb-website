# Mkweli Grid — marketing site

Product page for **Mkweli Grid** (offline field toolkit for isolated and rural grids).
First pilot: Rodrigues, Mauritius.

- **Live:** https://ceb.mkweli.tech
- **App repo:** https://github.com/gilbertbouic/ceb

## Hostinger DNS

Domains → mkweli.tech → DNS:

| Type  | Name | Value                   | TTL  |
|-------|------|-------------------------|------|
| CNAME | `ceb`| `gilbertbouic.github.io`| 3600 |

Same pattern as `aml` and `lakazagri`. Subdomain stays `ceb.mkweli.tech` during the Rodrigues pilot.

## Stack

Static HTML/CSS/JS on GitHub Pages.

## Pilot APK (GitHub Releases)

The signed evaluation build is **hosted on GitHub Releases**. The product page only links to it.

- **Release:** https://github.com/gilbertbouic/ceb-website/releases/tag/v0.3.2-pilot
- **Direct APK:** https://github.com/gilbertbouic/ceb-website/releases/download/v0.3.2-pilot/ceb-rodrigues-field-0.3.2-pilot.apk
- **Product page:** https://ceb.mkweli.tech/#download
- **SHA-256:** `0d3b00698faeb165a186a83f3fdc0764ddbebe30fa7370ca91be5919e49dbe44`

Publish a new build from the [ceb](https://github.com/gilbertbouic/ceb) app repo:

```bash
./gradlew assembleRelease
gh release create vX.Y.Z-pilot dist/…apk \
  --repo gilbertbouic/ceb-website --title "Mkweli Grid …" --notes "…"
# then update download URLs + SHA-256 on this site and push
```
