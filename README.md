# CEB Rodrigues Field — marketing site

Product page for **CEB Rodrigues Field**.

- **Live preview:** https://gilbertbouic.github.io/ceb-website/
- **Custom domain (after DNS):** https://ceb.mkweli.tech

## Hostinger DNS (required)

Domains → mkweli.tech → DNS — add:

| Type  | Name | Value                   | TTL  |
|-------|------|-------------------------|------|
| CNAME | `ceb`| `gilbertbouic.github.io`| 3600 |

Same pattern as `aml` and `lakazagri`.

After DNS propagates, GitHub Pages will issue HTTPS for `ceb.mkweli.tech` (repo already has `CNAME` file).

## Stack

Static HTML/CSS/JS on GitHub Pages.

## Pilot APK (GitHub Releases)

The signed evaluation build is **hosted on GitHub Releases**. The product page only links to it.

- **Release:** https://github.com/gilbertbouic/ceb-website/releases/tag/v0.3.1-pilot
- **Direct APK:** https://github.com/gilbertbouic/ceb-website/releases/download/v0.3.1-pilot/ceb-rodrigues-field-0.3.1-pilot.apk
- **Product page:** https://ceb.mkweli.tech/#download
- **SHA-256:** `0d3b00698faeb165a186a83f3fdc0764ddbebe30fa7370ca91be5919e49dbe44`

Publish a new build:

```bash
# from field-apk
./gradlew assembleRelease
gh release create vX.Y.Z-pilot dist/ceb-rodrigues-field-….apk \
  --repo gilbertbouic/ceb-website --title "…" --notes "…"
# then update download URLs + SHA-256 on this site and push
```
