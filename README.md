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

## Pilot APK

Signed evaluation build is served from this site:

- **URL:** https://ceb.mkweli.tech/downloads/ceb-rodrigues-field-0.3.1-pilot.apk
- **File:** `downloads/ceb-rodrigues-field-0.3.1-pilot.apk`
- **SHA-256:** `0d3b00698faeb165a186a83f3fdc0764ddbebe30fa7370ca91be5919e49dbe44`

Rebuild from the `ceb` / `field-apk` project (`./gradlew assembleRelease`), copy into `downloads/`, update the SHA-256 on the site, then push.
